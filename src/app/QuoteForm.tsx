"use client";

import { FormEvent, useState } from "react";

const projectTypes = ["Tiles", "Flooring", "Furnishings", "Construction"];

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid w-full min-w-0 gap-4 rounded-[6px] border border-stone-200 bg-white p-5 shadow-[0_22px_70px_rgba(40,34,27,0.08)] sm:p-6"
    >
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
        className="h-12 min-w-0 rounded-[4px] bg-stone-950 px-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2"
      >
        Request quote
      </button>

      <p className="min-h-5 min-w-0 text-sm text-stone-600" aria-live="polite">
        {submitted
          ? "Thanks. This v1 form is frontend-only; call or email Metro to send the request today."
          : "Frontend-only form for v1. Contact details are listed below for live inquiries."}
      </p>
    </form>
  );
}
