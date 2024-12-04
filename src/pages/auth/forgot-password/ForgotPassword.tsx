import { ArrowLeftOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-router';
import PasswordResetRequest from '../../../components/auth/forgot-password/PasswordResetRequest';
import SetNewPassword from '../../../components/auth/forgot-password/SetNewPassword';
import VerifyResetCode from '../../../components/auth/forgot-password/VerifyResetCode';
import './forgotPassword.scss';

import ForgotPasswordBanner from '../../../assets/images/forgot-password-banner.jpg';
import Logo from '../../../components/Logo';

const ForgotPassword = () => {
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string | null>();

  const handleChangeStep = (_step: number, _email?: string): void => {
    setStep(_step);

    if (_email) {
      setEmail(_email);
    }
  };

  const renderPasswordResetStep = (step: number) => {
    switch (step) {
      case 1:
        return <PasswordResetRequest handleChangeStep={handleChangeStep} />;

      case 2:
        return (
          <VerifyResetCode handleChangeStep={handleChangeStep} email={email} />
        );

      case 3:
        return <SetNewPassword />;

      default:
        return;
    }
  };

  return (
    <div className='forgot-password-wrapper'>
      <div className='forgot-password-banner-container'>
        <img src={ForgotPasswordBanner} alt='Forgot Password' />
      </div>
      <div className='forgot-password-form-container'>
        <div
          style={{
            textAlign: 'right',
          }}>
          <Logo />
        </div>

        <div className='forgot-password-body'>
          <div className='forgot-password-content'>
            {renderPasswordResetStep(step)}

            <Link to='/' className='forgot-password-back-link'>
              <div className='forgot-password-breadcrumbs'>
                <ArrowLeftOutlined /> <p>Back to Log In</p>
              </div>
            </Link>

            <div className='progress-container'>
              {[...Array(3).keys()].map((el, index) => {
                return (
                  <div
                    className={`
                  progress-bar
                  ${index + 1 === step ? 'progress' : ''}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

