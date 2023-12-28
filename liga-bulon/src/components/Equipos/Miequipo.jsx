import React from 'react';
import ListarJugadores from '../Jugadores/ListarJugadores';
import './Miequipo.css';

function MiEquipo() {
  return (
    <div className='ratata'>
        <h1>Americas CLR</h1>
        <ListarJugadores></ListarJugadores>
    </div>
  );
}

export default MiEquipo;