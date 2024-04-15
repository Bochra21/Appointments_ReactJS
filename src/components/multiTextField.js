import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { MuiTelInput } from "mui-tel-input";
import AnimateButton from './buttons/AnimateButton';

const MultiTextFieldForm = ({ buttonTitle = "Add" , children}) => {
  const [myValues, setMyValues] = useState(['']);

  const handleAdd = () => {
    const newTextFields = [...myValues, ''];
    setMyValues(newTextFields);
  };

  const handleChange = (index, newValue) => {
    const newTextFields = [...myValues];
    newTextFields[index] = newValue;
    setMyValues(newTextFields);
  };

  return (
    <div>
      {myValues.map((value, index) => (
        React.cloneElement(children, {
          key: index,
          sx: { width: "70%", marginTop: "10px" },
          value: value,
          onChange: (newValue) => handleChange(index, newValue),
        })
      ))}
     
      <AnimateButton onClick={handleAdd} style={{ margin: "10px" }}>
        <Button onClick={handleAdd}>
          {buttonTitle}
        </Button>
      </AnimateButton>
    </div>
  );
};
export default MultiTextFieldForm;
