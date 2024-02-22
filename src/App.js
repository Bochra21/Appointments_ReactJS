//import './App.css';
import React from "react";
import Login from "./pages/auth/loginPage/Login";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// defaultTheme
import themes from './themes';

function App() {

  // const customization = useSelector((state) => state.customization);

  return (
    <>
     <StyledEngineProvider injectFirst>
      {/* <ThemeProvider theme={themes(customization)}> */}
      <ThemeProvider  theme={themes}>
        <CssBaseline />
      <Login/>
      </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
