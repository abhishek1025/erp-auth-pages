export type LoginFormType = {
  email: string;
  password: string;
};

export type PasswordResetRequestFormType = {
  email: string;
};

export type ResetPasswordFormType = {
  password: string;
  confirmPassword: string;
};

export type ResetPasswordCodeFormType = {
  otp: string;
};

