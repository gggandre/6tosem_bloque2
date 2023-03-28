import './App.css';
import Titulo from './components/Titulo';
//import Fecha from './components/Fecha';
import Imagen from './components/Imagen';
import Registro from './components/Registro';

function App() {
  return (
    <div className="App">
      <Titulo texto="COVID-19" />
      <Registro 
        registro={{
          fecha: new Date(2023, 5, 15),
          titulo: "Contagios",
          cantidad: 1857,
      }}
      />
      <Imagen/>
    </div>
  );
}

export default App;
