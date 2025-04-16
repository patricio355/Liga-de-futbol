import React from 'react';
import './ListarCanchas.css';
import { useEffect, useState } from 'react';
import CrearCancha from './CrearCancha';
function ListarCanchas() {

  const [canchas, setCanchas] = useState([]);

  const getCanchas = async (url) => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setCanchas(response.canchas.map(cancha => cancha));
      
    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {
    getCanchas('http://localhost:5000/api/canchas/');
  }, []);







  return (

    <div className='paco'>
      {canchas.map((cancha) => (
        <div key={cancha.id} className='cardCancha'>
          <div className='imagenCancha'>
            {/* Aquí puedes colocar la lógica para mostrar la imagen de la cancha */}
            <img src="https://media.jujuyalmomento.com/p/8b1672b19e8614c0bd61cc450a9c68a4/adjuntos/260/imagenes/002/137/0002137262/1200x0/smart/estadio-23-agosto-gimnasia-jujuy-vista-sur-nortejpg.jpg" alt="" />
          </div>
          <div className='descripcionCancha'>
            <h1>{cancha.nombre}</h1>

            <p>{cancha.lugar}</p>
            <p>{cancha.detalle}</p>
            <a href={cancha.ubicacion} target='_blank'>Como llegar?</a>
            {/* Mostrar más información o detalles si es necesario */}
          </div>
        </div>
      ))}
        <CrearCancha></CrearCancha>
</div>


  );
}

export default ListarCanchas;