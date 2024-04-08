import React from 'react';
import Button from '@mui/material/Button';
import {logoutUser} from './../../utils/auth-functions';
import { useDispatch } from "react-redux" ;

const OutlinedButton = (props) => {
   
  const dispatch = useDispatch();
  
    const logoutUserFun = ()=> {
        dispatch(logoutUser());
    } ;

    return (

        <div>   
            <Button variant="outlined" onClick={logoutUserFun}  sx={{  color: '#808080'}} >
                {props.title}
            </Button>
        </div>
    );
}


export default OutlinedButton;

