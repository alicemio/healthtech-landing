"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/5 dark:border-white/10">
      <div className="container-px mx-auto max-w-content">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center" aria-label="AG Health Pro home">
            <Image
              src="/logo.svg"
              alt="AG Health Pro"
              width={120}
              height={49}
              priority
              className="h-8 w-auto md:h-9"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
            <Link href="#services" className="hover:text-foreground">Services</Link>
            <Link href="#how" className="hover:text-foreground">How it works</Link>
            <Link href="#faq" className="hover:text-foreground">FAQ</Link>
            <Link href="#contact" className="hover:text-foreground">Contact Us</Link>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/application"
              className="text-sm font-semibold px-4 py-2 rounded-md bg-[#017399] text-white hover:bg-[#017399]/90"
            >
              Get started
            </Link>
          </div>
          <button
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-black/10 dark:border-white/15"
            aria-label="Open menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Menu</span>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2 text-sm">
              <Link href="#services" className="px-2 py-2 rounded hover:bg-surface">Services</Link>
              <Link href="#how" className="px-2 py-2 rounded hover:bg-surface">How it works</Link>
              <Link href="#faq" className="px-2 py-2 rounded hover:bg-surface">FAQ</Link>
              <Link href="#contact" className="px-2 py-2 rounded hover:bg-surface">Contact Us</Link>
              <Link href="/application" className="px-2 py-2 rounded bg-[#017399] text-white hover:bg-[#017399]/90">Get started</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}


