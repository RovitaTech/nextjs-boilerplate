import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - ChirpFake | Rovitatech',
  description: 'Privacy Policy for ChirpFake content creation app. Learn how we protect your data.',
  keywords: 'privacy policy, ChirpFake, content creation, data protection, Rovitatech',
}

export default function ChirpFakePrivacyPolicy() {
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
          <p style={{ color: '#6b7280', marginBottom: '5px', fontSize: '18px' }}>ChirpFake</p>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>Last Updated: November 21, 2025</p>
        </div>

        <div style={{ textAlign: 'left' }}>
          <p style={{ color: '#374151', lineHeight: '1.7', marginBottom: '40px', fontSize: '16px' }}>
            ChirpFake ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our mobile application.
          </p>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              1. Information We Collect
            </h2>
            
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              1.1 Information You Provide
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              ChirpFake is designed to work locally on your device. We do not collect or store any personal information on external servers. Any content you create, including:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Text content for posts</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Images you select or upload</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Screenshots you generate</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Profile information you enter</li>
            </ul>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              All of this information remains on your device and is not transmitted to us or any third parties.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              1.2 Automatically Collected Information
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              We do not automatically collect any information about your device, usage patterns, or analytics.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              2. How We Use Your Information
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              Since ChirpFake operates entirely on your device:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>All content creation and editing happens locally</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Screenshots are saved directly to your device's gallery</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>No data is transmitted to external servers</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>We do not track, analyze, or monitor your usage</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              3. Permissions We Request
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              ChirpFake requires certain permissions to function properly:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Storage/Photo Library Access:</strong> To save generated screenshots to your device's gallery
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Camera/Photo Library:</strong> To allow you to select images for profile pictures or post content
              </li>
            </ul>
            <p style={{ color: '#374151', lineHeight: '1.6', marginTop: '15px' }}>
              These permissions are used solely for the app's functionality and do not involve data collection or transmission.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              4. Data Storage and Security
            </h2>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>All data is stored locally on your device</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>We do not maintain servers or databases containing user information</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>You have complete control over your data and can delete the app at any time to remove all associated data</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              5. Third-Party Services
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              ChirpFake does not integrate with any third-party analytics, advertising, or tracking services. The app operates independently without external dependencies that collect user data.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              6. Children's Privacy
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              ChirpFake does not knowingly collect any information from children under the age of 13. Since we don't collect any personal information at all, the app can be used by individuals of any age. However, we recommend parental supervision for younger users to ensure appropriate content creation.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              7. Data Sharing and Disclosure
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              We do not share, sell, rent, or trade any user information because we do not collect any user information. All content you create remains private on your device unless you choose to share it through other means (such as social media or messaging apps).
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              8. Your Rights and Choices
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              You have complete control over your data:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>All content is stored locally on your device</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>You can delete any screenshots from your device's gallery at any time</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>You can revoke app permissions through your device settings</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Uninstalling the app will remove all app-related data from your device</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              9. Changes to This Privacy Policy
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              We may update this Privacy Policy from time to time. Any changes will be reflected by updating the "Last Updated" date at the top of this policy. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              10. International Users
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              Since ChirpFake operates entirely on your device without data transmission, there are no international data transfer concerns. The app can be used anywhere in the world without privacy implications.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              11. Disclaimer
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              ChirpFake is a content creation tool intended for entertainment, educational, or creative purposes. Users are solely responsible for how they use the content generated by this app. We do not endorse or encourage the creation of misleading, fraudulent, or harmful content. Please use this app responsibly and in compliance with applicable laws and regulations.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              12. Contact Us
            </h2>
            <p style={{ color: '#374151', marginBottom: '15px', lineHeight: '1.6' }}>
              If you have any questions or concerns about this Privacy Policy or ChirpFake, please contact us:
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              <strong>Email:</strong>{' '}
              <a href="mailto:rovitatech@gmail.com" style={{ color: '#2563eb', textDecoration: 'none' }}>
                rovitatech@gmail.com
              </a>
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
