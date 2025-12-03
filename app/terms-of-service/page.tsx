import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "General terms of service for emptea studios apps published to mobile app marketplaces.",
};

const sectionHeading = "text-base font-semibold tracking-wide text-secondary-foreground uppercase";
const bodyText = "text-base leading-relaxed text-muted-foreground";

export default function TermsOfServicePage() {
  return (
    <main className="flex min-h-screen flex-col bg-background px-4 py-12">
      <div className="mx-auto w-full max-w-4xl space-y-8">
        <header>
          <p className="text-sm uppercase text-muted-foreground">emptea studios</p>
          <h1 className="mt-2 text-3xl font-semibold text-foreground">
            Terms of Service
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            These terms apply whenever you download or use our mobile apps from
            the Apple App Store, Google Play Store, or other mobile marketplaces.
          </p>
        </header>

        <section className="space-y-4">
          <p className={sectionHeading}>Acceptance</p>
          <p className={bodyText}>
            By installing or using the apps, you agree to these terms and our
            privacy policy. If you disagree with any part, please uninstall the
            app and discontinue use.
          </p>
        </section>

        <section className="space-y-4">
          <p className={sectionHeading}>Use of the app</p>
          <p className={bodyText}>
            You promise to use the apps responsibly and not interfere with their
            operation, breach security, or attempt to reverse engineer
            protected content. You retain ownership of any content you upload
            but grant us a license to use it in order to operate the service.
          </p>
        </section>

        <section className="space-y-4">
          <p className={sectionHeading}>Accounts and updates</p>
          <p className={bodyText}>
            Some features may require an account. You are responsible for
            keeping credentials secure. We may provide updates or maintenance
            through the app stores, and you agree to receive them.
          </p>
        </section>

        <section className="space-y-4">
          <p className={sectionHeading}>Payments and subscriptions</p>
          <p className={bodyText}>
            If the app offers paid features, purchases are processed through the
            Apple or Google billing systems unless otherwise stated. Refunds are
            handled by the respective store, and fees for third-party services
            are subject to their policies.
          </p>
        </section>

        <section className="space-y-4">
          <p className={sectionHeading}>Termination</p>
          <p className={bodyText}>
            We may suspend or terminate access for any user who violates these
            terms or abuses the service. You may terminate by uninstalling the
            app. Termination will not relieve you of obligations accrued
            beforehand.
          </p>
        </section>

        <section className="space-y-4">
          <p className={sectionHeading}>Disclaimer</p>
          <p className={bodyText}>
            The apps are provided "as is" without warranties of accuracy,
            suitability, or uninterrupted availability. We are not liable for
            damages arising from using the apps beyond the limits allowed by
            law.
          </p>
        </section>

        <section className="space-y-4">
          <p className={sectionHeading}>Limitation of liability</p>
          <p className={bodyText}>
            To the extent permitted, our total liability will not exceed the
            amount you paid for the app in the last 12 months, or $20 if the app
            was free. This limitation applies even if the remedy fails of its
            essential purpose.
          </p>
        </section>

        <section className="space-y-4">
          <p className={sectionHeading}>Governing law</p>
          <p className={bodyText}>
            These terms are governed by the laws of the jurisdiction where
            emptea studios operates, without regard to conflict of law rules.
          </p>
        </section>

        <section className="space-y-4 pb-12">
          <p className={sectionHeading}>Contact</p>
          <p className={bodyText}>
            Questions about these terms can be directed to{" "}
            <a
              className="text-primary-foreground underline"
              href="mailto:hello@emptea.studio"
            >
              hello@emptea.studio
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}

