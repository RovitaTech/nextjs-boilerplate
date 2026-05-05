import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use - BilyBucks | Rovitatech',
  description:
    'Terms of Use for BilyBucks family chores and rewards app. Read terms for subscriptions, billing, and acceptable use.',
  keywords: 'terms of use, BilyBucks, subscriptions, billing, Rovitatech',
}

export default function BilyBucksTermsOfUse() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '40px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          width: '100%',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '80px 100px',
          margin: '20px 0',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>
            Terms of Use
          </h1>
          <p style={{ color: '#6b7280', marginBottom: '5px', fontSize: '18px' }}>BilyBucks</p>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>Last Updated: May 5, 2026</p>
        </div>

        <div style={{ textAlign: 'left' }}>
          <div style={{ marginBottom: '50px' }}>
            <p style={{ color: '#374151', lineHeight: '1.7', fontSize: '16px' }}>
              These Terms of Use (the &quot;Terms&quot;) govern your access to and use of the BilyBucks mobile application
              and related services (the &quot;Service&quot;) provided by RovitaTech (&quot;we&quot;, &quot;us&quot;,
              or &quot;our&quot;). By using the Service, you agree to these Terms.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Acceptance of Terms
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              By downloading, accessing, or using the Service, you confirm that you have read, understood, and agree to be
              bound by these Terms. If you do not agree, do not use the Service.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Eligibility and Parent Responsibility
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              The Service is intended for family use. If a child uses the Service, a parent or legal guardian is
              responsible for supervising use and ensuring compliance with these Terms.
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                Parents/guardians are responsible for any information entered into the Service for or by a child, including
                chores, rewards, names, or other content.
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                You must be legally able to enter into a binding agreement in your jurisdiction to create an account and
                make purchases.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Accounts and Security
            </h2>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Account accuracy:</strong> You agree to provide accurate account information and to keep it
                updated.
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Security:</strong> You are responsible for maintaining the confidentiality of your account
                credentials and for all activity that occurs under your account.
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Unauthorized use:</strong> If you believe your account has been compromised, contact us promptly at{' '}
                <a href="mailto:rovitatech@gmail.com" style={{ color: '#2563eb', textDecoration: 'none' }}>
                  rovitatech@gmail.com
                </a>
                .
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Service Description
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              BilyBucks is a family-oriented app designed to help households manage chores, responsibilities, and rewards.
              The Service may allow you to:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                Create and assign chores and tasks
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                Track completions and approvals
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                Award and track virtual &quot;bucks&quot; or points for completed chores
              </li>
            </ul>
            <p style={{ color: '#374151', lineHeight: '1.6', marginTop: '15px' }}>
              We may update, change, or discontinue parts of the Service at any time.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Subscriptions and Billing
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              Some features may be offered through premium, auto-renewing subscriptions (&quot;Subscriptions&quot;). When
              you purchase a Subscription:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Store billing:</strong> Billing is handled by the Apple App Store (iOS) or Google Play (Android),
                not by us.
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Entitlements:</strong> We may use RevenueCat to validate purchases and manage your entitlement
                status across devices.
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Payment method:</strong> Your payment method is managed by Apple or Google. We do not receive or
                store full card or bank details.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Auto-Renewal
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              Subscriptions renew automatically unless you cancel before the end of the current billing period. Renewal,
              pricing, and billing dates are determined by Apple or Google and shown in your store account.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Free Trial (if offered)
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              If a free trial is offered, it will be presented to you in the App Store or Google Play purchase flow. Unless
              you cancel before the trial ends, your Subscription may automatically convert to a paid Subscription and you
              will be billed by Apple or Google.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Cancellation and Refunds
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              You can manage or cancel your Subscription through your Apple ID or Google Play account settings. Refunds and
              billing disputes are handled by Apple or Google under their policies, and we cannot issue refunds directly
              for store purchases.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Acceptable Use
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              You agree not to misuse the Service. For example, you will not:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                Use the Service for unlawful, harmful, or abusive purposes
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                Attempt to interfere with, disrupt, or gain unauthorized access to the Service or related systems
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                Reverse engineer, decompile, or attempt to extract source code except where permitted by law
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              User Content and Data
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              The Service may allow you to input content such as chores, rewards, family member names, and notes
              (&quot;User Content&quot;).
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Your responsibility:</strong> You are responsible for User Content you submit and for ensuring you
                have the right to submit it.
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Child data:</strong> Parents/guardians are responsible for any child-related information entered
                into the Service.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Privacy
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              Our Privacy Policy explains how we collect, use, and share information. Please review it here:{' '}
              <a href="/privacy-policy/bilybucks" style={{ color: '#2563eb', textDecoration: 'none' }}>
                Privacy Policy for BilyBucks
              </a>
              .
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Intellectual Property
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              The Service and its content, features, and functionality are owned by RovitaTech and are protected by
              intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of the Service
              unless we give you written permission.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Disclaimer of Warranties
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the maximum extent
              permitted by law, we disclaim all warranties, express or implied, including implied warranties of
              merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Limitation of Liability
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              To the maximum extent permitted by law, RovitaTech will not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or
              indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to
              or use of or inability to access or use the Service; (b) any conduct or content of any third party; or (c)
              unauthorized access, use, or alteration of your transmissions or content.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Termination
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              We may suspend or terminate your access to the Service if you violate these Terms or if we discontinue the
              Service. You may stop using the Service at any time. Store subscriptions must be managed through Apple or
              Google as described above.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Changes to Terms
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              We may update these Terms from time to time. If we make changes, we will update the &quot;Last Updated&quot;
              date at the top of this page. Continued use of the Service after changes means you accept the updated Terms.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Governing Law
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              These Terms are governed by the laws applicable to RovitaTech, without regard to conflict of law principles.
              Where required, consumer protection laws in your jurisdiction may also apply.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Contact Information
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              If you have questions about these Terms, contact:
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '10px' }}>
              <strong>Provider:</strong> RovitaTech
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              <strong>Email:</strong>{' '}
              <a href="mailto:rovitatech@gmail.com" style={{ color: '#2563eb', textDecoration: 'none' }}>
                rovitatech@gmail.com
              </a>
            </p>
          </div>

          <div style={{ textAlign: 'center', paddingTop: '40px', marginTop: '40px', borderTop: '1px solid #e5e7eb' }}>
            <p style={{ color: '#9ca3af', fontSize: '14px' }}>© 2026 RovitaTech. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

