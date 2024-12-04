const ForgotPasswordEmail = () => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f9',
        padding: '20px',
        height: '100vh',
        display: 'flex',
        boxSizing: 'border-box',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}>
      <div
        style={{
          backgroundColor: '#ffffff',
          maxWidth: '600px',
          margin: '0 auto',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}>
        <h2 style={{ color: '#007BFF', marginBottom: '10px' }}>Smart Guard</h2>

        <div
          style={{
            borderTop: '1px solid #ddd',
            margin: '20px 0',
          }}></div>

        <p style={{ color: '#333', fontSize: '16px' }}>Hello,</p>
        <p style={{ color: '#333', fontSize: '16px', lineHeight: '1.5' }}>
          We've received a request to reset the password for the account
          associated with your email. If this was you, please use the
          verification code below to reset your password:
        </p>

        <h3
          style={{
            backgroundColor: '#f1f1f1',
            padding: '10px 20px',
            display: 'inline-block',
            borderRadius: '5px',
            color: '#007BFF',
            fontSize: '20px',
            letterSpacing: '5px',
            margin: '20px 0',
          }}>
          12345
        </h3>

        <p style={{ color: '#333', fontSize: '16px', lineHeight: '1.5' }}>
          If you did not request a password reset, please ignore this message.
          Your account will remain secure.
        </p>

        <p style={{ color: '#555', fontSize: '14px', marginTop: '30px' }}>
          -- The Smart Guard Team
        </p>

        <div
          style={{
            borderTop: '1px solid #ddd',
            margin: '20px 0',
          }}></div>

        <p style={{ color: '#999', fontSize: '12px' }}>
          If you have any questions, feel free to contact us at{' '}
          <a href='mailto:support@smartguard.com' style={{ color: '#007BFF' }}>
            support@smartguard.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordEmail;

