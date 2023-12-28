import React from 'react';
import './Octogonales.css';

function Octogonales() {
  return (
    <div className='bodyes'>
         <h1>Torneo de 16 avos de Final</h1>

<div class="containeres">
 
  <div class="round">
    <h2>Lado Izquierdo</h2>
   
    <p>Equipo 1 vs Equipo 2</p>
    <p>Equipo 3 vs Equipo 4</p>
   
  </div>

  
  <div class="round">
    <h2>Lado Derecho</h2>
   
    <p>Equipo 5 vs Equipo 6</p>
    <p>Equipo 7 vs Equipo 8</p>
    
  </div>

  
  <div class="final">
    <h2>Final</h2>

    <p>Equipo Finalista 1 vs Equipo Finalista 2</p>
  </div>
</div>
    </div>
  );
}

export default Octogonales;