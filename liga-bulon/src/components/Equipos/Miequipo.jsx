import React from 'react';
import ListarJugadores from '../Jugadores/ListarJugadores';
import './Miequipo.css';
import  { useEffect, useState } from 'react';
function MiEquipo({id = 1}) {

  const [equipos, setEquipos] = useState([]);
  
  const getEquipos = async (url) => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setEquipos(response.data);
    
    } catch (error) {
      console.error(error);
    }
  };
  


  useEffect(() => {
    getEquipos('http://localhost:5000/api/equipos/' + id);
}, [id]);



  return (
    <div className='ratata'>
        <h1>Americas CLR</h1>
        <>props del equipo </>
        <div>
          {equipos.nombre}
        </div>
        <ListarJugadores></ListarJugadores>
    </div>
  );
}

export default MiEquipo;