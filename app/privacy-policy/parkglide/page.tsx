import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Park Glide | Rovitatech',
  description: 'Privacy Policy for Park Glide parking finder app. Learn how we protect your data.',
  keywords: 'privacy policy, Park Glide, parking finder, data protection, Rovitatech',
}

export default function ParkGlidePrivacyPolicy() {
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
          <p style={{ color: '#6b7280', marginBottom: '5px', fontSize: '18px' }}>Park Glide - Parking Finder App</p>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>Last Updated: November 21, 2024</p>
        </div>

        <div style={{ textAlign: 'left' }}>
          <p style={{ color: '#374151', lineHeight: '1.7', marginBottom: '40px', fontSize: '16px' }}>
            RovitaTech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Park Glide mobile application (the "App"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the App.
          </p>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              1. Information We Collect
            </h2>
            
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              1.1 Location Information
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              Park Glide requires access to your device's location services to provide you with nearby parking spaces. We collect:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Real-time GPS location data when you use the parking search feature</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Location data is used only while the app is in use</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Location information is not stored on our servers</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Location data is processed locally on your device</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              1.2 Usage Data
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              We may collect information about how you access and use the App, including:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Search queries and preferences</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Saved parking locations (stored locally on your device)</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>App features you interact with</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Device information (model, operating system version)</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              1.3 Third-Party Data
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              Park Glide integrates with third-party services to provide parking information:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Google Maps API:</strong> Used to display parking locations and provide navigation
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Google Places API:</strong> Used to retrieve parking space information, reviews, and ratings
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              2. How We Use Your Information
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              We use the information we collect to:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Provide parking space search functionality based on your location</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Display nearby parking options with accurate distance calculations</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Enable navigation to selected parking locations</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Save your favorite parking spots locally on your device</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Improve app performance and user experience</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Respond to your inquiries and provide customer support</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              3. Data Storage and Security
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              We implement appropriate technical and organizational security measures to protect your information:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Location data is processed in real-time and not stored on our servers</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Saved parking locations are stored locally on your device using secure storage</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>We do not maintain a database of user locations or personal information</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>All data transmission uses secure HTTPS connections</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              4. Third-Party Services
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              Park Glide uses the following third-party services:
            </p>
            
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              4.1 Google Maps Platform
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '30px' }}>
              We use Google Maps API and Google Places API to provide mapping and parking information. Your use of these services is subject to Google's Privacy Policy:{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>
                https://policies.google.com/privacy
              </a>
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              4.2 External Navigation
            </h3>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              When you tap "Get Directions," the app opens Google Maps or your default navigation app. Your interaction with these apps is governed by their respective privacy policies.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              5. Data Sharing and Disclosure
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>With Your Consent:</strong> We may share information when you give us explicit permission
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Legal Requirements:</strong> If required by law, court order, or governmental authority
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Service Providers:</strong> With third-party services (like Google Maps) necessary to operate the app
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              6. Your Privacy Rights
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              You have the following rights regarding your information:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Access:</strong> You can access your saved parking locations within the app
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Deletion:</strong> You can delete saved parking spots at any time
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Location Control:</strong> You can disable location services in your device settings
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>App Removal:</strong> Uninstalling the app removes all locally stored data
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              7. Children's Privacy
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              Park Glide is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              8. Changes to This Privacy Policy
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              We may update this Privacy Policy from time to time. We will notify you of any changes by:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Updating the "Last Updated" date at the top of this policy</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Posting the new Privacy Policy in the app and on our website</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Sending you a notification through the app (for material changes)</li>
            </ul>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              Your continued use of the App after any changes indicates your acceptance of the updated Privacy Policy.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              9. International Users
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              Park Glide is available globally. If you are accessing the App from outside your country of residence, please note that your information may be processed in countries with different data protection laws.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              10. California Privacy Rights
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Right to know what personal information is collected</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Right to know if personal information is sold or disclosed</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Right to opt-out of the sale of personal information</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Right to deletion of personal information</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Right to non-discrimination for exercising your rights</li>
            </ul>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              <strong>Note:</strong> Park Glide does not sell your personal information.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              Contact Us
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '10px' }}>
              <strong>RovitaTech</strong>
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '10px' }}>
              <strong>Email:</strong>{' '}
              <a href="mailto:rovitatech@gmail.com" style={{ color: '#2563eb', textDecoration: 'none' }}>
                rovitatech@gmail.com
              </a>
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              <strong>App:</strong> Park Glide
            </p>
          </div>

          <div style={{ textAlign: 'center', paddingTop: '40px', marginTop: '40px', borderTop: '1px solid #e5e7eb' }}>
            <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '5px' }}>
              © 2024 RovitaTech. All rights reserved.
            </p>
            <p style={{ color: '#9ca3af', fontSize: '14px' }}>
              Park Glide - Find Parking Spaces Near You
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
