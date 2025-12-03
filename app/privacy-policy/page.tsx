import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "General privacy policy for emptea studios apps published to the mobile app stores.",
};

const sectionHeading = "text-base font-semibold tracking-wide text-secondary-foreground uppercase";
const bodyText = "text-base leading-relaxed text-muted-foreground";

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background px-4 py-12">
      <div className="mx-auto w-full max-w-4xl space-y-8">
        <header>
          <p className="text-sm uppercase text-muted-foreground">emptea studios</p>
          <h1 className="mt-2 text-3xl font-semibold text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            This policy applies to the mobile apps we publish on the Apple App
            Store and Google Play Store unless otherwise communicated in‑app.
          </p>
        </header>

        <section className="space-y-4">
          <p className={sectionHeading}>Information we collect</p>
          <p className={bodyText}>
            We collect only the information that is necessary for the app to
            deliver its core functionality and to keep the experience secure.
            This may include identifiers (such as device IDs or install
            tokens), analytics data, crash reports, content you create in the
            app, and optional data you share with us directly (e.g., feedback or
            support requests).
          </p>
        </section>

        <section className="space-y-4">
          <p className={sectionHeading}>How we use data</p>
          <ul className="ml-4 list-disc space-y-2 text-muted-foreground">
            <li className={bodyText}>
              Deliver the experience you expect, including preferences and user
              settings.
            </li>
            <li className={bodyText}>
              Diagnose issues, measure performance, and keep the app stable.
            </li>
            <li className={bodyText}>
              Communicate product updates, safety notices, or account-related
              messages you opt into.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <p className={sectionHeading}>Sharing and disclosure</p>
          <p className={bodyText}>
            We never sell your personal information. We may share limited data
            with service providers who help us run analytics, deliver push
            notifications, or host the apps. We also comply with legal requests
            from authorities when required by law.
          </p>
        </section>

        <section className="space-y-4">
          <p className={sectionHeading}>Security</p>
          <p className={bodyText}>
            We apply industry-standard safeguards to protect data in transit and
            at rest. While we work hard to protect your information, no system
            can be 100% secure, so we encourage you to keep your device updated
            and use secure passwords.
          </p>
        </section>

        <section className="space-y-4">
          <p className={sectionHeading}>Your controls</p>
          <p className={bodyText}>
            You can review, update, or delete data stored in the app by using
            the settings or account tools provided. If you need help, contact us
            at the address below.
          </p>
        </section>

        <section className="space-y-4">
          <p className={sectionHeading}>Children and third parties</p>
          <p className={bodyText}>
            The apps are not directed at children under 13. We do not knowingly
            collect personal information from minors without parental consent.
            We also do not share sensitive content with third parties without
            explicit consent.
          </p>
        </section>

        <section className="space-y-4">
          <p className={sectionHeading}>Changes to this policy</p>
          <p className={bodyText}>
            We may update this policy when our practices change. If the change
            is material, we will notify you through the app or in the relevant
            store listing.
          </p>
        </section>

        <section className="space-y-4 pb-12">
          <p className={sectionHeading}>Contact</p>
          <p className={bodyText}>
            If you have privacy questions, email us at{" "}
            <a
              className="text-primary-foreground underline"
              href="mailto:privacy@emptea.studio"
            >
              privacy@emptea.studio
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}

