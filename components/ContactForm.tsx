"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

// Must match PROJECT_TYPES in app/api/contact/route.ts
const projectTypes = [
  "Business website",
  "Online store",
  "Redesign of an existing site",
  "Something else",
];

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full rounded-[10px] border border-gray-300 bg-white px-4 py-3 text-base text-ink placeholder:text-gray-400 focus:border-accent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setErrorMessage("");

    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || "Something went wrong.");
      }
      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-line bg-accent-soft p-8"
      >
        <h2 className="text-2xl font-bold">Message sent</h2>
        <p className="mt-3 text-lg leading-8 text-muted">
          Thank you. I’ll reply within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-semibold">
          Your name
        </label>
        <input id="name" name="name" type="text" required maxLength={100} autoComplete="name" className={field} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-semibold">
          Your email
        </label>
        <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="projectType" className="text-sm font-semibold">
          What do you need?
        </label>
        <select id="projectType" name="projectType" required defaultValue="" className={field}>
          <option value="" disabled>
            Choose one
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold">
          Tell me about your project
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          className={field}
        />
      </div>

      {/* Spam trap: hidden from people. If it is filled in, the message is dropped. */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div aria-live="polite">
        {status === "error" && (
          <p role="alert" className="rounded-[10px] bg-red-50 p-4 text-[15px] leading-6 text-red-800">
            {errorMessage} Please try again, or email me directly at{" "}
            <a href={`mailto:${SITE.email}`} className="font-semibold underline">
              {SITE.email}
            </a>
            .
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-fit items-center justify-center rounded-[10px] bg-accent px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
