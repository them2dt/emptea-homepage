import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "General terms of service for emptea studios apps published to mobile app marketplaces.",
};

export default function TermsOfServicePage() {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-4xl">
          Terms of Service
        </h1>
        <p className="heading-caption">Last updated: October 2024</p>
      </header>

      <div className="space-y-8">
        <p className="text-lg font-light leading-relaxed text-muted-foreground">
          These terms apply whenever you download or use our mobile apps from the
          Apple App Store, Google Play Store, or other mobile marketplaces.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Acceptance
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground">
          By installing or using the apps, you agree to these terms and our
          privacy policy. If you disagree with any part, please uninstall the app
          and discontinue use.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Use of the App
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground">
          You promise to use the apps responsibly and not interfere with their
          operation, breach security, or attempt to reverse engineer protected
          content. You retain ownership of any content you upload but grant us a
          license to use it in order to operate the service.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Accounts and Updates
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground">
          Some features may require an account. You are responsible for keeping
          credentials secure. We may provide updates or maintenance through the
          app stores, and you agree to receive them.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Payments and Subscriptions
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground">
          If the app offers paid features, purchases are processed through the
          Apple or Google billing systems unless otherwise stated. Refunds are
          handled by the respective store, and fees for third-party services are
          subject to their policies.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Termination
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground">
          We may suspend or terminate access for any user who violates these
          terms or abuses the service. You may terminate by uninstalling the app.
          Termination will not relieve you of obligations accrued beforehand.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Disclaimer
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground">
          The apps are provided &ldquo;as is&rdquo; without warranties of
          accuracy, suitability, or uninterrupted availability. We are not liable
          for damages arising from using the apps beyond the limits allowed by
          law.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Limitation of Liability
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground">
          To the extent permitted, our total liability will not exceed the amount
          you paid for the app in the last 12 months, or $20 if the app was
          free. This limitation applies even if the remedy fails of its essential
          purpose.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Governing Law
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground">
          These terms are governed by the laws of the jurisdiction where Maruthan
          Thanabalasingam operates, without regard to conflict of law rules.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Contact
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground">
          Questions about these terms can be directed to{" "}
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
