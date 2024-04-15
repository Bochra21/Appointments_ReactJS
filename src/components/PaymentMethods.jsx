import React from "react";
//mui
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
const PaymentMethods = () => {
  return (
    <div>
      {/* insurance */}
      Payment :    
      <Chip  variant="outlined" sx={{ margin: '3px'}} label="Credit Card"  />
      <Chip  variant="outlined" sx={{ margin: '3px'}} label="Cash"   />
    </div>
  );
};

export default PaymentMethods;
