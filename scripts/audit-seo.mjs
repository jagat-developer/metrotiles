#!/usr/bin/env node

const DEFAULT_BASE_URL = "http://localhost:3000";
const baseUrl = new URL(process.env.SEO_AUDIT_BASE_URL ?? DEFAULT_BASE_URL);

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function stripTags(value) {
  return decodeHtml(value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " "));
}

function getAttribute(tag, name) {
  const pattern = new RegExp(
    `(?:^|\\s)${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`,
    "i"
  );
  const match = tag.match(pattern);
  return match ? decodeHtml(match[2] ?? match[3] ?? match[4] ?? "") : "";
}

function normalizeUrl(value) {
  const url = new URL(value);
  url.hash = "";
  if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, -1);
  }
  return url.toString();
}

function localUrlFor(canonicalUrl) {
  const url = new URL(canonicalUrl);
  return new URL(`${url.pathname}${url.search}`, baseUrl).toString();
}

async function fetchText(url) {
  const response = await fetch(url);
  const text = await response.text();
  return { response, text };
}

function parseSitemap(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/gis)].map((match) =>
    normalizeUrl(decodeHtml(match[1]))
  );
}

function parsePage(html, canonicalPageUrl, sitemapUrls) {
  const title = stripTags(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "");
  const h1Count = [...html.matchAll(/<h1\b/gi)].length;
  const jsonLdCount = [
    ...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>/gi),
  ].length;

  const metaTags = [...html.matchAll(/<meta\b[^>]*>/gi)].map((match) => match[0]);
  const description =
    metaTags
      .map((tag) =>
        getAttribute(tag, "name").toLowerCase() === "description"
          ? getAttribute(tag, "content")
          : ""
      )
      .find(Boolean) ?? "";

  const linkTags = [...html.matchAll(/<link\b[^>]*>/gi)].map((match) => match[0]);
  const canonical =
    linkTags
      .map((tag) =>
        getAttribute(tag, "rel").toLowerCase() === "canonical"
          ? getAttribute(tag, "href")
          : ""
      )
      .find(Boolean) ?? "";

  const anchors = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)].flatMap(
    (match) => {
      const href = getAttribute(match[1], "href");
      if (!href || /^(mailto:|tel:|javascript:)/i.test(href)) {
        return [];
      }

      const resolved = new URL(href, localUrlFor(canonicalPageUrl));
      const canonicalOrigin = new URL(canonicalPageUrl).origin;
      const isInternal =
        resolved.origin === baseUrl.origin || resolved.origin === canonicalOrigin;

      if (!isInternal) {
        return [];
      }

      const text = stripTags(match[2]);
      const imageAlt =
        [...match[2].matchAll(/<img\b[^>]*>/gi)]
          .map((img) => getAttribute(img[0], "alt"))
          .find(Boolean) ?? "";
      const target = normalizeUrl(
        `${canonicalOrigin}${resolved.pathname}${resolved.search}`
      );

      return [
        {
          href,
          target,
          text: text || imageAlt,
          inSitemap: sitemapUrls.has(target),
        },
      ];
    }
  );

  return {
    title,
    description,
    canonical: canonical ? normalizeUrl(canonical) : "",
    h1Count,
    jsonLdCount,
    anchors,
  };
}

function groupDuplicates(pages, field) {
  const groups = new Map();

  for (const page of pages) {
    const value = page[field];
    if (!value) {
      continue;
    }
    groups.set(value, [...(groups.get(value) ?? []), page.url]);
  }

  return [...groups.entries()].filter(([, urls]) => urls.length > 1);
}

async function main() {
  const errors = [];
  const warnings = [];
  const sitemapUrl = new URL("/sitemap.xml", baseUrl).toString();
  const robotsUrl = new URL("/robots.txt", baseUrl).toString();

  const [{ response: sitemapResponse, text: sitemapXml }, { response: robotsResponse, text: robotsTxt }] =
    await Promise.all([fetchText(sitemapUrl), fetchText(robotsUrl)]);

  if (!sitemapResponse.ok) {
    errors.push(`Sitemap returned HTTP ${sitemapResponse.status}: ${sitemapUrl}`);
  }

  if (!robotsResponse.ok) {
    errors.push(`Robots returned HTTP ${robotsResponse.status}: ${robotsUrl}`);
  }

  const sitemapUrls = parseSitemap(sitemapXml);
  const sitemapSet = new Set(sitemapUrls);

  if (!sitemapUrls.length) {
    errors.push("Sitemap has no <loc> URLs.");
  }

  if (!robotsTxt.includes("/sitemap.xml")) {
    errors.push("robots.txt does not reference /sitemap.xml.");
  }

  const pages = [];
  const inboundLinks = new Map(sitemapUrls.map((url) => [url, new Set()]));
  const linkTargets = new Map();

  for (const url of sitemapUrls) {
    const localUrl = localUrlFor(url);
    const { response, text } = await fetchText(localUrl);

    if (!response.ok) {
      errors.push(`Sitemap URL returned HTTP ${response.status}: ${url}`);
      continue;
    }

    const page = { url, ...parsePage(text, url, sitemapSet) };
    pages.push(page);

    if (!page.title) {
      errors.push(`Missing <title>: ${url}`);
    }
    if (!page.description) {
      errors.push(`Missing meta description: ${url}`);
    }
    if (!page.canonical) {
      errors.push(`Missing canonical link: ${url}`);
    } else if (page.canonical !== url) {
      errors.push(`Canonical mismatch: ${url} -> ${page.canonical}`);
    }
    if (page.h1Count !== 1) {
      errors.push(`Expected exactly one H1, found ${page.h1Count}: ${url}`);
    }
    if (page.jsonLdCount === 0) {
      errors.push(`Missing JSON-LD script: ${url}`);
    }

    for (const anchor of page.anchors) {
      if (!anchor.text) {
        warnings.push(`Internal link has empty anchor text on ${url}: ${anchor.href}`);
      }
      if (anchor.inSitemap && anchor.target !== url) {
        inboundLinks.get(anchor.target)?.add(url);
      }
      linkTargets.set(anchor.target, anchor);
    }
  }

  for (const target of linkTargets.keys()) {
    const localTarget = localUrlFor(target);
    const response = await fetch(localTarget, { redirect: "follow" });
    if (response.status >= 400) {
      errors.push(`Broken internal link returned HTTP ${response.status}: ${target}`);
    }
  }

  for (const [url, sources] of inboundLinks) {
    if (url !== normalizeUrl(new URL("/", new URL(url).origin).toString()) && sources.size === 0) {
      errors.push(`Sitemap URL has no non-self internal links: ${url}`);
    }
  }

  for (const [title, urls] of groupDuplicates(pages, "title")) {
    warnings.push(
      `Duplicate title on ${urls.length} pages: "${title}" (${urls.join(", ")})`
    );
  }

  for (const [description, urls] of groupDuplicates(pages, "description")) {
    warnings.push(
      `Duplicate meta description on ${urls.length} pages: "${description}" (${urls.join(", ")})`
    );
  }

  console.log(`SEO audit base: ${baseUrl.origin}`);
  console.log(`Sitemap URLs checked: ${sitemapUrls.length}`);
  console.log(`Pages crawled: ${pages.length}`);
  console.log(`Unique internal link targets checked: ${linkTargets.size}`);

  if (warnings.length) {
    console.log("\nWarnings:");
    warnings.forEach((warning) => console.log(`- ${warning}`));
  }

  if (errors.length) {
    console.error("\nErrors:");
    errors.forEach((error) => console.error(`- ${error}`));
    process.exitCode = 1;
    return;
  }

  console.log("\nSEO audit passed with no blocking errors.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
