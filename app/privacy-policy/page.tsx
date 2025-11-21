import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | emptea',
  description: 'Privacy Policy for emptea applications',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <article className="mx-auto max-w-3xl prose prose-neutral">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900">Privacy Policy</h1>
        <p className="text-sm text-neutral-500">Last updated: November 21, 2025</p>

        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to emptea. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you about how we look after your personal data when you use our 
            applications (Rise, Penpal, and any future applications) and tell you about your privacy rights 
            and how the law protects you.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <h3>Information You Provide</h3>
          <ul>
            <li><strong>Account Information:</strong> Email address, username, and password when you create an account</li>
            <li><strong>Profile Information:</strong> Any additional information you choose to provide in your profile</li>
            <li><strong>User Content:</strong> Goals, tasks, notes, messages, and any other content you create within our apps</li>
          </ul>

          <h3>Information We Collect Automatically</h3>
          <ul>
            <li><strong>Usage Data:</strong> How you interact with our apps, features used, and time spent</li>
            <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers</li>
            <li><strong>Log Data:</strong> IP address, browser type, access times, and crash reports</li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Create and manage your account</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Respond to your comments, questions, and customer service requests</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Detect, prevent, and address technical issues and security threats</li>
            <li>Provide personalized content and features</li>
          </ul>
        </section>

        <section>
          <h2>Data Storage and Security</h2>
          <p>
            Your data is stored securely using industry-standard encryption. We use Supabase as our backend 
            infrastructure provider, which employs enterprise-grade security measures including encryption at 
            rest and in transit. While we strive to protect your personal information, no method of transmission 
            over the Internet or electronic storage is 100% secure.
          </p>
        </section>

        <section>
          <h2>Data Sharing and Disclosure</h2>
          <p>We do not sell your personal data. We may share your information only in the following circumstances:</p>
          <ul>
            <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
            <li><strong>Service Providers:</strong> With third-party vendors who help us operate our services (e.g., hosting, analytics)</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect rights and safety</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition of all or part of our business</li>
          </ul>
        </section>

        <section>
          <h2>Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data</li>
            <li><strong>Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
            <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
            <li><strong>Account Deletion:</strong> Delete your account at any time through the app settings</li>
          </ul>
        </section>

        <section>
          <h2>Children's Privacy</h2>
          <p>
            Our services are not intended for children under 13 years of age. We do not knowingly collect 
            personal information from children under 13. If you are a parent or guardian and believe your 
            child has provided us with personal information, please contact us.
          </p>
        </section>

        <section>
          <h2>International Data Transfers</h2>
          <p>
            Your information may be transferred to and maintained on servers located outside of your state, 
            province, country, or other governmental jurisdiction where data protection laws may differ. 
            By using our services, you consent to the transfer of your information.
          </p>
        </section>

        <section>
          <h2>Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to provide our services and fulfill 
            the purposes described in this policy. When you delete your account, we will delete or anonymize 
            your personal data, unless we are required to retain it for legal obligations.
          </p>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>
            Our apps may contain links to third-party websites or services. We are not responsible for the 
            privacy practices of these third parties. We encourage you to read their privacy policies.
          </p>
        </section>

        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting 
            the new privacy policy on this page and updating the "Last updated" date. You are advised to review 
            this privacy policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> privacy@emptea.xyz<br />
            <strong>Website:</strong> emptea.xyz
          </p>
        </section>

        <section>
          <h2>California Privacy Rights</h2>
          <p>
            If you are a California resident, you have additional rights under the California Consumer Privacy 
            Act (CCPA), including the right to know what personal information we collect, the right to delete 
            your personal information, and the right to opt-out of the sale of your personal information. 
            We do not sell your personal information.
          </p>
        </section>

        <section>
          <h2>GDPR Compliance</h2>
          <p>
            If you are located in the European Economic Area (EEA), you have certain rights under the General 
            Data Protection Regulation (GDPR). We process your personal data lawfully based on consent, 
            contractual necessity, or legitimate interests. You have the right to lodge a complaint with a 
            supervisory authority.
          </p>
        </section>
      </article>
    </div>
  )
}

