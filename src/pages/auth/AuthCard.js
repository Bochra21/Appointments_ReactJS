import React from 'react';
import {Paper} from "@mui/material";

const AuthCard = ({children}) => 
{
    const paperStyle = 
    {
        padding: 20,
        marginTop:30,
        height: "70vh",
        width: "300px",
    };

    return (

        <div>
               <Paper elevation={3} style={paperStyle}>
               {children}
               </Paper>
        </div>
    );
}

export default AuthCard;
