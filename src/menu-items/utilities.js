import { IconSearch,IconUserCircle, IconCalendarClock, IconBell } from "@tabler/icons-react";


// Constant for icons
const icons = {
  IconSearch,
  IconCalendarClock,
  IconBell,
  IconUserCircle
};

// Determine utilities based on user role


  // Define utilities based on user role
  export const docUtilities = {
    id: "utilities1",
    title: "",
    type: "group",
    children: 
       [
        {
          id: "util-typography",
          title: "Mon profil",
          type: "item",
          url: "/",
          icon: icons.IconUserCircle,
          breadcrumbs: false,
        },
          {
            id: "util-typography2",
            title: "Mon calendrier",
            type: "item",
            url: "/doctorCalendar",
            icon: icons.IconSearch,
            breadcrumbs: false,
          },
          {
            id: "util-color",
            title: "Mes rendez-vous",
            type: "item",
            url: "/DoctorAppointments",
            icon: icons.IconCalendarClock,
            breadcrumbs: false,
          },
          {
            id: "util-shadow",
            title: "Alerts",
            type: "item",
            url: "/utils/util-shadow",
            icon: icons.IconBell,
            breadcrumbs: false,
          },
        ]
     
  };

  export const patUtilities = {
    id: "utilities",
    title: "",
    type: "group",
    children: 
       [
          {
            id: "util-typography",
            title: "Recherche",
            type: "item",
            url: "/",
            icon: icons.IconSearch,
            breadcrumbs: false,
          },
          {
            id: "util-color",
            title: "Mes rendez-vous",
            type: "item",
            url: "/PatientAppointments",
            icon: icons.IconCalendarClock,
            breadcrumbs: false,
          },
          {
            id: "util-shadow",
            title: "Alertes",
            type: "item",
            url: "/",
            icon: icons.IconBell,
            breadcrumbs: false,
          },
        ]
     
  };



