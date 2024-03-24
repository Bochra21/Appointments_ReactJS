import {  useSelector } from "react-redux";
// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import menuItem from './../../../../menu-items';
import { docUtilities, patUtilities } from './../../../../menu-items/utilities';
import { isDoctor, isPatient } from "./../../../../utils/user-functions";
// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {

  const FilteredMenuItem = useSelector((state) => {
    const userType = state.userReducer.role;
    if (isDoctor(userType)) {
      console.log("Sidebar alert : It is a Doctot");
      const docUtility = [docUtilities] ;
      console.log("docUtility : ",docUtility);
      return docUtility; // Import docUtilities if user is a doctor
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


  const navItems = FilteredMenuItem.map((item) => {
  switch (item.type) {
    case 'group':
      return <NavGroup key={item.id} item={item} />;
    default:
      return (
        <Typography key={item.id} variant="h6" color="error" align="center">
          Menu Items Error
        </Typography>
      );
  }
});


  // console.log("From the index of menu list :");
  // console.log("*****************************");
  // console.log("doctor : ",menuItem.items[0]);
  // console.log("FilteredMenuItem",FilteredMenuItem);


   return <>{navItems}</>;
};

export default MenuList;