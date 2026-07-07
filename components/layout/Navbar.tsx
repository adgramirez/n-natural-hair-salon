"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { NAVIGATION } from "@/constants/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  // Highlight whichever section is actually in view instead of hardcoding
  // one link as permanently active. A section counts as "current" once it
  // crosses a thin band just below the sticky navbar.
  useEffect(() => {
    const ids = NAVIGATION.map((item) => item.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    // Tracked per id rather than derived from a single entry: intersection
    // entries only fire for sections whose state just changed, so we need
    // to remember which ones are currently in view to know when the
    // active section scrolls out without anything else taking its place.
    const intersecting = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersecting.add(entry.target.id);
          } else {
            intersecting.delete(entry.target.id);
          }
        });

        const current = ids.find((id) => intersecting.has(id));
        setActiveHref(current ? `#${current}` : null);

        // Keep the URL hash in sync with whatever's actually in view.
        // Otherwise, scrolling away from a section manually (rather than
        // via a nav click) leaves the last-clicked hash sitting in the
        // address bar — clicking that same link again would then be a
        // no-op, since the hash wouldn't actually change.
        const nextHash = current ? `#${current}` : "";
        if (window.location.hash !== nextHash) {
          history.replaceState(null, "", window.location.pathname + nextHash);
        }
      },
      { rootMargin: "-100px 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // The logo points at "/", which is already the current route, so
    // Next.js treats a click as a no-op navigation and won't reliably
    // scroll anywhere. Scroll to the true top ourselves instead.
    if (window.location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Clearing scroll position alone leaves the last-clicked section's
      // hash sitting in the URL. Clicking that same nav link again would
      // then be a no-op — the hash wouldn't change, so nothing would
      // scroll — so drop it here to keep the URL in sync with where the
      // page actually is.
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--bg)]">
      <Container>
        <nav className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Home" onClick={handleLogoClick}>
            <Image
              src="/images/logo.png"
              alt="N Natural Hair Salon"
              width={146}
              height={39}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAVIGATION.map((item) => {
              const isActive = activeHref === item.href;

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "nav-text group relative inline-block transition-colors duration-300",
                      isActive
                        ? "text-[var(--primary)]"
                        : "text-white hover:text-[var(--primary)]"
                    )}
                  >
                    {item.label}

                    <span
                      className={clsx(
                        "absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 rounded bg-[var(--primary)] transition-transform duration-300 ease-out group-hover:scale-x-100",
                        isActive && "scale-x-100"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href="#" size="sm">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-white lg:hidden"
            aria-label="Toggle Navigation"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-white/10 py-6 lg:hidden">
            <ul className="space-y-6">
              {NAVIGATION.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "font-nonchalance block text-2xl transition-colors duration-300",
                      activeHref === item.href
                        ? "text-[var(--primary)]"
                        : "text-white"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="#" className="w-full">
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}