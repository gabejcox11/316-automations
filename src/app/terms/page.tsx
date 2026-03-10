import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export const metadata = {
  title: "Terms and Conditions — 316 Automations",
};

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-32 pb-20">
        <article className="max-w-[720px] mx-auto px-6 font-[family-name:var(--font-inter)] text-[#1a1a1a]">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-2">
            Terms and Conditions
          </h1>
          <p className="text-sm text-[#8A8A85] mb-10">
            Last updated: March 9, 2026
          </p>

          <div className="space-y-8 text-[15px] leading-[1.8] text-[#3d3d3d]">
            <section>
              <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
                Service Description
              </h2>
              <p>
                316 Automations (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;)
                provides automated lead response systems for local service
                businesses. Our system responds to missed calls, inbound text
                messages, and website form submissions on behalf of the
                businesses we serve.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
                SMS Terms and Consent
              </h2>
              <p className="mb-3">
                By initiating contact with a business that uses our system
                (calling, texting, or submitting a form), you consent to receive
                automated SMS messages related to your inquiry. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>An initial response to your inquiry</li>
                <li>
                  Follow-up messages to qualify your service request
                </li>
                <li>Appointment booking links</li>
                <li>
                  Up to 3 follow-up messages over 7 days if you do not book
                </li>
                <li>
                  A review request after your service is completed
                </li>
              </ul>
              <p className="mt-3">
                <strong>Message frequency varies.</strong> Message and data rates
                may apply. Your carrier&apos;s standard messaging rates apply.
              </p>
              <p className="mt-3">
                <strong>Opt-out:</strong> You can stop receiving messages at any
                time by replying <strong>STOP</strong> to any message.
              </p>
              <p className="mt-3">
                <strong>Help:</strong> Reply <strong>HELP</strong> to any
                message for assistance, or contact us at{" "}
                <a
                  href="mailto:gabe@316automations.com"
                  className="text-[#166534] underline underline-offset-2"
                >
                  gabe@316automations.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
                Privacy
              </h2>
              <p>
                Your use of our service is also governed by our{" "}
                <a
                  href="/privacy"
                  className="text-[#166534] underline underline-offset-2"
                >
                  Privacy Policy
                </a>
                , which describes how we collect, use, and protect your
                information.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
                Limitation of Liability
              </h2>
              <p>
                316 Automations provides automation services on an &quot;as
                is&quot; basis. We are not liable for missed messages, delayed
                responses, or any damages resulting from the use of our system.
                We do not guarantee that every lead will result in a booked
                appointment or completed job.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
                Modifications
              </h2>
              <p>
                We may update these terms at any time. Continued use of our
                service after changes are posted constitutes acceptance of the
                updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
                Governing Law
              </h2>
              <p>
                These terms are governed by the laws of the State of Tennessee.
                Any disputes will be resolved in the courts of Tennessee.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
                Contact
              </h2>
              <p>
                Questions about these terms? Contact us at{" "}
                <a
                  href="mailto:gabe@316automations.com"
                  className="text-[#166534] underline underline-offset-2"
                >
                  gabe@316automations.com
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
