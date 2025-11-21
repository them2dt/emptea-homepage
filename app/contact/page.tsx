import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | emptea',
  description: 'Get in touch with emptea - contact us for support, feedback, or questions about our apps.',
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <article className="mx-auto max-w-2xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-neutral-600">
            Have questions about our apps, need support, or want to share feedback?
            We'd love to hear from you.
          </p>
        </header>

        <div className="space-y-12">
          <section className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-100 mb-6">
              <svg
                className="w-8 h-8 text-neutral-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              Email Us
            </h2>
            <p className="text-neutral-600 mb-6">
              The best way to reach us is through email. We'll respond as quickly as possible.
            </p>
            <a
              href="mailto:hello@emptea.xyz"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              hello@emptea.xyz
            </a>
          </section>

          <section className="bg-neutral-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              Response Times
            </h3>
            <div className="space-y-3 text-neutral-600">
              <p>
                <strong className="text-neutral-900">Support & Bug Reports:</strong> We aim to respond within 24 hours
              </p>
              <p>
                <strong className="text-neutral-900">General Inquiries:</strong> We'll get back to you within 2-3 business days
              </p>
              <p>
                <strong className="text-neutral-900">Feature Requests:</strong> We review all suggestions and respond within a week
              </p>
            </div>
          </section>

          <section className="bg-neutral-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              Before You Contact Us
            </h3>
            <div className="space-y-4 text-neutral-600">
              <div>
                <h4 className="font-medium text-neutral-900 mb-2">Check Our Documentation</h4>
                <p>Visit our app's help section or read through our FAQs for quick answers.</p>
              </div>
              <div>
                <h4 className="font-medium text-neutral-900 mb-2">App Store Reviews</h4>
                <p>For quick feedback about app performance, consider leaving a review on the App Store or Google Play.</p>
              </div>
              <div>
                <h4 className="font-medium text-neutral-900 mb-2">Include Details</h4>
                <p>When emailing, please include your device type, app version, and a clear description of your issue.</p>
              </div>
            </div>
          </section>

          <section className="text-center border-t border-neutral-200 pt-12">
            <p className="text-sm text-neutral-500">
              For urgent security issues or data privacy concerns, please email us immediately.
            </p>
          </section>
        </div>
      </article>
    </div>
  )
}

