import { lazy } from 'react';

// project imports
import Loadable from './../components/loadable/Loadable';
import MinimalLayout from './../layout/MinimalLayout/index';

// login and signup routing
const AuthLogin = Loadable(lazy(() => import('./../pages/auth/loginPage/Login')));
const AuthRegister = Loadable(lazy(() => import('./../pages/auth/signUpPage/SignUp')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/Login',
      element: <AuthLogin />
    },
    {
      path: '/Signup',
      element: <AuthRegister />
    }
  ]
};

export default AuthenticationRoutes;
