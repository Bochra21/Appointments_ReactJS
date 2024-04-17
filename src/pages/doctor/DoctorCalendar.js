import React from "react";
//Project imports
import MyFullCalendar from "../../components/FullCalendar";
import DetailsCard from "../../components/cards/DetailsCard";


const DoctorCalendar = () => {
  return (
    <>
      <DetailsCard
        title={"Mon calendrier"}
        content={<MyFullCalendar />}
      ></DetailsCard>
    </>
  );
};

export default DoctorCalendar;
