import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./ListarJugadores.css";
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

export default function CustomizedTables() {

  const [jugadores, setJugadores] = useState([]);
  
  const getEquipos = async (url) => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setJugadores(response.jugadores.map(jugador => jugador));
    
    } catch (error) {
      console.error(error);
    }
  };
  


  useEffect(() => {
    getEquipos('http://localhost:5000/api/jugadores/');
  }, []);







  return (
    
    <div className='jiji'>
        <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="right">Foto</StyledTableCell>
            <StyledTableCell align="right">Nombre</StyledTableCell>
            <StyledTableCell align="right">Edad</StyledTableCell>
            <StyledTableCell align="right">Posicion</StyledTableCell>
            <StyledTableCell align="right">Goles</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {jugadores.map((jugador) => (
            <StyledTableRow key={jugador.id}>
             
              <StyledTableCell align="right">{jugador.image}</StyledTableCell>
              <StyledTableCell align="right">{jugador.apellido}, {jugador.nombre}</StyledTableCell>
              <StyledTableCell align="right">{jugador.edad}</StyledTableCell>
              <StyledTableCell align="right">{jugador.posicion}</StyledTableCell>
              <StyledTableCell align="right">{jugador.goles}</StyledTableCell>
              
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      
    
    </TableContainer>
        </div>

        <div className="dete">
          <h1>DT: Roberto Vargas</h1>
      </div>
    </div>
    
  );
}
