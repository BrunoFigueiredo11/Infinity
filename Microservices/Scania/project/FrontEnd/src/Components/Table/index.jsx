import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import api from "../../Services/api";

import "./style.css";
import { useState } from 'react';

const columns = [
  { id: 'cd_edital', label: 'Edital', minWidth: "auto" },
  { id: 'orgao', label: 'Orgão', minWidth: "auto" },
  { id: 'texto', label: 'Descrição', minWidth: "auto" },
  { id: 'dt_acolhimento', label: 'Data de acolhimento', minWidth: "auto" },
  { id: 'dt_disputa', label: 'Data de Disputa', minWidth: "auto" },
  { id: 'tipo', label: 'Status', minWidth: "auto" },
];

export default function StickyHeadTable() {
  const [rows, setRows] = useState([])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  let params = useNavigate()

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDashboardItem = async (item) => {
    params('/dashboard',{ state: item });
  }

  React.useEffect(() => {
    api.get('/licitacao').then((res) => {
      console.log(res.data);
      setRows(res.data)
   })
  },[])
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ borderRadius: "15px" }} >
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell           
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: 900, fontFamily: "'Quicksand', sans-serif" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} style={{ cursor: "pointer" }} onClick={() => handleDashboardItem(row)}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "0.9rem" }}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
