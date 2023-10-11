import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  ResetPasswordScreen
} from '../screens'

export const unauthRoutes = [
  {
    path: '/login',
    element: <LoginScreen />
  },
  {
    path: '/signup',
    element: <RegisterScreen />
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordScreen />
  },
  {
    path: '/reset-password',
    element: <ResetPasswordScreen />
  }
]
