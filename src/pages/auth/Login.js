import React from 'react';

import { Card, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';




const Login = () => {
    return (
 <div>
     <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
        <Card sx={{ width: '60%', maxWidth: 600 }}>
     Login <br></br>
     Email
     <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
        </Card>
  </Grid>
</div>
    );
}

export default Login;
