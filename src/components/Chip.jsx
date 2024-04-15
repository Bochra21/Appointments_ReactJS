import React from "react";
//mui
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
const AssuranceChip = () => {
  return (
    <div>
      {/* insurance */}
      Insurance(s) :    
      <Chip  sx={{ margin: '5x'}} label="Carte" avatar={<Avatar src="/static/images/avatar/1.jpg" />} />
      <Chip  sx={{ margin: '5px'}} label="Cnam" avatar={<Avatar src="/static/images/avatar/1.jpg" />} />
    </div>
  );
};

export default AssuranceChip;
