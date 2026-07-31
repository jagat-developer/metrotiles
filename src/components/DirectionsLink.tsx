"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { reportGetDirectionsConversion } from "@/lib/gtag";

type DirectionsLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "onClick"
> & {
  href: string;
  children: ReactNode;
};

export function DirectionsLink({
  href,
  children,
  target,
  rel,
  ...rest
}: DirectionsLinkProps) {
  const opensInNewTab = target === "_blank";

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (opensInNewTab) {
      reportGetDirectionsConversion();
      return;
    }
    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      reportGetDirectionsConversion();
      return;
    }
    event.preventDefault();
    reportGetDirectionsConversion(href);
  };

  return (
    <a href={href} target={target} rel={rel} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
