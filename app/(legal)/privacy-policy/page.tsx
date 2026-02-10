import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "General privacy policy for Maruthan Thanabalasingam's apps published to the mobile app stores.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-serif font-medium tracking-tight text-foreground sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground">
          Last updated: October 2024
        </p>
      </header>

      <div className="prose prose-gray max-w-none dark:prose-invert">
        <p className="text-lg leading-relaxed text-muted-foreground">
          This policy applies to the mobile apps we publish on the Apple App
          Store and Google Play Store unless otherwise communicated in‑app.
        </p>

        <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Information we collect</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          We collect only the information that is necessary for the app to
          deliver its core functionality and to keep the experience secure.
          This may include identifiers (such as device IDs or install
          tokens), analytics data, crash reports, content you create in the
          app, and optional data you share with us directly (e.g., feedback or
          support requests).
        </p>

        <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">How we use data</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-base text-muted-foreground">
          <li>
            Deliver the experience you expect, including preferences and user
            settings.
          </li>
          <li>
            Diagnose issues, measure performance, and keep the app stable.
          </li>
          <li>
            Communicate product updates, safety notices, or account-related
            messages you opt into.
          </li>
        </ul>

        <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Sharing and disclosure</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          We never sell your personal information. We may share limited data
          with service providers who help us run analytics, deliver push
          notifications, or host the apps. We also comply with legal requests
          from authorities when required by law.
        </p>

        <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Security</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          We apply industry-standard safeguards to protect data in transit and
          at rest. While we work hard to protect your information, no system
          can be 100% secure, so we encourage you to keep your device updated
          and use secure passwords.
        </p>

        <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Your controls</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          You can review, update, or delete data stored in the app by using
          the settings or account tools provided. If you need help, contact us
          at the address below.
        </p>

        <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Children and third parties</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          The apps are not directed at children under 13. We do not knowingly
          collect personal information from minors without parental consent.
          We also do not share sensitive content with third parties without
          explicit consent.
        </p>

        <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Changes to this policy</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          We may update this policy when our practices change. If the change
          is material, we will notify you through the app or in the relevant
          store listing.
        </p>

        <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Contact</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          If you have privacy questions, email us at{" "}
          <a
            className="text-primary hover:underline underline-offset-4"
            href="mailto:maruthan@outlook.com"
          >
            maruthan@outlook.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
