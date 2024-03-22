import { lazy } from "react";

// project imports
import MainLayout from "./../layout/MainLayout/index";
import Loadable from "./../components/loadable/Loadable";

// doctor routing
const Doctor = Loadable(lazy(() => import("./../pages/doctor/DoctorIndex")));
// Patient routing
const Patient = Loadable(lazy(() => import("./../pages/patient/PatientIndex")));
//Page not found
const PageNotFound = Loadable(lazy(() => import("./../pages/PageNotFound")));


// ==============================|| MAIN ROUTING ||============================== //
// returns boolean
const isPatient = (currentUser) => 
{
  return currentUser === 'patient';
}

const isDoctor = (currentUser) => 
{
  // Add your logic to determine if the current user is a doctor
  return currentUser === 'doctor'; // Replace this with your actual logic
};

const MainRoutes = (current_user_role) => 
{
  
  const patientAccess = isPatient(current_user_role);
  const doctorAccess = isDoctor(current_user_role);
   console.log("current user in MainRoutes : ",current_user_role);
  // console.log("patientAccess in MainRoutes : ",patientAccess);
  // console.log("doctorAccess in MainRoutes : ",doctorAccess);

  return {
    path: "/",
    element: <MainLayout key={current_user_role} />,
    children: [
      {
        path: "/", // Leave the path for the main route empty
        element: doctorAccess ? <Doctor /> : patientAccess ? <Patient /> : <PageNotFound/>,
      }
      // {
      //   path: "doctor",
      //   element: doctorAccess ? <Doctor /> : <PageNotFound/> ,
      // },
      // {
      //   path: "patient",
      //   element: patientAccess ? <Patient />: <PageNotFound/> ,
      // },
    ],
  };
};

export default MainRoutes;
