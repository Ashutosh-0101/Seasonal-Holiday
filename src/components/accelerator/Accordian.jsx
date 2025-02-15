import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionExpandDefault() {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={
          {
           ".MuiAccordionSummary-expandIconWrapper":{
            width:"1.5rem",
            height:"1.5rem",
           },
            ".MuiAccordionSummary-content":{
                margin:"2.25rem"
            }
          }
          }
        >
          <Typography>Expanded by default</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
         sx={
            {
             ".MuiAccordionSummary-expandIconWrapper":{
              width:"1.5rem",
              height:"1.5rem",
              
             },
             ".MuiAccordionSummary-content":{
                margin:"2.25rem",
                borderRadius:"0.625rem"
            },
            ".MuiPaper-root-MuiAccordion-root:last-of-type": {
               borderBottomLeftRadius:"35px",
                borderBottomRightRadius: "35px"
            }
            
            }
            }
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Header</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}










// import React from "react";
// import { useState } from "react";
// import {
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";
 
// function Icon({ id, open }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={2}
//       stroke="currentColor"
//       className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//     </svg>
//   );
// }
 
// const  AccordionCustomIcon = () => {
//   const [open,setOpen]=useState(0);
//   const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
//   return (
//     <>
//       <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
//         <AccordionHeader onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
//         <AccordionBody>
//           We&apos;re not always in the position that we want to be at. We&apos;re constantly
//           growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
//           ourselves and actualize our dreams.
//         </AccordionBody>
//       </Accordion>
//       <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
//         <AccordionHeader onClick={() => handleOpen(2)}>
//           How to use Material Tailwind?
//         </AccordionHeader>
//         <AccordionBody>
//           We&apos;re not always in the position that we want to be at. We&apos;re constantly
//           growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
//           ourselves and actualize our dreams.
//         </AccordionBody>
//       </Accordion>
//       <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
//         <AccordionHeader onClick={() => handleOpen(3)}>
//           What can I do with Material Tailwind?
//         </AccordionHeader>
//         <AccordionBody>
//           We&apos;re not always in the position that we want to be at. We&apos;re constantly
//           growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
//           ourselves and actualize our dreams.
//         </AccordionBody>
//       </Accordion>
//     </>
//   );
// }

// export default AccordionCustomIcon