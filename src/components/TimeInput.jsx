import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
function TimeInput() {
  const [time, setTime] = useState('');
  const [isValid, setIsValid] = useState(true);

  // Function to handle changes in the input field
  const handleInputChange = (event) => {
    // Allow any input for now
    setTime(event.target.value);
  };

  // Function to handle validation onBlur
  const handleBlur = () => {
    // Validate input format (HH:MM)
    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    setIsValid(timeRegex.test(time) || time === '');
  };

  return (
    <div>
      {/* Input field for time */}
      
       <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  size="small"
                  value={time}
                  placeholder="Enter time (HH:MM)"
                  sx={{ width: "70%" }}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  style={{ borderColor: isValid ? '' : 'red' }}
                />
      {/* Display error message if input format is incorrect */}
      {!isValid && <span style={{ color: 'red' }}>Please enter a valid time (HH:MM)</span>}
    </div>
  );
}

export default TimeInput;
