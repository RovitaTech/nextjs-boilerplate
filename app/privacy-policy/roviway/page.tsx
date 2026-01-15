import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - RoviWay | Rovitatech',
  description: 'Privacy Policy for RoviWay navigation app. Learn how we protect your data and what information we collect.',
  keywords: 'privacy policy, RoviWay, navigation app, data protection, Rovitatech',
}

export default function RoviWayPrivacyPolicy() {
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
          <p style={{ color: '#6b7280', marginBottom: '5px', fontSize: '18px' }}>RoviWay</p>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>Last Updated: January 2025</p>
        </div>

        <div style={{ textAlign: 'left' }}>
          <p style={{ color: '#374151', lineHeight: '1.7', marginBottom: '40px', fontSize: '16px' }}>
            At <strong>RoviWay</strong>, we respect your privacy and are committed to protecting your personal data. 
            This privacy policy explains what information we collect, what we don't collect, and how we use your data.
          </p>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              📊 What Information We Collect
            </h2>
            
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              ✅ We DO Collect:
            </h3>
            <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Location Data:</strong> Your current location to provide navigation and nearby attractions (only when you use the app)
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Search History:</strong> Your searched destinations and routes to improve recommendations
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Saved Routes:</strong> Routes and places you bookmark for quick access
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>App Usage Data:</strong> How you interact with the app to improve user experience
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Device Information:</strong> Device type, OS version, and app version for technical support
              </li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              ❌ We DO NOT Collect:
            </h3>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Personal Identity:</strong> No name, email, or phone number required
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Payment Information:</strong> No credit card or banking details
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Contacts:</strong> We don't access your contact list
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Photos/Media:</strong> We don't access your photos or media files
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>SMS/Call Logs:</strong> We don't read your messages or call history
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Background Location:</strong> We don't track your location when app is closed
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Microphone/Camera:</strong> We don't access your microphone or camera
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              🎯 How We Use Your Information
            </h2>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Navigation:</strong> To provide accurate transit directions and routes
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Recommendations:</strong> To suggest nearby attractions and destinations
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Saved Data:</strong> To store your favorite routes and places locally on your device
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>App Improvement:</strong> To analyze usage patterns and fix bugs
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Performance:</strong> To optimize app speed and reliability
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              🔒 Data Storage & Security
            </h2>
            
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              Local Storage
            </h3>
            <p style={{ color: '#374151', marginBottom: '25px', lineHeight: '1.6' }}>
              Most of your data (saved routes, preferences) is stored locally on your device and never leaves your phone.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              Cloud Storage
            </h3>
            <p style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
              We use secure cloud services only for:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '25px' }}>
              <li style={{ color: '#374151', marginBottom: '8px', lineHeight: '1.6' }}>Real-time transit data from public APIs</li>
              <li style={{ color: '#374151', marginBottom: '8px', lineHeight: '1.6' }}>Destination information and reviews</li>
              <li style={{ color: '#374151', marginBottom: '8px', lineHeight: '1.6' }}>Map data and navigation</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              Security Measures
            </h3>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '8px', lineHeight: '1.6' }}>All data transmission is encrypted (HTTPS/SSL)</li>
              <li style={{ color: '#374151', marginBottom: '8px', lineHeight: '1.6' }}>No data is sold to third parties</li>
              <li style={{ color: '#374151', marginBottom: '8px', lineHeight: '1.6' }}>Regular security audits and updates</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              🌐 Third-Party Services
            </h2>
            <p style={{ color: '#374151', marginBottom: '15px', lineHeight: '1.6' }}>
              We use the following third-party services:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Google Maps API:</strong> For maps and navigation (subject to Google's privacy policy)
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Transit APIs:</strong> For real-time public transport data
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Places API:</strong> For destination information and reviews
              </li>
            </ul>
            <p style={{ color: '#6b7280', fontStyle: 'italic', fontSize: '14px' }}>
              These services have their own privacy policies. We recommend reviewing them.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              👤 Your Rights
            </h2>
            <p style={{ color: '#374151', marginBottom: '15px', lineHeight: '1.6' }}>
              You have the right to:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Access:</strong> View what data we have about you
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Delete:</strong> Request deletion of your data
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Control:</strong> Turn off location services anytime in app settings
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Export:</strong> Download your saved routes and places
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Opt-out:</strong> Disable analytics and tracking
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              🔄 Data Retention
            </h2>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Location Data:</strong> Not stored permanently, only used during active session
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Search History:</strong> Kept for 90 days, then automatically deleted
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Saved Routes:</strong> Kept until you delete them
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Usage Analytics:</strong> Anonymized and kept for 12 months
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              👶 Children's Privacy
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              RoviWay does not knowingly collect data from children under 13. If you believe a child has provided us with personal information, please contact us immediately.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              🔔 Changes to Privacy Policy
            </h2>
            <p style={{ color: '#374151', marginBottom: '15px', lineHeight: '1.6' }}>
              We may update this privacy policy from time to time. We will notify you of any changes by:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '8px', lineHeight: '1.6' }}>Posting the new policy in the app</li>
              <li style={{ color: '#374151', marginBottom: '8px', lineHeight: '1.6' }}>Updating the "Last Updated" date</li>
              <li style={{ color: '#374151', marginBottom: '8px', lineHeight: '1.6' }}>Sending an in-app notification for major changes</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              📱 Permissions Explained
            </h2>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '15px', marginTop: '30px' }}>
              Why We Need Certain Permissions:
            </h3>
            <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Location:</strong> To show your position on the map and provide directions
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Internet:</strong> To fetch real-time transit data and maps
              </li>
              <li style={{ color: '#374151', marginBottom: '12px', lineHeight: '1.6' }}>
                <strong>Storage:</strong> To save your favorite routes and offline maps
              </li>
            </ul>
            <p style={{ color: '#6b7280', fontStyle: 'italic', fontSize: '14px' }}>
              You can revoke these permissions anytime in your device settings.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              🌍 International Users
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              RoviWay is available worldwide. Your data may be processed in different countries, but we ensure the same level of protection regardless of location.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              🚫 What We Will Never Do
            </h2>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '8px', lineHeight: '1.6' }}>Sell your personal data to advertisers</li>
              <li style={{ color: '#374151', marginBottom: '8px', lineHeight: '1.6' }}>Share your location with third parties without consent</li>
              <li style={{ color: '#374151', marginBottom: '8px', lineHeight: '1.6' }}>Track you when the app is closed</li>
              <li style={{ color: '#374151', marginBottom: '8px', lineHeight: '1.6' }}>Send spam or unwanted notifications</li>
              <li style={{ color: '#374151', marginBottom: '8px', lineHeight: '1.6' }}>Access your personal files or contacts</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              📧 Contact Us
            </h2>
            <p style={{ color: '#374151', marginBottom: '15px', lineHeight: '1.6' }}>
              If you have questions about this privacy policy or your data:
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              <strong>Email:</strong>{' '}
              <a href="mailto:rovitatech@gmail.com" style={{ color: '#2563eb', textDecoration: 'none' }}>
                rovitatech@gmail.com
              </a>
            </p>
          </div>

          <div style={{ textAlign: 'center', paddingTop: '40px', marginTop: '40px', borderTop: '1px solid #e5e7eb' }}>
            <p style={{ color: '#9ca3af', fontSize: '14px' }}>© 2025 Rovitatech. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
