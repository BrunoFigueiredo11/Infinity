import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import api from '../../Services/api';
import { useEffect } from 'react';

export default function Items({ data }) {
  const [ rows, setRows ] = useState([])

  
  useEffect(() => {
    api.get(`/item/${data.cd_licitacao}`).then((response) => {
      console.log(response.data)
      setRows(response.data)
    })
  })
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
              <TableCell style={{ fontFamily: "'Quicksand', sans-serif" }} align="center">{row.ident}</TableCell>
              <TableCell style={{ fontFamily: "'Quicksand', sans-serif" }} align="center">{row.descricao}</TableCell>
              <TableCell style={{ fontFamily: "'Quicksand', sans-serif" }} align="center">{row.unidade}</TableCell>
              <TableCell style={{ fontFamily: "'Quicksand', sans-serif" }} align="center">{row.quantidade}</TableCell>
              <TableCell style={{ fontFamily: "'Quicksand', sans-serif" }} align="center">{row.melhor_lance}</TableCell>
              <TableCell style={{ fontFamily: "'Quicksand', sans-serif" }} align="center">{row.valor_ref}</TableCell>
              <TableCell style={{ fontFamily: "'Quicksand', sans-serif" }} align="center">{row.situacao}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
