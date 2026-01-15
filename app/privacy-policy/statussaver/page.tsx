import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Status Saver | Rovitatech',
  description: 'Privacy Policy for Status Saver - Clip Archiver app. Learn how we protect your data.',
  keywords: 'privacy policy, Status Saver, Clip Archiver, data protection, Rovitatech',
}

export default function StatusSaverPrivacyPolicy() {
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
          <p style={{ color: '#6b7280', marginBottom: '5px', fontSize: '18px' }}>Status Saver - Clip Archiver</p>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>Last Updated: November 21, 2025</p>
        </div>

        <div style={{ textAlign: 'left' }}>
          <p style={{ color: '#374151', lineHeight: '1.7', marginBottom: '40px', fontSize: '16px' }}>
            Status Saver - Clip Archiver ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how our application handles your information.
          </p>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              1. Information We Collect
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              Status Saver does not collect, store, or transmit any personal information. The app operates entirely on your device.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              2. Permissions Required
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              Our app requires the following permissions to function:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Storage Permission:</strong> Required to access and save status files from your device's storage. All files remain on your device.
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Media Access:</strong> Required to read and save photos and videos from status folders.
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              3. Data Storage
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              All data processed by Status Saver remains on your device. We do not:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Upload your data to any server</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Share your data with third parties</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Collect analytics or tracking information</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Store any personal information</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              4. Third-Party Services
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              Status Saver does not integrate with any third-party services, analytics tools, or advertising networks.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              5. Children's Privacy
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              Our app does not knowingly collect any information from children under the age of 13. The app is designed for general audiences.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              6. Security
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              Since all data remains on your device, the security of your information depends on your device's security measures. We recommend:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Using device lock screens</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Keeping your device software updated</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Being cautious about granting app permissions</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              7. Changes to This Privacy Policy
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              8. Your Rights
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              Since we don't collect any personal data, there is no data to access, modify, or delete from our servers. All content saved by the app can be managed directly on your device.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              9. Disclaimer
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              Status Saver is an independent application and is not affiliated with, endorsed by, or connected to any messaging platform. Users are responsible for ensuring they have the right to save and share content accessed through the app.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              10. Contact Us
            </h2>
            <p style={{ color: '#374151', marginBottom: '15px', lineHeight: '1.6' }}>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '10px' }}>
              <strong>Email:</strong>{' '}
              <a href="mailto:rovitatech@gmail.com" style={{ color: '#2563eb', textDecoration: 'none' }}>
                rovitatech@gmail.com
              </a>
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              <strong>Developer:</strong> RovitaTech
            </p>
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
