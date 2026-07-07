"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { NAVIGATION } from "@/constants/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--bg)]">
      <Container>
        <nav className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Home">
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
            {NAVIGATION.map((item, index) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`nav-text relative transition-colors duration-300 ${
                    index === 0
                      ? "text-[var(--primary)]"
                      : "text-white hover:text-[var(--primary)]"
                  }`}
                >
                  {item.label}

                  {index === 0 && (
                    <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded bg-[var(--primary)]" />
                  )}
                </Link>
              </li>
            ))}
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
                    className="font-nonchalance block text-2xl"
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