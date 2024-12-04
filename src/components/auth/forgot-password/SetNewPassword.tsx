import { ResetPasswordFormType } from '@/interface';
import { NewPasswordSchema } from '@/schema';
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useFormik } from 'formik';

export const SetNewPassword: React.FC = () => {
  const formik = useFormik<ResetPasswordFormType>({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: NewPasswordSchema,
    onSubmit: () => {},
  });

  return (
    <div className='set-new-password-container'>
      <div className='forgot-password-common-title'>
        <h3>Set New Password</h3>
        <p>Must be at least 8 characters</p>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <div className='input-label-wrapper'>
            <label>Password</label>
            <Input.Password
              size='large'
              iconRender={visible =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              prefix={<LockOutlined />}
              placeholder='Enter your Password'
              {...formik.getFieldProps('password')}
              status={
                formik.touched.password && formik.errors.password ? 'error' : ''
              }
            />
          </div>

          {formik.touched.password && formik.errors.password ? (
            <div className='error'>{formik.errors.password}</div>
          ) : null}
        </div>

        <div>
          <div className='input-label-wrapper'>
            <label>Confirm Password</label>
            <Input.Password
              size='large'
              iconRender={visible =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              prefix={<LockOutlined />}
              placeholder='Confirm Password'
              {...formik.getFieldProps('confirmPassword')}
              status={
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? 'error'
                  : ''
              }
            />
          </div>

          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className='error'>{formik.errors.confirmPassword}</div>
          ) : null}
        </div>

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
    </div>
  );
};

