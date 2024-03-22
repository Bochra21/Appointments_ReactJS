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
 element: <AuthLogin />,

  children: [
    {
      path: '/signin',
      element: <AuthLogin />
    }
    // ,{
    //   path: '/auth/signup',
    //   element: <AuthRegister />
    // }
  ]
};

export default AuthenticationRoutes;
