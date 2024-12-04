import { PasswordResetRequestFormType } from '@/interface';
import { PasswordResetSchema } from '@/schema';
import { MailOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useFormik } from 'formik';

export interface IPasswordResetRequest {
  handleChangeStep: (step: number, email?: string) => void;
}

export const PasswordResetRequest: React.FC<IPasswordResetRequest> = ({
  handleChangeStep,
}) => {
  const formik = useFormik<PasswordResetRequestFormType>({
    initialValues: {
      email: '',
    },
    validationSchema: PasswordResetSchema,
    onSubmit: values => {
      handleChangeStep(2, values.email);
    },
  });

  return (
    <>
      <div className='forgot-password-common-title'>
        <h3>Forgot Your Password ?</h3>
        <p>No worries, We will send you reset instructions</p>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className='input-label-wrapper'>
          <label>Email</label>
          <Input
            size='large'
            prefix={<MailOutlined />}
            placeholder='Enter your email'
            {...formik.getFieldProps('email')}
            status={formik.touched.email && formik.errors.email ? 'error' : ''}
          />
        </div>

        {formik.touched.email && formik.errors.email ? (
          <div className='error'>{formik.errors.email}</div>
        ) : null}

        <div className='forgot-password-submit-btn'>
          <Button
            type='primary'
            size='large'
            className='primary-btn'
            htmlType='submit'>
            Reset Password
          </Button>
        </div>
      </form>
    </>
  );
};

