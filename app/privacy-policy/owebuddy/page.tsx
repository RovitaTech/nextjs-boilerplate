import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - OweBuddy | Rovitatech',
  description: 'Privacy Policy for OweBuddy bill-splitting app. Learn how we protect your data.',
  keywords: 'privacy policy, OweBuddy, bill splitting, data protection, Rovitatech',
}

export default function OweBuddyPrivacyPolicy() {
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
          <p style={{ color: '#6b7280', marginBottom: '5px', fontSize: '18px' }}>OweBuddy</p>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>Effective Date: January 15, 2026</p>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>Last Updated: January 15, 2026</p>
        </div>

        <div style={{ textAlign: 'left' }}>
          <p style={{ color: '#374151', lineHeight: '1.7', marginBottom: '20px', fontSize: '16px' }}>
            Welcome to OweBuddy! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application ("App"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the App.
          </p>

          <p style={{ color: '#374151', lineHeight: '1.7', marginBottom: '15px', fontSize: '16px', fontWeight: 'bold' }}>
            Key Points:
          </p>
          <ul style={{ marginLeft: '20px', marginBottom: '40px' }}>
            <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>We only collect information necessary to provide our bill-splitting services</li>
            <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Your data is securely stored using Firebase services</li>
            <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>We never sell your personal information to third parties</li>
            <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>You have control over your data and can delete it at any time</li>
          </ul>
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              1. Information We Collect
            </h2>
            
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              1.1 Personal Information
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              When you register for an account, we may collect:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Email Address:</strong> Used for account creation and authentication
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Display Name:</strong> Your chosen username visible to other group members
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Phone Number:</strong> Optional, for contact purposes within groups
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Profile Information:</strong> Any additional information you choose to provide
              </li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              1.2 Financial Information
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              We collect expense-related data including:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Expense amounts and descriptions</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Payment method preferences (Cash, UPI, EasyPaisa, JazzCash)</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Currency preferences</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Group balances and settlement records</li>
            </ul>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '30px' }}>
              <strong>Note:</strong> We do NOT collect or store bank account numbers, credit card details, or payment credentials
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              1.3 Images and Files
            </h3>
            <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Receipt Photos:</strong> Images you upload as proof of expenses
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Payment Proof Screenshots:</strong> Images uploaded to verify settlements
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>All images are stored securely in Firebase Storage</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              1.4 Usage Data
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              We automatically collect certain information when you use the App:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Device information (model, operating system version)</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>App usage statistics and crash reports</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Log data (timestamps, features accessed)</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>IP address and general location data</li>
            </ul>
          </div>
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              2. How We Use Your Information
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              We use the collected information for the following purposes:
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              2.1 Core Functionality
            </h3>
            <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Create and manage your user account</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Enable bill splitting and expense tracking</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Calculate balances between group members</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Process settlement requests and payment proofs</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Generate PDF expense reports</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              2.2 Communication
            </h3>
            <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Send notifications about group activities and settlements</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Respond to your inquiries and support requests</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Send important updates about the App</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              2.3 Improvement and Analytics
            </h3>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Analyze usage patterns to improve features</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Debug and fix technical issues</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Develop new features based on user needs</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Ensure security and prevent fraud</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              3. How We Share Your Information
            </h2>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              3.1 Within Groups
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              When you join a group, the following information is visible to other group members:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Your display name</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Expenses you create or are involved in</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Your balance within the group</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Payment proofs you submit (visible to group admins)</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              3.2 Service Providers
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              We use third-party services to operate our App:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Firebase (Google):</strong> Authentication, database, and file storage
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Google Fonts:</strong> Typography services
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>These providers have their own privacy policies and security measures</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              3.3 Legal Requirements
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              We may disclose your information if required to:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Comply with legal obligations or court orders</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Protect our rights, property, or safety</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Prevent fraud or security issues</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Respond to government requests</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              3.4 What We DON'T Do
            </h3>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>❌ We do NOT sell your personal information to third parties</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>❌ We do NOT share your data with advertisers</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>❌ We do NOT use your data for marketing purposes without consent</li>
            </ul>
          </div>
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              4. Data Security
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              We implement industry-standard security measures to protect your information:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Encryption:</strong> Data is encrypted in transit using HTTPS/TLS
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Firebase Security:</strong> Firestore security rules restrict data access
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Authentication:</strong> Secure Firebase Authentication system
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Storage Security:</strong> Images stored with access controls
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Regular Updates:</strong> We keep our security measures up to date
              </li>
            </ul>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              <strong>Important:</strong> While we strive to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              5. Data Retention
            </h2>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Active Accounts:</strong> We retain your data as long as your account is active
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Deleted Accounts:</strong> Data is deleted within 30 days of account deletion
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Group Data:</strong> When you leave a group, your expense history remains for other members but your personal details are anonymized
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Backups:</strong> Backup copies may persist for up to 90 days
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Legal Requirements:</strong> Some data may be retained longer if required by law
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              6. Your Privacy Rights
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              You have the following rights regarding your personal data:
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              6.1 Access and Portability
            </h3>
            <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>View all your personal data within the App</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Export your expense data as PDF reports</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Request a copy of your data by contacting us</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              6.2 Correction and Update
            </h3>
            <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Update your profile information anytime</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Correct inaccurate data through the App settings</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              6.3 Deletion
            </h3>
            <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Delete your account through App settings</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Request complete data deletion by contacting us</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Leave groups to remove yourself from shared expenses</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              6.4 Opt-Out
            </h3>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Disable push notifications in device settings</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Opt out of analytics (where applicable)</li>
            </ul>
          </div>
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              7. Children's Privacy
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              OweBuddy is not intended for users under the age of 13 (or 16 in the European Union). We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately, and we will delete such information.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              8. International Data Transfers
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              Your information may be transferred to and stored on servers located outside your country of residence. By using OweBuddy, you consent to the transfer of your information to countries that may have different data protection laws than your country.
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              We use Firebase services, which comply with international data protection standards including GDPR.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              9. Third-Party Links
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              The App may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              10. Changes to This Privacy Policy
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              We may update this Privacy Policy from time to time. We will notify you of any changes by:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Posting the new Privacy Policy in the App</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Updating the "Last Updated" date</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Sending an in-app notification for significant changes</li>
            </ul>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              Your continued use of the App after changes constitutes acceptance of the updated policy.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              11. Regional Privacy Rights
            </h2>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              11.1 GDPR (European Union)
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              If you are in the EU, you have additional rights under GDPR:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Right to access your personal data</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Right to rectification of inaccurate data</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Right to erasure ("right to be forgotten")</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Right to restrict processing</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Right to data portability</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Right to object to processing</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Right to withdraw consent</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              11.2 CCPA (California)
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              California residents have the right to:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Know what personal information is collected</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Know if personal information is sold or disclosed</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Opt-out of the sale of personal information</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Request deletion of personal information</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Non-discrimination for exercising privacy rights</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              12. Contact Us
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
            </p>
          
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '10px' }}>
              <strong>Support:</strong>{' '}
              <a href="mailto:rovitatech@gmail.com" style={{ color: '#2563eb', textDecoration: 'none' }}>
                rovitatech@gmail.com
              </a>
            </p>
          
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              13. Consent
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              By using OweBuddy, you consent to this Privacy Policy and agree to its terms. If you do not agree with this policy, please do not use the App.
            </p>
          </div>

          <div style={{ textAlign: 'center', paddingTop: '40px', marginTop: '40px', borderTop: '1px solid #e5e7eb' }}>
            <p style={{ color: '#9ca3af', fontSize: '14px' }}>
              © 2026 Rovitatech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
