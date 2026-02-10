import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "General terms of service for Maruthan Thanabalasingam's apps published to mobile app marketplaces.",
};

export default function TermsOfServicePage() {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-serif font-medium tracking-tight text-foreground sm:text-5xl">
          Terms of Service
        </h1>
        <p className="text-muted-foreground">
          Last updated: October 2024
        </p>
      </header>

      <div className="prose prose-gray max-w-none dark:prose-invert">
        <p className="text-lg leading-relaxed text-muted-foreground">
          These terms apply whenever you download or use our mobile apps from
          the Apple App Store, Google Play Store, or other mobile marketplaces.
        </p>

        <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Acceptance</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          By installing or using the apps, you agree to these terms and our
          privacy policy. If you disagree with any part, please uninstall the
          app and discontinue use.
        </p>

        <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Use of the app</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          You promise to use the apps responsibly and not interfere with their
          operation, breach security, or attempt to reverse engineer
          protected content. You retain ownership of any content you upload
          but grant us a license to use it in order to operate the service.
        </p>

        <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Accounts and updates</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Some features may require an account. You are responsible for
          keeping credentials secure. We may provide updates or maintenance
          through the app stores, and you agree to receive them.
        </p>

        <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Payments and subscriptions</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          If the app offers paid features, purchases are processed through the
          Apple or Google billing systems unless otherwise stated. Refunds are
          handled by the respective store, and fees for third-party services
          are subject to their policies.
        </p>

        <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Termination</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          We may suspend or terminate access for any user who violates these
          terms or abuses the service. You may terminate by uninstalling the
          app. Termination will not relieve you of obligations accrued
          beforehand.
        </p>

        <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Disclaimer</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          The apps are provided "as is" without warranties of accuracy,
          suitability, or uninterrupted availability. We are not liable for
          damages arising from using the apps beyond the limits allowed by
          law.
        </p>

        <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Limitation of liability</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          To the extent permitted, our total liability will not exceed the
          amount you paid for the app in the last 12 months, or $20 if the app
          was free. This limitation applies even if the remedy fails of its
          essential purpose.
        </p>

        <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Governing law</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          These terms are governed by the laws of the jurisdiction where
          Maruthan Thanabalasingam operates, without regard to conflict of law rules.
        </p>

        <h2 className="mt-8 text-2xl font-serif font-medium tracking-tight text-foreground">Contact</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Questions about these terms can be directed to{" "}
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
