import * as React from "react";
//Project imports
import ProfileHeader from "../../components/ProfileHeader";
import DetailsCard from "../../components/cards/DetailsCard";
import OpenTimeTable from "../../components/OpenTimeTable";
import Calendar from "../../components/Calendar";


function PatientView() {
  return (
    <>
      <ProfileHeader />
     
      <DetailsCard title={"Location"}></DetailsCard>
      <DetailsCard title={"Education"}></DetailsCard>
      {/* Open time */}
      <DetailsCard
        title={"Opening Time"}
        content={<OpenTimeTable />}
      ></DetailsCard>
      <DetailsCard title={"Schedual Appointment"} content={<Calendar />}>
        {" "}
      </DetailsCard>
    </>
  );
}

export default PatientView;
