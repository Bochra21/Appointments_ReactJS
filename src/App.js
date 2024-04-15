import React, { useEffect } from "react" ;
import { useSelector, useDispatch } from "react-redux" ;
import { ThemeProvider } from "@mui/material/styles" ;
import { CssBaseline, StyledEngineProvider } from "@mui/material" ;
import { PersistGate } from 'redux-persist/integration/react' ;
import { persistor } from './store/index'; 
import themes from "./themes";
import Routes from "./routes";


import {
  logoutUser,
  setDoctor,
  setPatient,
} from "./utils/auth-functions";

function App() {
  const customization = useSelector((state) => state.customization);

  const dispatch = useDispatch();

   useEffect(() => {
  //   // Authenticate the user
  //  
  //   // change user role to doctor
dispatch(setDoctor());
  //   // change user role to patient
  //dispatch(setPatient());
  //dispatch(logoutUser());
   }, [dispatch]);

  // Use useReducer hook to manage state with userReducer
  //dispatch(logoutUser());
  const authState = useSelector((state) => state.userReducer.authState);
  const current_user = useSelector((state) => state.userReducer.role);
 
  return (
    <>
      <PersistGate loading={null} persistor={persistor}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={themes(customization)}>
            <CssBaseline />
            <Routes current_user_role={current_user} authState={authState} />
          </ThemeProvider>
        </StyledEngineProvider>
      </PersistGate>
    </>
  );
}

export default App;
