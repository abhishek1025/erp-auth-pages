import * as Yup from 'yup';

export const PasswordResetSchema = Yup.object({
  email: Yup.string().email().required('Email is required'),
});

export const NewPasswordSchema = Yup.object({
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),

  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});

export const OtpSchema = Yup.object({
  otp: Yup.string()
    .length(4, 'OTP must be 4 digits')
    .required('Verification Code is required'),
});

export const LoginSchema = Yup.object({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().required('Password is required'),
});
