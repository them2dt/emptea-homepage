import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "End User License Agreement (EULA)",
  description: "End User License Agreement for emptea studios apps.",
};

export default function EulaPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-4xl">
          End User License Agreement
        </h1>
        <p className="heading-caption">Last updated: October 2024</p>
      </header>

      <div className="space-y-8">
        <p className="text-lg font-light leading-relaxed text-muted-foreground">
          This End User License Agreement (&ldquo;Agreement&rdquo;) is a binding
          legal agreement between you and Maruthan Thanabalasingam regarding your
          use of our mobile applications.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Scope of License
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground">
          Maruthan Thanabalasingam grants you a limited, non-exclusive,
          non-transferable, revocable license to use the application for your
          personal, non-commercial purposes. You may not copy, modify,
          distribute, sell, or lease any part of our services or included
          software, nor may you reverse engineer or attempt to extract the source
          code of that software, except as laws prohibit those restrictions or
          you have our written permission.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Content and Services
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground">
          The application may enable access to third-party services and websites.
          Use of the application requires Internet access and may require you to
          accept additional terms of service. You agree that you will not use the
          application for any purpose that is prohibited by this Agreement.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Warranty Disclaimer
        </h2>
        <p className="text-xs uppercase tracking-[0.03em] leading-relaxed text-muted-foreground">
          You expressly acknowledge and agree that use of the application is at
          your sole risk and that the entire risk as to satisfactory quality,
          performance, accuracy, and effort is with you. To the maximum extent
          permitted by applicable law, the application and any services performed
          or provided by the application are provided &ldquo;as is&rdquo; and
          &ldquo;as available&rdquo;, with all faults and without warranty of any
          kind.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Limitation of Liability
        </h2>
        <p className="text-xs uppercase tracking-[0.03em] leading-relaxed text-muted-foreground">
          To the extent not prohibited by law, in no event shall Maruthan
          Thanabalasingam be liable for personal injury, or any incidental,
          special, indirect or consequential damages whatsoever, including,
          without limitation, damages for loss of profits, loss of data, business
          interruption or any other commercial damages or losses, arising out of
          or related to your use or inability to use the application, however
          caused, regardless of the theory of liability (contract, tort or
          otherwise) and even if Maruthan Thanabalasingam has been advised of the
          possibility of such damages.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Termination
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground">
          The license is effective until terminated by you or Maruthan
          Thanabalasingam. Your rights under this license will terminate
          automatically without notice from Maruthan Thanabalasingam if you fail
          to comply with any term(s) of this license. Upon termination of the
          license, you shall cease all use of the application and destroy all
          copies, full or partial, of the application.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Governing Law
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground">
          This Agreement and the relationship between you and Maruthan
          Thanabalasingam shall be governed by the laws of the jurisdiction where
          Maruthan Thanabalasingam is located, excluding its conflicts of law
          provisions.
        </p>

        <h2 className="text-sm font-bold uppercase tracking-[0.05em] text-foreground">
          Contact
        </h2>
        <p className="text-base leading-[1.7] text-muted-foreground">
          If you have any questions about this Agreement, please contact us at{" "}
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
