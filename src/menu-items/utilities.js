import { IconSearch, IconCalendarClock, IconBell } from "@tabler/icons-react";


// Constant for icons
const icons = {
  IconSearch,
  IconCalendarClock,
  IconBell,
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
            title: "My calendar",
            type: "item",
            url: "/utils/util-typography",
            icon: icons.IconSearch,
            breadcrumbs: false,
          },
          {
            id: "util-color",
            title: "Manage appointments",
            type: "item",
            url: "/utils/util-color",
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
            title: "Find doctor",
            type: "item",
            url: "/utils/util-typography",
            icon: icons.IconSearch,
            breadcrumbs: false,
          },
          {
            id: "util-color",
            title: "My appointments",
            type: "item",
            url: "/utils/util-color",
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



