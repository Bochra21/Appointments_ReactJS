import * as React from "react";
// project import
import MainCard from "./../cards/MainCard";
import doctor from './../../assets/users/doctor.jpg';

// material-ui
import { Typography } from "@mui/material";
const DoctorCard = () => {
  return (
    <div>
      <MainCard title="Dr. Foulen" image={doctor} subtitle="Dentist" location="Sousse">
       

        <Typography variant="body2">desc</Typography>
      </MainCard>
    </div>
  );
};

export default DoctorCard;
