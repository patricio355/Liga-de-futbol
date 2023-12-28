import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './ListarEquipos.css';
import  { useEffect, useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(escudo , name, calories, fat, carbs, protein) {
  return { escudo , name, calories, fat, carbs, protein };
}

const rows = [
  createData('escudo','Americas ', 159, 6.0, 24, 4.0),
  createData('escudo','Lobo jrs', 237, 9.0, 37, 4.3),
  createData('escudo','Santa rosa', 262, 16.0, 24, 6.0),
  createData('escudo','Gols', 305, 3.7, 67, 4.3),
  createData('escudo','Liverppool', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables()
{

  const [equipos, setEquipos] = useState([]);
  
  const getEquipos = async (url) => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setEquipos(response.equipos.map(equipo => equipo));
    
    } catch (error) {
      console.error(error);
    }
  };
  


  useEffect(() => {
    getEquipos('http://localhost:5000/api/equipos/');
  }, []);


















  return (
    <div className='azzul'>
        <h1>Division A
        </h1>
        <h1> Div b</h1>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="right">Escudo</StyledTableCell>
            <StyledTableCell align="right">Nombre</StyledTableCell>
            <StyledTableCell align="right">Division</StyledTableCell>
           
            <StyledTableCell align="right">Camisetas color</StyledTableCell>
            <StyledTableCell align="right">Más</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {equipos.map((equipo) => (
            <StyledTableRow key={equipo.id}>
             
              <StyledTableCell align="right">{equipo.escudo}</StyledTableCell>
              <StyledTableCell align="right">{equipo.nombre}</StyledTableCell>
             
              <StyledTableCell align="right">{equipo.division}</StyledTableCell>
            
              <StyledTableCell align="right">{equipo.color}</StyledTableCell>
              <StyledTableCell align="right">{equipo.lugar}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  
    </div>
    
  );
}
