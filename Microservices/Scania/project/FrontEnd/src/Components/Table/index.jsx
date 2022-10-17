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

import "./style.css";

const columns = [
  { id: 'edital', label: 'Edital', minWidth: "auto" },
  { id: 'organ', label: 'Orgão', minWidth: "auto" },
  { id: 'description', label: 'Descrição', minWidth: "auto" },
  { id: 'date_reception', label: 'Data de acolhimento', minWidth: "auto" },
  { id: 'date_dispute', label: 'Data de Disputa', minWidth: "auto" },
  { id: 'status', label: 'Status', minWidth: "auto" },
];

const rows = [
  {
    edital: 123,
    organ: "Orgão ABC",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloremque similique quae inventore itaque explicabo soluta velit, maiores non optio dignissimos? Distinctio numquam aspernatur reiciendis eius odit voluptatem repudiandae non.",
    date_reception: "25/08/2022 às 15:40:24",
    date_dispute: "25/09/2022 às 16:00:00",
    status: "S",
    link: "www.google.com.br",
    value: "10.000,00",
    item: 1,
    description_item: 'Lorem ipsum dolor',
    unit: 'UND',
    qnt: 1,
    throw: '-',
    situation: 'Recebendo propostas'
  },
  {
    edital: 123,
    organ: "Orgão ABC",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloremque similique quae inventore itaque explicabo soluta velit, maiores non optio dignissimos? Distinctio numquam aspernatur reiciendis eius odit voluptatem repudiandae non.",
    date_reception: "25/08/2022 às 15:40:24",
    date_dispute: "25/09/2022 às 16:00:00",
    status: "S",
    link: "www.google.com.br",
    value: "10.000,00",
    item: 1,
    description_item: 'Lorem ipsum dolor',
    unit: 'UND',
    qnt: 1,
    throw: '-',
    situation: 'Recebendo propostas'
  },
  {
    edital: 123,
    organ: "Orgão ABC",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloremque similique quae inventore itaque explicabo soluta velit, maiores non optio dignissimos? Distinctio numquam aspernatur reiciendis eius odit voluptatem repudiandae non.",
    date_reception: "25/08/2022 às 15:40:24",
    date_dispute: "25/09/2022 às 16:00:00",
    status: "S",
    link: "www.google.com.br",
    value: "10.000,00",
    item: 1,
    description_item: 'Lorem ipsum dolor',
    unit: 'UND',
    qnt: 1,
    throw: '-',
    situation: 'Recebendo propostas'
  },
  {
    edital: 123,
    organ: "Orgão ABC",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloremque similique quae inventore itaque explicabo soluta velit, maiores non optio dignissimos? Distinctio numquam aspernatur reiciendis eius odit voluptatem repudiandae non.",
    date_reception: "25/08/2022 às 15:40:24",
    date_dispute: "25/09/2022 às 16:00:00",
    status: "S",
    link: "www.google.com.br",
    value: "10.000,00",
    item: 1,
    description_item: 'Lorem ipsum dolor',
    unit: 'UND',
    qnt: 1,
    throw: '-',
    situation: 'Recebendo propostas'
  },
  {
    edital: 123,
    organ: "Orgão ABC",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloremque similique quae inventore itaque explicabo soluta velit, maiores non optio dignissimos? Distinctio numquam aspernatur reiciendis eius odit voluptatem repudiandae non.",
    date_reception: "25/08/2022 às 15:40:24",
    date_dispute: "25/09/2022 às 16:00:00",
    status: "S",
    link: "www.google.com.br",
    value: "10.000,00",
    item: 1,
    description_item: 'Lorem ipsum dolor',
    unit: 'UND',
    qnt: 1,
    throw: '-',
    situation: 'Recebendo propostas'
  },
  {
    edital: 123,
    organ: "Orgão ABC",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloremque similique quae inventore itaque explicabo soluta velit, maiores non optio dignissimos? Distinctio numquam aspernatur reiciendis eius odit voluptatem repudiandae non.",
    date_reception: "25/08/2022 às 15:40:24",
    date_dispute: "25/09/2022 às 16:00:00",
    status: "S",
    link: "www.google.com.br",
    value: "10.000,00",
    item: 1,
    description_item: 'Lorem ipsum dolor',
    unit: 'UND',
    qnt: 1,
    throw: '-',
    situation: 'Recebendo propostas'
  },
  {
    edital: 123,
    organ: "Orgão ABC",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloremque similique quae inventore itaque explicabo soluta velit, maiores non optio dignissimos? Distinctio numquam aspernatur reiciendis eius odit voluptatem repudiandae non.",
    date_reception: "25/08/2022 às 15:40:24",
    date_dispute: "25/09/2022 às 16:00:00",
    status: "S",
    link: "www.google.com.br",
    value: "10.000,00",
    item: 1,
    description_item: 'Lorem ipsum dolor',
    unit: 'UND',
    qnt: 1,
    throw: '-',
    situation: 'Recebendo propostas'
  },
  {
    edital: 123,
    organ: "Orgão ABC",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloremque similique quae inventore itaque explicabo soluta velit, maiores non optio dignissimos? Distinctio numquam aspernatur reiciendis eius odit voluptatem repudiandae non.",
    date_reception: "25/08/2022 às 15:40:24",
    date_dispute: "25/09/2022 às 16:00:00",
    status: "S",
    link: "www.google.com.br",
    value: "10.000,00",
    item: 1,
    description_item: 'Lorem ipsum dolor',
    unit: 'UND',
    qnt: 1,
    throw: '-',
    situation: 'Recebendo propostas'
  },
  {
    edital: 123,
    organ: "Orgão ABC",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloremque similique quae inventore itaque explicabo soluta velit, maiores non optio dignissimos? Distinctio numquam aspernatur reiciendis eius odit voluptatem repudiandae non.",
    date_reception: "25/08/2022 às 15:40:24",
    date_dispute: "25/09/2022 às 16:00:00",
    status: "S",
    link: "www.google.com.br",
    value: "10.000,00",
    item: 1,
    description_item: 'Lorem ipsum dolor',
    unit: 'UND',
    qnt: 1,
    throw: '-',
    situation: 'Recebendo propostas'
  },
];

export default function StickyHeadTable({ mode }) {
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
    params('/dashboard',{ state: item, mode });
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }} style={{ borderRadius: "15px" }} className={mode === "dark" ? "table-dark" : "table-sure"} >
      <TableContainer sx={{ maxHeight: 380 }} className={mode === "dark" ? "table-dark" : "table-sure"}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className={mode === "dark" ? "table-dark" : "table-sure"}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  className={mode === "dark" ? "table-dark" : "table-sure"}
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
