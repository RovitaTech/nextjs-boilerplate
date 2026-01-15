import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - MemeForge | Rovitatech',
  description: 'Privacy Policy for MemeForge meme creation app. Learn how we protect your data.',
  keywords: 'privacy policy, MemeForge, meme creator, data protection, Rovitatech',
}

export default function MemeForgePrivacyPolicy() {
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
          <p style={{ color: '#6b7280', marginBottom: '5px', fontSize: '18px' }}>MemeForge</p>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>Last Updated: January 15, 2026</p>
        </div>

        <div style={{ textAlign: 'left' }}>
          <p style={{ color: '#374151', lineHeight: '1.7', marginBottom: '20px', fontSize: '16px' }}>
            RovitaTech ("we", "our", or "us") operates the MemeForge mobile application (the "App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App.
          </p>
          <p style={{ color: '#374151', lineHeight: '1.7', marginBottom: '40px', fontSize: '16px' }}>
            Please read this Privacy Policy carefully. By using the App, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access the App.
          </p>
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              1. Information We Collect
            </h2>
            
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              1.1 Information You Provide
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              MemeForge is designed with privacy in mind. We do NOT require you to create an account or provide personal information to use the App. However, we may collect the following:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Media Files:</strong> Photos and videos you select from your device gallery or capture with your camera to create memes. These files are processed locally on your device and are not uploaded to our servers.
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Created Content:</strong> Memes you create are stored locally on your device only.
              </li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              1.2 Automatically Collected Information
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              When you use the App, we may automatically collect certain information:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Device Information:</strong> Device type, operating system version, unique device identifiers, and mobile network information.
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Usage Data:</strong> Information about how you interact with the App, including features used, time spent in the App, and crash reports.
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>App Performance Data:</strong> Technical data to help us identify and fix bugs and improve app performance.
              </li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              1.3 Third-Party Services
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              The App uses third-party services that may collect information used to identify you:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Google AdMob:</strong> For displaying advertisements (free version only)
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>RevenueCat:</strong> For managing in-app purchases and subscriptions
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Google Fonts:</strong> For providing typography options
              </li>
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
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>To process your meme creations locally on your device</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>To manage in-app purchases and verify premium subscriptions</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>To display relevant advertisements (free version only)</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>To improve and optimize the App's performance</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>To detect, prevent, and address technical issues</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>To analyze usage patterns and improve user experience</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>To comply with legal obligations</li>
            </ul>
          </div>
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              3. Data Storage and Security
            </h2>
            
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              3.1 Local Storage
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '25px' }}>
              <strong>All your created memes and editing history are stored locally on your device only.</strong> We do not upload your memes, photos, videos, or any creative content to our servers or any cloud storage.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              3.2 Security Measures
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '25px' }}>
              We implement appropriate technical and organizational security measures to protect your information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              3.3 Data Retention
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              Your locally stored memes remain on your device until you delete them through the App or uninstall the App. Usage data collected by third-party services is retained according to their respective privacy policies.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              4. Permissions We Request
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              The App requires the following permissions to function properly:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Camera:</strong> To capture photos and videos for meme creation
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Photo Library/Gallery:</strong> To select existing photos and videos from your device
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Storage:</strong> To save your created memes to your device gallery
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Internet:</strong> To display ads, process in-app purchases, and load online templates
              </li>
            </ul>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              You can manage these permissions in your device settings at any time.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              5. Third-Party Services and Their Privacy Policies
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              The App integrates with the following third-party services. We encourage you to review their privacy policies:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Google AdMob:</strong>{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>
                  https://policies.google.com/privacy
                </a>
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>RevenueCat:</strong>{' '}
                <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>
                  https://www.revenuecat.com/privacy
                </a>
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Google Fonts:</strong>{' '}
                <a href="https://developers.google.com/fonts/faq/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>
                  https://developers.google.com/fonts/faq/privacy
                </a>
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              6. Advertising
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              The free version of MemeForge displays advertisements through Google AdMob. AdMob may use cookies and similar technologies to serve personalized ads based on your interests. You can opt out of personalized advertising by adjusting your device settings:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>iOS:</strong> Settings &gt; Privacy &gt; Advertising &gt; Limit Ad Tracking
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Android:</strong> Settings &gt; Google &gt; Ads &gt; Opt out of Ads Personalization
              </li>
            </ul>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              Premium subscribers do not see any advertisements.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              7. In-App Purchases
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              MemeForge offers premium features through in-app purchases managed by RevenueCat. When you make a purchase:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Payment processing is handled by Apple App Store or Google Play Store</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>We receive only transaction confirmation and entitlement information</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>We do not store your payment card information</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Purchase history is managed by your app store account</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              8. Children's Privacy
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              MemeForge is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will take steps to delete such information.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              9. Your Rights and Choices
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              You have the following rights regarding your information:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Access:</strong> Request information about data we collect
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Deletion:</strong> Delete your locally stored memes at any time through the App
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Opt-Out:</strong> Disable personalized advertising in your device settings
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Uninstall:</strong> Remove the App to delete all locally stored data
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Permissions:</strong> Revoke app permissions in your device settings
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              10. Contact Us
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
              <strong>App:</strong> MemeForge
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '10px' }}>
              <strong>Package:</strong> com.rovitatech.memeforge
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              We will respond to your inquiry within 30 days.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              11. Consent
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              By using MemeForge, you consent to this Privacy Policy and agree to its terms. If you do not agree with this policy, please do not use the App.
            </p>
          </div>

          <div style={{ textAlign: 'center', paddingTop: '40px', marginTop: '40px', borderTop: '1px solid #e5e7eb' }}>
            <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '5px', fontWeight: 'bold' }}>
              MemeForge by RovitaTech
            </p>
            <p style={{ color: '#9ca3af', fontSize: '14px' }}>
              Creating viral content with privacy in mind
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
