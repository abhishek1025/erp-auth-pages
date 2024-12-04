import { Button, Input } from 'antd';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

const VerifyResetCode: React.FC<{
  handleChangeStep: (step: number) => void;
  email: string | null | undefined;
}> = ({ handleChangeStep, email }) => {
  type ResetPasswordCode = {
    otp: string;
  };
  const formik = useFormik<ResetPasswordCode>({
    initialValues: {
      otp: '',
    },
    validationSchema: Yup.object({
      otp: Yup.string()
        .length(4, 'OTP must be 6 digits')
        .required('Verification Code is required'),
    }),
    onSubmit: values => {
      console.log(values);
      handleChangeStep(3);
    },
  });

  return (
    <div className='verify-reset-code'>
      <div className='forgot-password-common-title'>
        <h3>Password Reset</h3>

        <p>
          We sent code to <span>{email}</span>
        </p>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className='opt-input-wrapper'>
          <Input.OTP
            length={4}
            size='large'
            style={{ width: '100%' }}
            {...formik.getFieldProps('otp')}
            status={formik.touched.otp && formik.errors.otp ? 'error' : ''}
            onChange={_otp => {
              formik.setFieldValue('otp', _otp);
            }}
          />
        </div>

        <div className='verify-reset-code-btn'>
          <Button
            type='primary'
            className='primary-btn'
            size='large'
            htmlType='submit'>
            Continue
          </Button>
        </div>
      </form>

      <p className='verify-reset-message'>
        Didn't receive the email?{' '}
        <span
          onClick={() => {
            handleChangeStep(1);
          }}>
          Click to resend
        </span>
      </p>
    </div>
  );
};

export default VerifyResetCode;

