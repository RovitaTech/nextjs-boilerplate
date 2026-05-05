import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - BilyBucks | Rovitatech',
  description: 'Privacy Policy for BilyBucks family reward system app. Learn how we protect your data.',
  keywords: 'privacy policy, BilyBucks, family rewards, data protection, Rovitatech',
}

export default function BilyBucksPrivacyPolicy() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f5f5f5', 
      padding: '40px 20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '80px 100px',
        margin: '20px 0'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#6b7280', marginBottom: '5px', fontSize: '18px' }}>BilyBucks</p>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>Last Updated: May 5, 2026</p>
        </div>

        <div style={{ textAlign: 'left' }}>
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Introduction
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.7', fontSize: '16px' }}>
              BilyBucks ("we", "our", or "us") operates the BilyBucks mobile application (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Information We Collect
            </h2>
            
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              Personal Information
            </h3>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Account Information:</strong> When you create an account, we collect your email address only to save data.
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Authentication Data:</strong> We use Firebase Authentication to securely manage your login credentials.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              How We Use Your Information
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              We use the collected information for the following purposes:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Service Provision:</strong> To provide and maintain our Service, including managing family reward systems and responsibilities.
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Account Management:</strong> To create and manage your user account and authenticate your access.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Subscriptions and Payments
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              BilyBucks may offer optional paid subscriptions that unlock premium features.
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Store processing:</strong> Purchases are processed by the Apple App Store (iOS) and Google Play (Android), not directly by us.
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>RevenueCat:</strong> We use RevenueCat for purchase validation, entitlement management, and cross-device subscription synchronization.
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Payment details:</strong> We do not store your full card or bank account details.
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Limited purchase metadata:</strong> We may process limited purchase-related information such as product ID, subscription status, expiration date, app user ID, and device/app identifiers needed to deliver premium access.
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Refunds and cancellations:</strong> Refunds, cancellations, and subscription management are handled according to Apple and Google billing policies.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Data Storage and Security
            </h2>
            
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              Firebase Integration
            </h3>
            <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>We use Google Firebase services for authentication, database storage, and app infrastructure.</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Your data is stored securely on Google's servers with industry-standard encryption.</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Firebase complies with GDPR, CCPA, and other privacy regulations.</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              Security Measures
            </h3>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>All data transmission is encrypted using SSL/TLS protocols.</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>We implement appropriate technical and organizational measures to protect your personal data.</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Access to your data is restricted to authorized personnel only.</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Data Sharing and Disclosure
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Service Providers:</strong> We may share data with trusted third-party service providers (like Google Firebase and RevenueCat) who assist us in operating our app.
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid legal requests.
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Safety:</strong> We may share information to protect the rights, property, or safety of BilyBucks, our users, or others.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Children's Privacy
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              BilyBucks is designed for family use and may be used by children under the supervision of parents or guardians. We are committed to protecting children's privacy:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>We do not knowingly collect personal information from children under 13 without parental consent.</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Parents have control over their children's data within the family account.</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Children's data is limited to what parents enter (names, completed tasks, earned rewards).</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Your Rights and Choices
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              You have the following rights regarding your personal data:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Correction:</strong> You can update or correct your information at any time.
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Deletion:</strong> You can delete your account and associated data by contacting us.
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Portability:</strong> You can request a copy of your data in a structured format.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Data Retention
            </h2>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>We retain your personal data only as long as necessary to provide our services.</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Account data is kept until you delete your account.</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Some anonymized usage data may be retained for analytics purposes.</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              International Data Transfers
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              Your data may be processed and stored in countries other than your own, including the United States where Google Firebase servers are located. We ensure appropriate safeguards are in place for international data transfers.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Third-Party Services
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              Our app integrates with the following third-party services:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>RevenueCat:</strong> For purchase validation and subscription entitlement management.{' '}
                <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>
                  RevenueCat Privacy Policy
                </a>
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Google Firebase:</strong> For authentication, database, and hosting services.{' '}
                <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>
                  Firebase Privacy Policy
                </a>
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Apple App Store:</strong> For iOS app distribution and billing.{' '}
                <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>
                  Apple Privacy Policy
                </a>
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Google Play Services:</strong> For app distribution and updates.{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>
                  Google Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Cookies and Tracking
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              BilyBucks does not use cookies or tracking technologies for advertising purposes. We may use analytics tools to understand app usage patterns, but this data is anonymized and aggregated.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Changes to This Privacy Policy
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              We may update our Privacy Policy from time to time. We will notify you of any changes by:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Posting the new Privacy Policy on this page</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Updating the "Last updated" date</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Sending an in-app notification for significant changes</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Contact Us
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              <strong>Email:</strong>{' '}
              <a href="mailto:rovitatech@gmail.com" style={{ color: '#2563eb', textDecoration: 'none' }}>
                rovitatech@gmail.com
              </a>
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Compliance
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              This Privacy Policy complies with:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>General Data Protection Regulation (GDPR)</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>California Consumer Privacy Act (CCPA)</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Children's Online Privacy Protection Act (COPPA)</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Google Play Developer Policy</li>
            </ul>
          </div>

          <div style={{ textAlign: 'center', paddingTop: '40px', marginTop: '40px', borderTop: '1px solid #e5e7eb' }}>
            <p style={{ color: '#9ca3af', fontSize: '14px' }}>
              © 2025 RovitaTech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
