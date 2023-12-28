import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar'
import ListarEquipos from './components/Equipos/ListarEquipos';
import ListarFixture from './components/Fixture/ListarFixture';
import ListarJugadores from './components/Jugadores/ListarJugadores';
import {Route,Routes} from 'react-router-dom';
import MiEquipo from './components/Equipos/Miequipo';
import Octogonales from './components/Octogonales/Octogonales';
import ListarCanchas from './components/Canchas/ListarCanchas';
import ListarTablas from './components/Tablas/ListarTablas';
function App() {

  return (
   <div>
     <Navbar></Navbar>

     <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/equipos' element = {<ListarEquipos/>}/>
      <Route path='/fixture' element = {<ListarFixture/>}/>
      <Route path='/mi-equipo' element = {<MiEquipo/>}/>
      <Route path='/jugadores' element = {<ListarJugadores/>}/>
      <Route path='/octogonales' element = {<Octogonales/>}/>
      <Route path='/canchas' element = {<ListarCanchas/>}/>
      <Route path='/tablas' element = {<ListarTablas/>}/>
     </Routes>

   </div>
       
  );
}

export default App;
