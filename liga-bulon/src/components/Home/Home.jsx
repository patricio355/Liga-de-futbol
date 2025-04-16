import React from 'react';
import fotoLogo from './bulon.jpg'
import './Home.css';


function Home() {
  return (
    
        <div className='loco'>
        <h1>BIENVENIDO A LA PAGINA OFICIAL DE LA LIGA DE FUTBOL BULON</h1>
        <img src={fotoLogo} alt="" />

        <h3>Noticias Recientes</h3>
        <img src={fotoLogo} alt="" />
        <h5>Americas gano la liga 2023</h5>
        <a href="/">Ver mas...</a>

    </div>

    
    

  );
}

export default Home;