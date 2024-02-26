//import './App.css';
import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
/////////////////////////////////   Project imports   //////////////////////////
//importing users
import users from "./users"

// defaultTheme
import themes from './themes';

// routes import
import Routes from './routes'

function App() 
{

  // const customization = useSelector((state) => state.customization);
  const usersList = users;
  console.log(usersList);
  // const current_user=users.doctor;
  const current_user=users.patient;
  // const current_user=users.visitor;

  return (
    <>
     <StyledEngineProvider injectFirst>
      {/* <ThemeProvider theme={themes(customization)}> */}
      <ThemeProvider  theme={themes}>
        <CssBaseline />
         {/* Add navbar. inside of it , routes */}
         <Routes current_user={current_user} />
      </ThemeProvider>
      </StyledEngineProvider>
    </>
  );

  
}

export default App;
