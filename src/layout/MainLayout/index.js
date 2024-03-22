import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { isDoctor, isPatient } from "./../../utils/user-functions";
// material-ui
import { styled, useTheme } from "@mui/material/styles";
import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  useMediaQuery,
} from "@mui/material";

// project imports
import Breadcrumbs from "./../../components/Breadcrumbs";
import Header from "./Header";
import Sidebar from "./Sidebar";
// import Customization from '../Customization';
//import nav from "./../../menu-items";
import { docUtilities, patUtilities } from './../../menu-items/utilities';
import { drawerWidth } from "./../../store/constant";
import { SET_MENU } from "./../../store/actions";

// assets
import { IconChevronRight } from "@tabler/icons-react";

// styles
const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "theme",
})(({ theme, open }) => ({
  ...theme.typography.mainContent,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  transition: theme.transitions.create(
    "margin",
    open
      ? {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }
      : {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }
  ),
  [theme.breakpoints.up("md")]: {
    marginLeft: open ? 0 : -(drawerWidth - 20),
    width: `calc(100% - ${drawerWidth}px)`,
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "20px",
    width: `calc(100% - ${drawerWidth}px)`,
    padding: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "10px",
    width: `calc(100% - ${drawerWidth}px)`,
    padding: "16px",
    marginRight: "10px",
  },
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  // Dynamic import of menu-items :

  const nav = useSelector((state) => {
    const userType = state.userReducer.role;
    if (isDoctor(userType)) {
      console.log("Sidebar alert : It is a Doctot");
      const docUtility = [docUtilities] ;
      console.log("docUtility : ",docUtility);
      return [docUtility]; // Import docUtilities if user is a doctor
    } else if (isPatient(userType)) { 
      console.log("Sidebar alert : It is a Patient"); //S7I7A
      const patUtility = [patUtilities] //s7i7a
      console.log("patUtility : ",patUtility);
      return patUtility; 
      // Import patUtilities if user is a patient
    } else {
      console.log("Sidebar returning an empty array , user's role is not defined or invalid")
      return []; // Return empty array if user's role is not defined or invalid
    }
  });
  // Get current user
  // const userType = useSelector((state)=> state.userReducer.role )
  // //
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
  // Handle left drawer
  const leftDrawerOpened = useSelector((state) => state.customization.opened);
  console.log("leftDrawerOpened : ", leftDrawerOpened);
  const dispatch = useDispatch();
  const handleLeftDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          transition: leftDrawerOpened
            ? theme.transitions.create("width")
            : "none",
        }}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Sidebar
        nav={nav}
        drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened}
        drawerToggle={handleLeftDrawerToggle}
      />

      {/* main content */}
      <Main theme={theme} open={leftDrawerOpened}>
        {/* breadcrumb */}
        {console.log("nav content in the index of Sidebar",nav)}
        {/* <Breadcrumbs
          separator={IconChevronRight}
        //  nav={nav}
          icon
          title
          rightAlign
        /> */}
        <Outlet />
      </Main>
      {/* <Customization /> */}
    </Box>
  );
};

export default MainLayout;
