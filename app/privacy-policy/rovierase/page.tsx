import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - RoviErase | Rovitatech',
  description: 'Privacy Policy for RoviErase background removal app. Learn how we protect your data.',
  keywords: 'privacy policy, RoviErase, background removal, data protection, Rovitatech',
}

export default function RoviErasePrivacyPolicy() {
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
          <p style={{ color: '#6b7280', marginBottom: '5px', fontSize: '18px' }}>RoviErase</p>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>Last Updated: January 15, 2026</p>
        </div>

        <div style={{ textAlign: 'left' }}>
          <p style={{ color: '#374151', lineHeight: '1.7', marginBottom: '40px', fontSize: '16px' }}>
            RoviTaTech ("we", "our", or "us") operates the RoviErase mobile application (the "App"). This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our App.
          </p>
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              1. Information We Collect
            </h2>
            
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              1.1 Information You Provide
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              When you use RoviErase, we may collect the following information:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Account information (email address, username) if you choose to create an account</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Payment information when you purchase premium plans (processed securely through third-party payment processors)</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Images you upload for background removal processing</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              1.2 Automatically Collected Information
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              We may automatically collect certain information when you use the App:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Device information (device type, operating system version)</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>App usage data (features used, credits consumed)</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Log data (IP address, access times, app crashes)</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              1.3 Third-Party Services
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              Our App uses the following third-party services that may collect information:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Google AdMob - for displaying advertisements</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Cloudinary - for image processing and storage</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Google Analytics - for app usage analytics (if applicable)</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              2. How We Use Your Information
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              We use the collected information for the following purposes:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>To provide and maintain the App's functionality</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>To process your images and remove backgrounds</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>To manage your account and credits</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>To process payments for premium plans</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>To display relevant advertisements</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>To improve and optimize the App</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>To communicate with you about updates and features</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>To detect and prevent technical issues or fraudulent activity</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              3. Image Processing and Storage
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              Images you upload to RoviErase are:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Processed using Cloudinary's AI-powered background removal service</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Temporarily stored on secure servers during processing</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Automatically deleted after processing is complete</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Not used for any purpose other than providing the background removal service</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Not shared with third parties except as necessary for processing</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              4. Your Rights
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              You have the following rights regarding your personal information:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Access:</strong> Request a copy of the personal information we hold about you
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Correction:</strong> Request correction of inaccurate or incomplete information
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Deletion:</strong> Request deletion of your personal information
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Objection:</strong> Object to processing of your personal information
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Data Portability:</strong> Request transfer of your data to another service
              </li>
            </ul>
            <p style={{ color: '#374151', lineHeight: '1.6', marginTop: '15px' }}>
              To exercise these rights, please contact us at the email address provided below.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              5. Contact Us
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '10px' }}>
              <strong>Email:</strong>{' '}
              <a href="mailto:rovitatech@gmail.com" style={{ color: '#2563eb', textDecoration: 'none' }}>
                rovitatech@gmail.com
              </a>
            </p>
            
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              6. Consent
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              By using RoviErase, you consent to this Privacy Policy and agree to its terms.
            </p>
          </div>

          <div style={{ textAlign: 'center', paddingTop: '40px', marginTop: '40px', borderTop: '1px solid #e5e7eb' }}>
            <p style={{ color: '#9ca3af', fontSize: '14px' }}>
              © 2026 RovitaTech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
