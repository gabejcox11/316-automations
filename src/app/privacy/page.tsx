import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export const metadata = {
  title: "Privacy Policy — 316 Automations",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-32 pb-20">
        <article className="max-w-[720px] mx-auto px-6 font-[family-name:var(--font-inter)] text-[#1a1a1a]">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#8A8A85] mb-10">
            Last updated: March 9, 2026
          </p>

          <div className="space-y-8 text-[15px] leading-[1.8] text-[#3d3d3d]">
            <section>
              <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
                Who We Are
              </h2>
              <p>
                316 Automations (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;)
                is a business automation service based in Nashville, TN. We
                build lead response systems for local service businesses. This
                policy explains how we collect, use, and protect your
                information.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
                Information We Collect
              </h2>
              <p className="mb-3">
                When you contact a business that uses our system, we may collect:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Your name</li>
                <li>Phone number</li>
                <li>The service you need</li>
                <li>Your general location or service area</li>
                <li>How urgently you need service</li>
              </ul>
              <p className="mt-3">
                When you use our website, we may collect your name, phone
                number, email address, and any message you submit through our
                contact form.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  To respond to your inquiry via SMS or email
                </li>
                <li>
                  To qualify your service request and connect you with the right
                  business
                </li>
                <li>To send appointment booking links</li>
                <li>
                  To follow up if you haven&apos;t booked (up to 3 follow-up
                  messages over 7 days)
                </li>
                <li>
                  To request a review after your service is completed
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
                SMS Communication
              </h2>
              <p>
                By calling, texting, or submitting a form to a business using
                our system, you consent to receive automated SMS messages
                related to your inquiry. Message frequency varies. Message and
                data rates may apply. You can opt out at any time by replying{" "}
                <strong>STOP</strong> to any message. Reply <strong>HELP</strong>{" "}
                for assistance.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
                Data Sharing
              </h2>
              <p>
                We do not sell, rent, or share your personal information with
                third parties for marketing purposes. Your information is shared
                only with the specific business you contacted so they can
                fulfill your service request.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
                Data Retention
              </h2>
              <p>
                We retain your information for as long as necessary to provide
                the service you requested and to comply with legal obligations.
                You can request deletion of your data at any time by contacting
                us.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
                Security
              </h2>
              <p>
                We use industry-standard measures to protect your information,
                including encrypted communications and secure data storage. No
                method of transmission over the internet is 100% secure, but we
                take reasonable steps to protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">
                Contact Us
              </h2>
              <p>
                If you have questions about this privacy policy or want to
                request deletion of your data, contact us at{" "}
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
