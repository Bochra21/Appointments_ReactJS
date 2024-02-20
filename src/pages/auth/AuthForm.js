import React from "react";
import { Button, TextField, Grid, Link } from "@mui/material";
import AuthCard from './AuthCard';

const AuthForm = () => {
 
  const marginStyle={
    margin :5
  }

  return (
    <div>
      <Grid align="center">
     <AuthCard>
          {/* <Avatar Style={avatarStyle}> </Avatar> */}
          <h2>Log In</h2>
          <TextField style={marginStyle}
            label="Email"
            placeholder="Foulen@gmail.com"
            fullWidth
            required
          />
          <br></br>
          <TextField style={marginStyle}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          required
          fullWidth
        />
         
          <Button type="submit" variant="contained" fullWidth size='medium' style={marginStyle}>
            Sign in
          </Button>
          <br></br>
          <Link href="#" underline="always">
            {"I don't have an account"}
          </Link>

        </AuthCard>
      </Grid>
    </div>
  );
};

export default AuthForm;
