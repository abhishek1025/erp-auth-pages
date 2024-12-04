import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from '@ant-design/icons';
import { Button, Input } from 'antd';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const SetNewPassword: React.FC = () => {
  type ResetPassword = {
    password: string;
    confirmPassword: string;
  };

  const formik = useFormik<ResetPassword>({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required('Password is required')
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
          'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
        ),

      confirmPassword: Yup.string()
        .required('Confirm password is required')
        .oneOf([Yup.ref('password')], 'Passwords must match'),
    }),
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

export default SetNewPassword;

