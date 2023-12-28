import React from 'react';
import './ListarFixture.css';
import { useEffect, useState } from 'react';
function ListarEquipos() {


  const [partidos, setPartidos] = useState([]);

  const getPartidos = async (url) => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setPartidos(response.partidos.map(partido => partido));

    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {
    getPartidos('http://localhost:5000/api/partidos/');
  }, []);



  return (
    <div>


<h1>Programacion Sabado 23</h1>
{partidos.map((partido) => (
  <div key={partido.id} className='container'>
    
    
    <div className='aca'>
      <div className="container">
        <div className="team">
          <h4>{partido.equipo1}</h4>
        </div>

        <div className="result">
          <h4>{partido.resultado}</h4>
          <h6>{partido.penales}</h6>
        </div>

        <div className="team">
          <h4>{partido.equipo2}</h4>
        </div>

        <div className="cancha">
          <h4>{partido.cancha}</h4>
        </div>

        <h6><a href="/">Ver Planilla</a></h6>
      </div>
    </div>
  </div>
))}

</div>



  )
}

export default ListarEquipos;