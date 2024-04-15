import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(day, start1, end1, start2, end2) {
  return { day, start1, end1, start2, end2 };
}

const rows = [
    createData('Monday', '08:00', '13:00', '14:00', '18:00'),
    createData('Tuesday', '08:00', '13:00', '14:00', '18:00'),
    createData('Wednesday', '08:00', '13:00', '14:00', '18:00'),
    createData('Thursday', '08:00', '13:00', '14:00', '18:00'),
    createData('Friday', '08:00', '13:00', '14:00', '18:00'),
   
  ];

export default function OpenTimeTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b> Day</b></TableCell>
            <TableCell align="right"><b>Start</b> </TableCell>
            <TableCell align="right"><b>End</b> </TableCell>
            <TableCell align="right"><b>Start</b> </TableCell>
            <TableCell align="right"><b>End</b> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.day}
              </TableCell>
          
              <TableCell align="right">{row.start1}</TableCell>
              <TableCell align="right">{row.end1}</TableCell>
              <TableCell align="right">{row.start2}</TableCell>
              <TableCell align="right">{row.end2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}