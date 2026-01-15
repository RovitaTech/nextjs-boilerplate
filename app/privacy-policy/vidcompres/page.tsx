import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - VidCompres | Rovitatech',
  description: 'Privacy Policy for VidCompres video compression app. Learn how we protect your data.',
  keywords: 'privacy policy, VidCompres, video compression, data protection, Rovitatech',
}

export default function VidCompresPrivacyPolicy() {
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
          <p style={{ color: '#6b7280', marginBottom: '5px', fontSize: '18px' }}>VidCompres</p>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>Last Updated: January 15, 2025</p>
        </div>

        <div style={{ textAlign: 'left' }}>
          <p style={{ color: '#374151', lineHeight: '1.7', marginBottom: '40px', fontSize: '16px' }}>
            RovitaTech ("we", "our", or "us") operates the VidCompres mobile application (the "App"). This Privacy Policy explains how we handle information when you use our App.
          </p>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              1. Information Collection and Use
            </h2>
            
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              1.1 Personal Information
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '30px' }}>
              VidCompres does not collect, store, or transmit any personal information. We do not require you to create an account, provide an email address, or share any personal details to use the App.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              1.2 Video and Media Files
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              The App processes video files that you select from your device. All video processing occurs locally on your device. We do not:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Upload your videos to our servers</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Store your videos on external servers</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Access your videos without your explicit permission</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Share your videos with third parties</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Analyze the content of your videos</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              1.3 Device Permissions
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              The App requires certain permissions to function properly:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Storage/Media Access:</strong> To read video files you want to process and save processed videos to your device
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Camera (Optional):</strong> To record videos directly within the app if you choose to use this feature
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Microphone (Optional):</strong> To record audio when capturing videos if you choose to use this feature
              </li>
            </ul>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              These permissions are used solely for the App's core functionality and are never used to collect or transmit data.
            </p>
          </div>
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              2. Data Storage and Processing
            </h2>
            
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              2.1 Local Processing
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '30px' }}>
              All video processing, compression, conversion, and editing operations are performed entirely on your device. No data is sent to external servers or cloud services.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              2.2 Temporary Files
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '30px' }}>
              During video processing, the App may create temporary files on your device. These files are automatically deleted after processing is complete or when you close the App.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              2.3 Saved Videos
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              Processed videos are saved to your device's storage in the location you specify. You have complete control over these files and can delete them at any time.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              3. Third-Party Services
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              VidCompres does not integrate with any third-party analytics services, advertising networks, or data collection tools. The App operates completely offline and does not require an internet connection for its core functionality.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              4. Data Security
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              Since all processing occurs locally on your device and we do not collect or transmit any data, your videos and information remain secure on your device. We recommend:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Using device-level security features (passcode, biometric authentication)</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Keeping your device's operating system updated</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Being cautious when sharing processed videos with others</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              5. Children's Privacy
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              VidCompres does not knowingly collect any information from children under the age of 13. Since we do not collect any personal information from any users, the App is safe for users of all ages. However, parental guidance is recommended for children using the App.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              6. Your Rights and Choices
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              You have complete control over your data:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Access:</strong> All your videos remain on your device under your control
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Deletion:</strong> You can delete any processed videos from your device at any time
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Permissions:</strong> You can revoke app permissions through your device settings at any time
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Uninstall:</strong> Uninstalling the App will remove all app-related data from your device
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              7. No Advertising or Tracking
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              VidCompres does not:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Display advertisements</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Use tracking cookies or similar technologies</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Collect usage statistics or analytics</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Track your behavior or preferences</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Share data with advertising networks</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              8. Open Source Components
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              VidCompres uses FFmpeg, an open-source video processing library, for video operations. FFmpeg processing occurs entirely on your device and does not involve any data transmission.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              9. Consent
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              By using VidCompres, you consent to this Privacy Policy. If you do not agree with this policy, please do not use the App.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              10. Contact Us
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              If you have any questions, concerns, or suggestions regarding this Privacy Policy or our privacy practices, please contact us:
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '10px' }}>
              <strong>RovitaTech</strong>
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '10px' }}>
              <strong>Email:</strong>{' '}
              <a href="mailto:support@rovitatech.com" style={{ color: '#2563eb', textDecoration: 'none' }}>
                support@rovitatech.com
              </a>
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '10px' }}>
              <strong>App:</strong> VidCompres
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              We will respond to your inquiry within a reasonable timeframe.
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
