"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const projectTypes = ["Tiles", "Flooring", "Furnishings", "Construction"];

type QuoteResponse = {
  ok?: boolean;
  error?: string;
};

export function QuoteForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(
    "Send your project details and Metro will follow up by phone or email."
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setStatusMessage("Sending your quote request...");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      const result = (await response.json().catch(() => ({}))) as QuoteResponse;

      if (!response.ok || !result.ok) {
        setStatusMessage(
          result.error ??
            "We could not send your request right now. Please call or email the showroom directly."
        );
        return;
      }

      form.reset();
      router.push("/thank-you/");
    } catch {
      setStatusMessage(
        "We could not send your request right now. Please call or email the showroom directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      action="/api/quote"
      method="post"
      onSubmit={handleSubmit}
      className="grid w-full min-w-0 gap-4 rounded-[6px] border border-stone-200 bg-white p-5 shadow-[0_22px_70px_rgba(40,34,27,0.08)] sm:p-6"
    >
      <label className="sr-only" aria-hidden="true">
        Company website
        <input
          tabIndex={-1}
          autoComplete="off"
          name="companyWebsite"
          className="hidden"
        />
      </label>

      <div className="grid min-w-0 gap-4 sm:grid-cols-2">
        <label className="grid min-w-0 gap-2 text-sm font-medium text-stone-900">
          Your name
          <input
            required
            name="name"
            className="h-12 w-full min-w-0 rounded-[4px] border border-stone-200 bg-stone-50 px-3 text-base text-stone-950 outline-none transition focus:border-teal-700 focus:bg-white"
            placeholder="Full name"
          />
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-medium text-stone-900">
          Phone or email
          <input
            required
            name="contact"
            className="h-12 w-full min-w-0 rounded-[4px] border border-stone-200 bg-stone-50 px-3 text-base text-stone-950 outline-none transition focus:border-teal-700 focus:bg-white"
            placeholder="How should we reach you?"
          />
        </label>
      </div>

      <fieldset className="grid min-w-0 gap-3">
        <legend className="text-sm font-medium text-stone-900">
          Project type
        </legend>
        <div className="grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-4">
          {projectTypes.map((type) => (
            <label
              key={type}
              className="flex min-h-11 min-w-0 cursor-pointer items-center justify-center rounded-[4px] border border-stone-200 bg-stone-50 px-3 text-center text-sm font-medium text-stone-700 transition has-[:checked]:border-teal-800 has-[:checked]:bg-teal-800 has-[:checked]:text-white"
            >
              <input
                className="sr-only"
                type="radio"
                name="projectType"
                value={type}
                defaultChecked={type === "Tiles"}
              />
              {type}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="grid min-w-0 gap-2 text-sm font-medium text-stone-900">
        Tell us more about the project
        <textarea
          name="message"
          rows={5}
          className="min-w-0 resize-none rounded-[4px] border border-stone-200 bg-stone-50 p-3 text-base text-stone-950 outline-none transition focus:border-teal-700 focus:bg-white"
          placeholder="Room, timeline, product type, measurements, or inspiration."
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-12 min-w-0 rounded-[4px] bg-stone-950 px-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Request quote"}
      </button>

      <p className="min-h-5 min-w-0 text-sm text-stone-600" aria-live="polite">
        {statusMessage}
      </p>
    </form>
  );
}
