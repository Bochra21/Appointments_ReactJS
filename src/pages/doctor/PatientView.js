import * as React from "react";
//Project imports
import ProfileHeader from "../../components/ProfileHeader";
import DetailsCard from "../../components/cards/DetailsCard";
import OpenTimeTable from "../../components/EditOpenTimes";

import { TableCell } from "@mui/material";
import DisplayOpenTimes from "../../components/DisplayOpenTimes";


function PatientView() {
 
  return (
    <>
      <ProfileHeader />

      <DetailsCard title={"Location"}></DetailsCard>
      <DetailsCard title={"Education"}></DetailsCard>
      {/* Open time */}
      <DetailsCard
        title={"Opening Time"}
        content={<DisplayOpenTimes></DisplayOpenTimes>}
      />
    </>
  );
}

export default PatientView;
