"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Logo } from "@/components/shared/logo";
import { NAV_LINKS, CALENDLY_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 bg-bg-warm border-b border-border-light transition-shadow duration-200",
        scrolled && "shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
      )}
    >
      <div className="max-w-[1160px] mx-auto px-6 flex items-center justify-between h-[68px]">
        <a href="/" aria-label="316 Automations home">
          <Logo width={140} height={40} />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.9375rem] font-medium text-gray-warm hover:text-black-warm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <Button
          asChild
          className="hidden md:inline-flex rounded-full bg-black-warm hover:bg-navy-light text-white font-semibold text-[0.9375rem] px-[22px] py-[10px]"
        >
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Book a Free Call
          </a>
        </Button>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <nav className="flex flex-col gap-1 mt-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-gray-warm hover:text-black-warm py-3 border-b border-border-light transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-4 rounded-full bg-black-warm hover:bg-navy-light text-white font-semibold"
              >
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Free Call
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
