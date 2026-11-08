"use client";

import { useState } from "react";
import Container from "./Container";
import Button from "./Button";
import { SITE } from "@/lib/site";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-line bg-white">
      <Container>
        <div className="flex items-center justify-between py-[22px]">
          <a href="/" className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-accent text-xl font-bold text-white"
            >
              M
            </span>
            <span className="text-lg font-semibold">{SITE.name}</span>
          </a>

          <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[15px] font-medium hover:text-ink ${
                  i === 0 ? "text-ink" : "text-muted"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="/#contact" size="sm">
              Hire me
            </Button>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-line text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M4 4l12 12M16 4L4 16" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="flex flex-col gap-1 pb-5 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-1 py-3 text-base font-medium text-ink"
              >
                {link.label}
              </a>
            ))}
            <Button
              href="/#contact"
              size="sm"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Hire me
            </Button>
          </nav>
        )}
      </Container>
    </header>
  );
}
