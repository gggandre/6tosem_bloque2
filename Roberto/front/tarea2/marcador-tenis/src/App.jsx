import { useState } from "react";
import './styles/App.css';
import Titulo from './components/Titulo';
import Puntos from './components/Puntos';
import Botones from './components/Botones';

function App() {

  const [puntosA, setPuntosA] = useState(0);
  const [puntosB, setPuntosB] = useState(0);
  /* Handlers para los botones */
  const onClickHandlerA = (event) => {
    setPuntosA(puntosA + 1);
  }

  const onClickHandlerB = (event) => {
    setPuntosB(puntosB + 1);
  }

  const onClickHandlerC = (event) => {
    setPuntosA(0); 
    setPuntosB(0);
  }

  return (
    <div className="App">
      <Titulo texto="Jugador A" />
      <Puntos valor={puntosA} />
      <Titulo texto="Jugador B" />
      <Puntos valor={puntosB} />
      <Botones texto="Punto de A" onClick={onClickHandlerA}/>
      <Botones texto="Punto de B" onClick={onClickHandlerB}/>
      <Botones texto="Reiniciar" onClick={onClickHandlerC}/>
    </div>
  );
}

export default App;