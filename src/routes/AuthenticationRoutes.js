import { lazy } from 'react';

// project imports
import Loadable from './../components/loadable/Loadable';
import MinimalLayout from './../layout/MinimalLayout/index';

// login and signup routing
const AuthLogin = Loadable(lazy(() => import('./../pages/auth/loginPage/Login')));
const AuthRegister = Loadable(lazy(() => import('./../pages/auth/signUpPage/SignUp')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

// const AuthenticationRoutes = {
//   path: '/',
//  //element: <AuthRegister />,

//   children: [
//     {
//       path: '/signin',
//       element: <AuthLogin />
//     }
//     // ,{
//     //   path: '/auth/signup',
//     //   element: <AuthRegister />
//     // }
//   ]
// };

const AuthenticationRoutes = {
  path: '/', // or any other base path if needed
  children: [
    {
      path: '', // define as default route
      element: <AuthLogin />
    },
    {
      path: 'signup',
      element: <AuthRegister />
    }
  ]
};

export default AuthenticationRoutes;
