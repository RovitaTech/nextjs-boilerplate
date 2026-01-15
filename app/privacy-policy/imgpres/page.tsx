import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - ImgPres | Rovitatech',
  description: 'Privacy Policy for ImgPres image processing app. Learn how we protect your data.',
  keywords: 'privacy policy, ImgPres, image processing, data protection, Rovitatech',
}

export default function ImgPresPrivacyPolicy() {
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
          <p style={{ color: '#6b7280', marginBottom: '5px', fontSize: '18px' }}>ImgPres - Image Processing Studio</p>
          <p style={{ color: '#9ca3af', fontSize: '14px' }}>Last Updated: January 15, 2026</p>
        </div>

        <div style={{ textAlign: 'left' }}>
          <p style={{ color: '#374151', lineHeight: '1.7', marginBottom: '40px', fontSize: '16px', fontWeight: 'bold' }}>
            Privacy First: ImgPres processes all images locally on your device. Your images never leave your device and are not uploaded to any servers.
          </p>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              1. Information We Collect
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              ImgPres is designed with privacy in mind. We do not collect, store, or transmit any personal information or image data.
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px', fontWeight: 'bold' }}>
              What we DO NOT collect:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Your images or any image data</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Personal information (name, email, phone number)</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Device identifiers or advertising IDs</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Location data</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Usage analytics or tracking data</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Crash reports or diagnostic data</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              2. How We Use Information
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              Since we do not collect any personal information or image data, there is no information to use, share, or process beyond the local image processing functions of the app.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              3. Image Processing
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              All image processing operations (compression, resizing, cropping, format conversion) are performed entirely on your device using local processing power.
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px', fontWeight: 'bold' }}>
              This means:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Images are processed locally and never uploaded to external servers</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>No internet connection is required for core functionality</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>You maintain complete control over your images</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Processed images are saved directly to your device</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              4. Permissions
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              ImgPres may request the following permissions to function properly:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Storage/Photos Access:</strong> To read images you want to process and save processed images to your device
              </li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>
                <strong>Camera Access:</strong> To capture new photos for processing (optional)
              </li>
            </ul>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              These permissions are used solely for the app's core functionality and no data is transmitted outside your device.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              5. Third-Party Services
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              ImgPres does not integrate with any third-party analytics, advertising, or data collection services. The app operates completely offline for image processing functions.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              6. Data Security
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              Since all processing happens locally on your device:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Your images remain under your complete control</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>No data transmission means no risk of data breaches during transfer</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>Image security depends on your device's security measures</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              7. Children's Privacy
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6' }}>
              ImgPres does not collect any personal information from anyone, including children under 13. The app is safe for users of all ages as it operates entirely offline for image processing.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              8. Your Rights
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              Since we do not collect or store any personal data:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>There is no personal data to access, modify, or delete</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>You maintain complete control over all images processed through the app</li>
              <li style={{ color: '#374151', marginBottom: '10px', lineHeight: '1.6' }}>You can uninstall the app at any time with no data retention concerns</li>
            </ul>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '25px' }}>
              9. Contact Information
            </h2>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '15px' }}>
              If you have any questions about this privacy policy or ImgPres, please contact us:
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '10px' }}>
              <strong>Email:</strong>{' '}
              <a href="mailto:rovitatech@gmail.com" style={{ color: '#2563eb', textDecoration: 'none' }}>
                rovitatech@gmail.com
              </a>
            </p>
            <p style={{ color: '#374151', lineHeight: '1.6', marginBottom: '10px' }}>
              <strong>App:</strong> ImgPres - Image Processing Studio
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
