
import { useEffect } from 'react';
import './App.css';
import Timer from './components/Timer';
import Marcadores from './components/Marcadores';

function App() {

  useEffect( () => {
    console.log("Ejecutando efecto secundario")
  });

  return (
    <div className="App">
      Hola mundo
      {console.log("Rendereando componente App")}
      <Timer />
      <Marcadores />
    </div>
  );
}

export default App;
