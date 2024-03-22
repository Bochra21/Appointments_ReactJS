import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() 
{
 
  const current_user_role = useSelector((state)=>state.userReducer.role);
  const authState = useSelector((state) => state.userReducer.authState);
  // console.log("Hello, you're in ThemeRoutes function ");
   console.log("this is current_user in theme routes : ",current_user_role);
   console.log("this is authState in theme routes : ",authState);
  const routes = authState? [MainRoutes(current_user_role)] : [AuthenticationRoutes] ;
  return useRoutes(routes);
}
