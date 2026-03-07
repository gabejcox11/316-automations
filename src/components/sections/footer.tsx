import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/shared/logo";
import { FOOTER, CALENDLY_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-black-warm text-white py-16">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Logo variant="text" className="text-white mb-4 block" />
            <p className="text-sm text-[#8A8A85] leading-[1.7]">
              {FOOTER.tagline}
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#5C5C58] mb-4">
              Navigate
            </p>
            <nav className="flex flex-col gap-2.5">
              {FOOTER.navigate.map((link) => (
                <a
                  key={link.href}
                  href={
                    link.href === "#book-call" ? CALENDLY_URL : link.href
                  }
                  target={link.href === "#book-call" ? "_blank" : undefined}
                  rel={
                    link.href === "#book-call"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-sm text-[#8A8A85] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#5C5C58] mb-4">
              Contact
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-white">
                  {FOOTER.contact.availability}
                </p>
                <p className="text-sm text-[#8A8A85]">
                  {FOOTER.contact.availabilityDesc}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {FOOTER.contact.responseTime}
                </p>
                <p className="text-sm text-[#8A8A85]">
                  {FOOTER.contact.responseTimeDesc}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-[#2D2D2A]" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-2 mt-6">
          <p className="text-xs text-[#5C5C58]">{FOOTER.copyright}</p>
          <p className="text-xs text-[#5C5C58]">{FOOTER.bottomTagline}</p>
        </div>
      </div>
    </footer>
  );
}
