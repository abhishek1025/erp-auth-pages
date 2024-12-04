import LogInBanner from '@/assets/images/login-banner.jpg';
import { Logo } from '@/components';
import { LoginFormType } from '@/interface';
import { LoginSchema } from '@/schema';
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Button, Checkbox, Input } from 'antd';
import { useFormik } from 'formik';
import { Link } from 'react-router';
import './LogIn.scss';

export const LogIn: React.FC = () => {
  const formik = useFormik<LoginFormType>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: () => {},
  });

  return (
    <div className='login-wrapper'>
      <div className='login-form-container'>
        <Logo />

        <div className='login-form-body'>
          <div className='login-form-content'>
            <div className='form-title'>
              <h2>Welcome to Smart Guard ERP</h2>
              <p>Login to access your account</p>
            </div>

            <form className='login-form' onSubmit={formik.handleSubmit}>
              <div>
                <div className='input-label-wrapper'>
                  <label>Email</label>
                  <Input
                    size='large'
                    prefix={<MailOutlined />}
                    placeholder='Enter your email'
                    {...formik.getFieldProps('email')}
                    status={
                      formik.touched.email && formik.errors.email ? 'error' : ''
                    }
                  />
                </div>

                {formik.touched.email && formik.errors.email ? (
                  <div className='error'>{formik.errors.email}</div>
                ) : null}
              </div>

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
                      formik.touched.password && formik.errors.password
                        ? 'error'
                        : ''
                    }
                  />
                </div>

                {formik.touched.password && formik.errors.password ? (
                  <div className='error'>{formik.errors.password}</div>
                ) : null}
              </div>

              <div className='auth-options'>
                <Checkbox>Remember Me</Checkbox>

                <div className='forgot-password'>
                  <Link to='/forgot-password'>Forgot Password?</Link>
                </div>
              </div>

              <Button type='primary' size='large' htmlType='submit'>
                Log in
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className='login-banner-container'>
        <img src={LogInBanner} alt='Log In Banner' />
      </div>
    </div>
  );
};

