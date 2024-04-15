import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export default function MyAccordion(props) {
 
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ backgroundColor: "#f8fafc" }}
        >
          <h4> {props.title}</h4>
        </AccordionSummary>
        <AccordionDetails>
          {/* content : */}
          {props.children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
