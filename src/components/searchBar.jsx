import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";

const SearchBar = (props) => {
  const { specialities, cities } = props;
  return (
    <div>
      <div
        style={{ color: "#71797E", display: "flex", justifyContent: "center" }}
      >
        {" "}
        <h3>Find a doctor</h3>
      </div>
      <div
        style={{
          padding: "17px",
          backgroundColor: "#FCFDFE",
          borderRadius: "14px",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} container alignItems="center">
              <Grid item xs={12} md={11}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Doctor's name"
                  multiline
                  maxRows={4}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={1}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  OR
                </div>
              </Grid>
            </Grid>

            <Grid item xs={12} md={4}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={specialities}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label="Speciality" fullWidth />
                )}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={cities}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label="City" fullWidth />
                )}
              />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default SearchBar;
