"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PreviewBody } from "./SitePreview";
import { projects } from "@/lib/data";

const INTERVAL_MS = 5000;

export default function HeroCarousel({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false); // pause button
  const [engaged, setEngaged] = useState(false); // mouse over or keyboard focus inside
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = () => setReducedMotion(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const playing = !userPaused && !engaged && !reducedMotion;

  // Advance every few seconds. Depending on `index` restarts the timer when a dot is clicked.
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % projects.length),
      INTERVAL_MS
    );
    return () => clearInterval(id);
  }, [playing, index]);

  const current = projects[index];

  return (
    <div
      className={className}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      onMouseEnter={() => setEngaged(true)}
      onMouseLeave={() => setEngaged(false)}
      onFocus={() => setEngaged(true)}
      onBlur={() => setEngaged(false)}
    >
      <div className="flex h-[320px] flex-col overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_20px_40px_rgba(0,0,0,0.12)] sm:h-[440px]">
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-1.5 bg-gray-100 px-3.5 py-2.5"
        >
          <span className="h-[9px] w-[9px] rounded-full bg-gray-300" />
          <span className="h-[9px] w-[9px] rounded-full bg-gray-300" />
          <span className="h-[9px] w-[9px] rounded-full bg-gray-300" />
        </div>

        <div className="relative flex-1">
          {projects.map((p, i) => (
            <div
              key={p.title}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${projects.length}: ${p.title}`}
              aria-hidden={i !== index}
              className={`absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {p.image ? (
                <Image
                  src={p.image}
                  alt={`Screenshot of the ${p.title} website`}
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  priority={i === 0}
                  className="object-cover object-top"
                />
              ) : (
                <PreviewBody accent={p.accent} soft={p.soft} large />
              )}
            </div>
          ))}

          <a
            href={`/projects#${current.slug}`}
            aria-label={`View the ${current.title} project`}
            className="absolute inset-0 z-10 focus-visible:outline-offset-[-3px]"
          />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div aria-live={playing ? "off" : "polite"} aria-atomic="true" className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">{current.title}</p>
          <p className="truncate text-sm text-muted">
            {current.badge} · {current.tags.join(", ")}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          {projects.map((p, i) => (
            <button
              key={p.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show project ${i + 1}: ${p.title}`}
              aria-current={i === index}
              className="flex h-7 w-7 items-center justify-center rounded-full"
            >
              <span
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === index ? "bg-accent" : "bg-gray-300"
                }`}
              />
            </button>
          ))}

          {!reducedMotion && (
            <button
              type="button"
              onClick={() => setUserPaused((v) => !v)}
              aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
              className="ml-1 flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink hover:bg-surface"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                {userPaused ? (
                  <path d="M3 1.5v9l7.5-4.5z" />
                ) : (
                  <path d="M2.5 1.5h2.5v9H2.5zM7 1.5h2.5v9H7z" />
                )}
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
