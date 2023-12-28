import React from 'react';
import './ListarCanchas.css';
import { useEffect, useState } from 'react';
function ListarCanchas() {
  const [sad, setSad] = useState("hola");



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



  const handleInputChange = (event) => {
    setSad(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías hacer algo con el valor de 'sad' al enviar el formulario
    console.log("Valor de sad:", sad);
  };



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


<form onSubmit={handleSubmit}>
      <p>{sad}</p>
      <label htmlFor="sad">Cambiar</label>
      <input
        type="text"
        id="sad"
        name="sad"
        value={sad}
        onChange={handleInputChange}
      />
      <button type='submit'>Guardar</button>
    </form>
    </div>






  );
}

export default ListarCanchas;