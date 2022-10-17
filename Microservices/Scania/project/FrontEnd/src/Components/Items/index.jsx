import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function Items({ data, mode }) {
    const rows = [
        {
            item: data.item,
            description_item: data.description_item,
            unit: data.unit,
            qnt: data.qnt,
            throw: data.throw,
            reference: data.value,
            situation: data.situation
        }
    ];

  return (
    <TableContainer component={Paper} style={{ borderRadius: "15px", boxShadow: "0 0 0.5em #121212" }} >
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 900, fontFamily: "'Quicksand', sans-serif" }} align="center">Item</TableCell>
            <TableCell style={{ fontWeight: 900, fontFamily: "'Quicksand', sans-serif" }} align="center">Descrição</TableCell>
            <TableCell style={{ fontWeight: 900, fontFamily: "'Quicksand', sans-serif" }} align="center">Unidade</TableCell>
            <TableCell style={{ fontWeight: 900, fontFamily: "'Quicksand', sans-serif" }} align="center">Quantidade</TableCell>
            <TableCell style={{ fontWeight: 900, fontFamily: "'Quicksand', sans-serif" }} align="center">Melhor lançe</TableCell>
            <TableCell style={{ fontWeight: 900, fontFamily: "'Quicksand', sans-serif" }} align="center">V.Referência</TableCell>
            <TableCell style={{ fontWeight: 900, fontFamily: "'Quicksand', sans-serif" }} align="center">Situação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.item}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{ fontFamily: "'Quicksand', sans-serif" }} align="center">{row.item}</TableCell>
              <TableCell style={{ fontFamily: "'Quicksand', sans-serif" }} align="center">{row.description_item}</TableCell>
              <TableCell style={{ fontFamily: "'Quicksand', sans-serif" }} align="center">{row.unit}</TableCell>
              <TableCell style={{ fontFamily: "'Quicksand', sans-serif" }} align="center">{row.qnt}</TableCell>
              <TableCell style={{ fontFamily: "'Quicksand', sans-serif" }} align="center">{row.throw}</TableCell>
              <TableCell style={{ fontFamily: "'Quicksand', sans-serif" }} align="center">{row.reference}</TableCell>
              <TableCell style={{ fontFamily: "'Quicksand', sans-serif" }} align="center">{row.situation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
