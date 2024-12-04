import { ResetPasswordCodeFormType } from '@/interface';
import { OtpSchema } from '@/schema';
import { Button, Input } from 'antd';
import { useFormik } from 'formik';

export interface IVerifyResetCode {
  handleChangeStep: (step: number) => void;
  email: string | null | undefined;
}

export const VerifyResetCode: React.FC<IVerifyResetCode> = ({
  handleChangeStep,
  email,
}) => {
  const formik = useFormik<ResetPasswordCodeFormType>({
    initialValues: {
      otp: '',
    },
    validationSchema: OtpSchema,
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

