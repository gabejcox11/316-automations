"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CONTACT_FORM, WEBHOOK_URL } from "@/lib/constants";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [smsConsent, setSmsConsent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      smsConsent: true,
      smsConsentTimestamp: new Date().toISOString(),
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 bg-bg-alt">
      <div className="max-w-[600px] mx-auto px-6">
        <SectionHeader
          label={CONTACT_FORM.label}
          title={CONTACT_FORM.title}
          subtitle={CONTACT_FORM.subtitle}
        />

        {status === "sent" ? (
          <div className="text-center py-12 px-6 bg-green-light rounded-2xl border border-border-light">
            <p className="text-2xl font-heading font-bold text-black-warm mb-2">
              {CONTACT_FORM.successTitle}
            </p>
            <p className="text-gray-warm">{CONTACT_FORM.successMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black-warm mb-1.5">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="John Smith"
                  className="bg-white border-border-light focus-visible:ring-green-dark"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-black-warm mb-1.5">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(555) 123-4567"
                  className="bg-white border-border-light focus-visible:ring-green-dark"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-black-warm mb-1.5">
                Service needed
              </label>
              <Input
                id="service"
                name="service"
                placeholder="e.g. AC repair, roof inspection"
                className="bg-white border-border-light focus-visible:ring-green-dark"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black-warm mb-1.5">
                Anything else?
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us what you need help with..."
                className="bg-white border-border-light focus-visible:ring-green-dark resize-none"
              />
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="sms-consent"
                name="sms-consent"
                required
                checked={smsConsent}
                onChange={(e) => setSmsConsent(e.target.checked)}
              />
              <label htmlFor="sms-consent" className="text-xs text-text-light leading-[1.6] cursor-pointer">
                I agree to receive text messages from 316 Automations. Messages may include appointment confirmations, scheduling follow-ups, and service updates. Message frequency varies. Msg &amp; data rates may apply. Reply STOP to cancel. View our{" "}
                <a href="/privacy" className="text-[#166534] underline underline-offset-2">Privacy Policy</a> and{" "}
                <a href="/terms" className="text-[#166534] underline underline-offset-2">Terms</a>.
              </label>
            </div>

            <Button
              type="submit"
              disabled={status === "sending" || !smsConsent}
              className="w-full bg-green-dark hover:bg-green-mid text-white rounded-full py-3 text-base font-semibold disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : CONTACT_FORM.cta}
            </Button>

            {status === "error" && (
              <p className="text-sm text-destructive text-center">
                Something went wrong. Please try again or call us directly.
              </p>
            )}

            <p className="text-xs text-text-light text-center">{CONTACT_FORM.fine}</p>
          </form>
        )}
      </div>
    </section>
  );
}
