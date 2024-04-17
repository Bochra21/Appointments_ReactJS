import React from "react";
import { Link } from "react-router-dom"; 
import SearchBar from "../../components/searchBar";
import DoctorCard from "../../components/cards/doctorCard";
import AnimateButton from "../../components/buttons/AnimateButton";
import Grid from "@mui/material/Grid";

import { Button } from "@mui/material";
import PatientView from "../doctor/PatientView";

const PatientIndex = () => {
  const specialities = [
    { label: "Dentistry" },
    { label: "Pediatrics" },
    { label: "Orthopedics" },
    { label: "Neurology" },
  ];
  const cities = [
    { label: "Tunis" },
    { label: "Ariana" },
    { label: "Ben Arous" },
    { label: "Manouba" },
    { label: "Nabeul" },
    { label: "Zaghouan" },
    { label: "Bizerte" },
    { label: "Béja" },
    { label: "Jendouba" },
    { label: "Kef" },
    { label: "Siliana" },
    { label: "Kairouan" },
    { label: "Kasserine" },
    { label: "Sidi Bouzid" },
    { label: "Sousse" },
    { label: "Monastir" },
    { label: "Mahdia" },
    { label: "Sfax" },
    { label: "Gafsa" },
    { label: "Tozeur" },
    { label: "Kebili" },
    { label: "Gabès" },
    { label: "Medenine" },
    { label: "Tataouine" },
  ];

  return (
    <div>
      <SearchBar cities={cities} specialities={specialities}></SearchBar>
      <br></br>
      <Grid container spacing={2} justifyContent="center">
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AnimateButton>
            <Button
              disableElevation
              fullWidth
              size="small"
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ width: "30%", m: "7px", pr: "10px" }} // Adjust width and padding as needed
            >
              Search
            </Button>
          </AnimateButton>
        </Grid>
      </Grid>
      <br />
      <Link to="/doctorProfile">
        <DoctorCard />
      </Link>
      {/* just to test : */}
      {/* <PatientView/> */}
    </div>
  );
};

export default PatientIndex;
