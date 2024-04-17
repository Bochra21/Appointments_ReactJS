import React from "react";
import MyAccordion from "../../components/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { MuiTelInput } from "mui-tel-input";
import CountrySelect from "../../components/CountrySelect";
import MultiTextFieldForm from "../../components/multiTextField";
import AnimateButton from "../../components/buttons/AnimateButton";
import EditOpenTimes from "../../components/EditOpenTimes";
// import OpenTimeTable from "../../components/EditOpenTimes";
// import { TableCell } from "@mui/material";

const DoctorProfile = () => {
  const specialities = [
    { label: "Dentistry" },
    { label: "Pediatrics" },
    { label: "Orthopedics" },
    { label: "Neurology" },
  ];
  const [value, setValue] = React.useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div
        style={{
          "@media only screen and (min-width: 1024px)": {
            margin: "0 auto",
            width: "70%",
          },
          "@media only screen and (max-width: 375px)": {
            width: "100%", // Adjusted width for responsiveness
          },
        }}
      >
        {/* Accordion 1 */}
        <MyAccordion title={"Informations Personnelles"}>
          <Box>
            <Grid container spacing={2} sx={{ marginTop: "3px" }}>
              <Grid sx={{ width: "30%", margin: "10px" }} item xs={12} md={4}>
                Nom et Prénom
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  size="small"
                  placeholder="Foulen Ben Foulen"
                  sx={{ width: "70%" }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ marginTop: "3px" }}>
              <Grid sx={{ width: "30%", margin: "10px" }} item xs={12} md={4}>
                Téléphone(s)
              </Grid>
              <Grid item xs={12} md={6}>
                <MultiTextFieldForm
                  buttonTitle={"Ajouter un numéro de téléphone "}
                >
                  <MuiTelInput />
                </MultiTextFieldForm>
                {/* <MultiTextFieldForm addButtonLabel={"Ajouter un numéro de téléphone"} textFieldLabel={"Numéro de téléphone"} /> */}
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ marginTop: "3px" }}>
              <Grid sx={{ width: "30%", margin: "10px" }} item xs={12} md={4}>
                Pays
              </Grid>
              <Grid item xs={12} md={6}>
                <CountrySelect></CountrySelect>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginTop: "3px" }}>
              <Grid sx={{ width: "30%", margin: "10px" }} item xs={12} md={4}>
                Ville
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  size="small"
                  placeholder="Ville"
                  sx={{ width: "70%" }}
                />
              </Grid>
            </Grid>

            {/* location */}
            <Grid container spacing={2} sx={{ marginTop: "3px" }}>
              <Grid sx={{ width: "30%", margin: "10px" }} item xs={12} md={4}>
                Adresse
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="filled-hidden-label-small"
                  defaultValue=" "
                  size="small"
                  placeholder="L'adresse de votre cabinet"
                  sx={{ width: "70%" }}
                />
              </Grid>
            </Grid>

            <AnimateButton>
              <Button
                size="small"
                type="submit"
                variant="contained"
                color="secondary"
              >
                Save
              </Button>
            </AnimateButton>
          </Box>
        </MyAccordion>

        {/* Accordion 2 */}
        <MyAccordion title={"Informations professionnelles"}>
          <Box>
            <Grid container spacing={2} sx={{ marginTop: "3px" }}>
              <Grid sx={{ width: "30%", margin: "10px" }} item xs={12} md={4}>
                Spécialité
              </Grid>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  id="tags-filled"
                  options={specialities.map((option) => option.label)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      id="filled-hidden-label-small"
                      defaultValue=" "
                      size="small"
                      placeholder="Spécialité"
                      sx={{ width: "70%" }}
                    />
                  )}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ marginTop: "3px" }}>
              <Grid sx={{ width: "30%", margin: "10px" }} item xs={12} md={4}>
                Éducation
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  hiddenLabel
                  multiline
                  id="filled-hidden-label-small"
                  size="small"
                  placeholder="Dites-nous où avez-vous étudié, quand et d'où avez-vous obtenu votre diplôme"
                  sx={{ width: "70%" }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ marginTop: "3px" }}>
              <Grid sx={{ width: "30%", margin: "10px" }} item xs={12} md={4}>
                Assurance(s)
              </Grid>
              <Grid item xs={12} md={6}>
                <MultiTextFieldForm buttonTitle={"Ajouter une assurance "}>
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    size="small"
                    placeholder="Nom de l'assurance"
                    sx={{ width: "70%" }}
                  />
                </MultiTextFieldForm>
              </Grid>
            </Grid>
            <br></br>

            <Grid container spacing={2} sx={{ marginTop: "3px" }}>
              <Grid sx={{ width: "30%", margin: "10px" }} item xs={12} md={4}>
                Horaires d'ouverture
              </Grid>
              <Grid item xs={12} md={6}>
                {/* open time table */}
                <EditOpenTimes></EditOpenTimes>
              </Grid>
            </Grid>
          </Box>
        </MyAccordion>
      </div>
    </>
  );
};

export default DoctorProfile;
