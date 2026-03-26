import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "General privacy policy for emptea studios apps published to the mobile app stores.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="heading-caption">Last updated: October 2024</p>
      </header>

      <div className="space-y-8">
        <p className="text-lg font-light leading-relaxed text-muted-foreground">
          This policy applies to the mobile apps we publish on the Apple App
          Store and Google Play Store unless otherwise communicated in-app.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Information We Collect
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground">
          We collect only the information that is necessary for the app to
          deliver its core functionality and to keep the experience secure. This
          may include identifiers (such as device IDs or install tokens),
          analytics data, crash reports, content you create in the app, and
          optional data you share with us directly (e.g., feedback or support
          requests).
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          How We Use Data
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-base leading-[1.7] text-muted-foreground">
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

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Sharing and Disclosure
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground">
          We never sell your personal information. We may share limited data with
          service providers who help us run analytics, deliver push
          notifications, or host the apps. We also comply with legal requests
          from authorities when required by law.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Security
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground">
          We apply industry-standard safeguards to protect data in transit and at
          rest. While we work hard to protect your information, no system can be
          100% secure, so we encourage you to keep your device updated and use
          secure passwords.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Your Controls
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground">
          You can review, update, or delete data stored in the app by using the
          settings or account tools provided. If you need help, contact us at the
          address below.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Children and Third Parties
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground">
          The apps are not directed at children under 13. We do not knowingly
          collect personal information from minors without parental consent. We
          also do not share sensitive content with third parties without explicit
          consent.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Changes to This Policy
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground">
          We may update this policy when our practices change. If the change is
          material, we will notify you through the app or in the relevant store
          listing.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Contact
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground">
          If you have privacy questions, email us at{" "}
          <a
            className="link-hover text-foreground"
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
