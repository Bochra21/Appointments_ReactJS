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

// dashboard routing
// const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
// const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
// const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
// const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const isDoctor = (currentUser) => 
{
  // Add your logic to determine if the current user is a doctor
  return currentUser === 'doctor'; // Replace this with your actual logic
};

const MainRoutes = (current_user) => 
{

  const doctorAccess = isDoctor(current_user);

  return {
    path: "/main",
    element: <MainLayout />,
    children: [
      // {
      //   path: 'icons',
      //   children: [
      //     {
      //       path: 'material-icons',
      //       element: <UtilsMaterialIcons />
      //     }
      //   ]
      // },
      {
        path: "doctor",
        element: doctorAccess ? <Doctor /> : <PageNotFound/> ,
      },
      {
        path: "patient",
        element: <Patient />,
      },
    ],
  };
};

export default MainRoutes;
