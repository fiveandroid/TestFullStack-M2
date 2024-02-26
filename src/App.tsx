
import './App.css';

//importamos los componentes
import ShowEntrenador from './entrenador/ShowEntrenador';
import CreateEntrenador from './entrenador/CreateEntrenador';
import EditEntrenador from './entrenador/EditEntrenador';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Entrenadores Pokemon
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <ShowEntrenador />} />
            <Route path='/create' element={ <CreateEntrenador />} />
            <Route path='/edit/:id' element={ <EditEntrenador />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;