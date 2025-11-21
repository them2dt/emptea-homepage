import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | emptea',
  description: 'Terms of Service for emptea applications',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <article className="mx-auto max-w-3xl prose prose-neutral">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900">Terms of Service</h1>
        <p className="text-sm text-neutral-500">Last updated: November 21, 2025</p>

        <section>
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using our applications (Rise, Penpal, and any future applications under the emptea 
            brand), you agree to be bound by these Terms of Service and all applicable laws and regulations. 
            If you do not agree with any of these terms, you are prohibited from using or accessing our services.
          </p>
        </section>

        <section>
          <h2>Description of Service</h2>
          <p>
            emptea provides mobile and web applications designed to help users achieve their goals, manage 
            tasks, communicate, and improve their productivity. Our services include but are not limited to:
          </p>
          <ul>
            <li><strong>Rise:</strong> A goal-setting and achievement tracking application</li>
            <li><strong>Penpal:</strong> A communication and connection platform</li>
            <li>Additional features and services we may introduce in the future</li>
          </ul>
        </section>

        <section>
          <h2>User Accounts</h2>
          <h3>Account Creation</h3>
          <ul>
            <li>You must be at least 13 years old to create an account</li>
            <li>You must provide accurate, current, and complete information</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            <li>You are responsible for all activities that occur under your account</li>
            <li>You must notify us immediately of any unauthorized use of your account</li>
          </ul>

          <h3>Account Termination</h3>
          <p>
            We reserve the right to suspend or terminate your account at any time for violations of these 
            terms or for any other reason at our sole discretion. You may also delete your account at any 
            time through the app settings.
          </p>
        </section>

        <section>
          <h2>User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use our services for any illegal purpose or in violation of any laws</li>
            <li>Violate the rights of others, including intellectual property rights</li>
            <li>Upload or transmit viruses, malware, or other malicious code</li>
            <li>Harass, abuse, threaten, or intimidate other users</li>
            <li>Impersonate any person or entity or misrepresent your affiliation</li>
            <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
            <li>Interfere with or disrupt the integrity or performance of our services</li>
            <li>Collect or store personal data about other users without their consent</li>
            <li>Use our services to spam, phish, or engage in fraudulent activities</li>
            <li>Reverse engineer, decompile, or disassemble any part of our services</li>
          </ul>
        </section>

        <section>
          <h2>User Content</h2>
          <h3>Your Content</h3>
          <p>
            You retain ownership of any content you create, upload, or share through our services ("User Content"). 
            By sharing User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, 
            reproduce, modify, adapt, publish, and display your User Content solely for the purpose of providing 
            and improving our services.
          </p>

          <h3>Content Standards</h3>
          <p>Your User Content must not:</p>
          <ul>
            <li>Contain illegal, harmful, threatening, abusive, or defamatory material</li>
            <li>Infringe any intellectual property rights or other proprietary rights</li>
            <li>Contain nudity, violence, or other objectionable material</li>
            <li>Contain advertising or promotional material without our prior consent</li>
            <li>Violate any applicable laws or regulations</li>
          </ul>

          <h3>Content Monitoring</h3>
          <p>
            We reserve the right, but have no obligation, to monitor, review, or remove User Content that 
            violates these terms. We may also report illegal activity to law enforcement authorities.
          </p>
        </section>

        <section>
          <h2>Intellectual Property Rights</h2>
          <p>
            Our services and all content, features, and functionality (including but not limited to software, 
            text, graphics, logos, and images) are owned by emptea and are protected by copyright, trademark, 
            and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part 
            of our services without our prior written consent.
          </p>
        </section>

        <section>
          <h2>Subscriptions and Payments</h2>
          <h3>Paid Features</h3>
          <p>
            Some features of our services may require payment. By purchasing a subscription or paid feature, 
            you agree to pay all applicable fees and charges.
          </p>

          <h3>Billing</h3>
          <ul>
            <li>Subscription fees are billed in advance on a recurring basis (monthly or annually)</li>
            <li>Your payment method will be automatically charged at the beginning of each billing period</li>
            <li>We may change our pricing with 30 days' notice</li>
            <li>All fees are non-refundable except as required by law</li>
          </ul>

          <h3>Cancellation</h3>
          <p>
            You may cancel your subscription at any time through your account settings or the app store. 
            Cancellations will take effect at the end of your current billing period.
          </p>

          <h3>Free Trials</h3>
          <p>
            We may offer free trials for certain features. If you do not cancel before the trial period ends, 
            you will be automatically charged for a subscription.
          </p>
        </section>

        <section>
          <h2>Disclaimers</h2>
          <h3>Service Availability</h3>
          <p>
            Our services are provided "as is" and "as available" without any warranties of any kind. We do not 
            guarantee that our services will be uninterrupted, secure, or error-free.
          </p>

          <h3>No Medical, Legal, or Professional Advice</h3>
          <p>
            Our services are for informational and productivity purposes only. They do not provide medical, 
            legal, financial, or any other professional advice. Consult with qualified professionals for 
            specific advice.
          </p>

          <h3>Third-Party Services</h3>
          <p>
            Our services may integrate with or contain links to third-party services. We are not responsible 
            for the content, accuracy, or practices of these third parties.
          </p>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, emptea and its affiliates, officers, directors, employees, 
            and agents shall not be liable for any indirect, incidental, special, consequential, or punitive 
            damages, including but not limited to loss of profits, data, use, or other intangible losses, 
            resulting from:
          </p>
          <ul>
            <li>Your use or inability to use our services</li>
            <li>Unauthorized access to or alteration of your data</li>
            <li>Any third-party conduct or content on our services</li>
            <li>Any other matter relating to our services</li>
          </ul>
          <p>
            Our total liability to you for all claims arising from or related to our services shall not exceed 
            the amount you have paid us in the past 12 months, or $100, whichever is greater.
          </p>
        </section>

        <section>
          <h2>Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless emptea and its affiliates from any claims, 
            liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising from:
          </p>
          <ul>
            <li>Your use of our services</li>
            <li>Your violation of these terms</li>
            <li>Your violation of any rights of another party</li>
            <li>Your User Content</li>
          </ul>
        </section>

        <section>
          <h2>Data Backup and Loss</h2>
          <p>
            While we implement backup procedures, you are responsible for maintaining your own backups of 
            important data. We are not liable for any loss or corruption of your data.
          </p>
        </section>

        <section>
          <h2>Modifications to Service</h2>
          <p>
            We reserve the right to modify, suspend, or discontinue our services (or any part thereof) at any 
            time with or without notice. We shall not be liable to you or any third party for any modification, 
            suspension, or discontinuance of our services.
          </p>
        </section>

        <section>
          <h2>Changes to Terms</h2>
          <p>
            We may update these Terms of Service from time to time. We will notify you of material changes by 
            posting the new terms and updating the "Last updated" date. Your continued use of our services 
            after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2>Governing Law and Dispute Resolution</h2>
          <h3>Governing Law</h3>
          <p>
            These terms shall be governed by and construed in accordance with the laws of the jurisdiction 
            where emptea is registered, without regard to its conflict of law provisions.
          </p>

          <h3>Dispute Resolution</h3>
          <p>
            Any disputes arising from these terms or our services shall first be attempted to be resolved 
            through good faith negotiations. If negotiations fail, disputes may be resolved through binding 
            arbitration in accordance with applicable arbitration rules.
          </p>
        </section>

        <section>
          <h2>Severability</h2>
          <p>
            If any provision of these terms is found to be unenforceable or invalid, that provision shall be 
            limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain 
            in full force and effect.
          </p>
        </section>

        <section>
          <h2>Entire Agreement</h2>
          <p>
            These Terms of Service, together with our Privacy Policy, constitute the entire agreement between 
            you and emptea regarding our services and supersede all prior agreements and understandings.
          </p>
        </section>

        <section>
          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> legal@emptea.xyz<br />
            <strong>Website:</strong> emptea.xyz
          </p>
        </section>

        <section>
          <h2>App Store Terms</h2>
          <p>
            If you download our apps from the Apple App Store or Google Play Store, you acknowledge that:
          </p>
          <ul>
            <li>These terms are between you and emptea, not with Apple or Google</li>
            <li>Apple and Google are not responsible for our services or any claims relating thereto</li>
            <li>You must comply with the applicable app store terms of service</li>
            <li>The app stores are third-party beneficiaries of these terms with respect to your use of our apps</li>
          </ul>
        </section>
      </article>
    </div>
  )
}

