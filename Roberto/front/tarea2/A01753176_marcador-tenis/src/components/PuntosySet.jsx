//A01753176 - Gilberto André García Gaytán
/* The above code is a React component that simulates a tennis scoring system. It keeps track of the
points, games, and sets won by two players (Jugador A and Jugador B) and updates the score
accordingly when a point is won. The component also handles deuce situations and announces when a
set or match is won. The component uses the useState and useEffect hooks to manage state and update
the UI. */
import Titulo from './Titulo';
import Botones from './Botones';
import { useState, useEffect } from "react";
import "../styles/Styles.css";
import "../styles/Alerta.css";
function PuntosySet() {
  const puntuaciones = ["0", "15", "30", "40"];
  const puntajeActual = (puntuacion) => {
    return puntuaciones[puntuacion];
  }

  const [puntuacionA, setPuntuacionA] = useState(0);
  const [puntuacionB, setPuntuacionB] = useState(0);
  const [puntosA, setPuntosA] = useState(0);
  const [puntosB, setPuntosB] = useState(0);
  const [setsA, setSetsA] = useState(0);
  const [setsB, setSetsB] = useState(0);
  const [isDeuce, setIsDeuce] = useState(false);
  const [showSetAnnouncement, setShowSetAnnouncement] = useState(false);
  const [showMatchAnnouncement, setShowMatchAnnouncement] = useState(false);

  useEffect(() => {
    if (puntuacionA >= 3 && puntuacionB >= 3) { // Verificar si hay Deuce
      if (puntuacionA === puntuacionB) { // Si hay Deuce
        setIsDeuce(true);
      } else if (Math.abs(puntuacionA - puntuacionB) === 1) { // Si hay ventaja
        setIsDeuce(true);
      } else {
        setIsDeuce(false);
      }
    } else {
      setIsDeuce(false);
    }

    if (puntuacionA >= 3 && puntuacionB >= 3 && !isDeuce) {
      if (puntuacionA > puntuacionB && puntuacionA - puntuacionB >= 2) {
        if (setsA === 1000) {
          setShowMatchAnnouncement(true);
        } else {
          setPuntosA(0);
          setPuntosB(0);
          setPuntuacionA(0);
          setPuntuacionB(0);
          setSetsA(prevSetsA => prevSetsA + 1);
          setShowSetAnnouncement(true);
        }
      } else if (puntuacionB > puntuacionA && puntuacionB - puntuacionA >= 2) {
        if (setsB === 1000) {
          setShowMatchAnnouncement(true);
        } else {
          setPuntosA(0);
          setPuntosB(0);
          setPuntuacionA(0);
          setPuntuacionB(0);
          setSetsB(prevSetsB => prevSetsB + 1);
          setShowSetAnnouncement(true);
        }
      }
    }
  }, [puntuacionA, puntuacionB, isDeuce, setsA, setsB]);

  const handlePuntoA = () => {
    if (!isDeuce) {
      if (puntuacionA === 3) {
        if (puntuacionB < 3) {
          if (setsA === 1000) {
    setShowMatchAnnouncement(true);
    } else {
    setPuntosA(prevPuntosA => prevPuntosA + 1);
    setPuntosB(0);
    setPuntuacionA(0);
    setPuntuacionB(0);
    setShowSetAnnouncement(true);
    setSetsA(prevSetsA => prevSetsA + 1);
    }
    } else if (puntuacionB === 3) {
    setIsDeuce(true);
    } else if (puntuacionA - puntuacionB === 1) {
    setPuntuacionA(prevPuntuacionA => prevPuntuacionA + 1);
    } else if (puntuacionA - puntuacionB >= 2) {
    if (setsA === 1000) {
    setShowMatchAnnouncement(true);
    } else {
    setPuntosA(0);
    setPuntosB(0);
    setPuntuacionA(0);
    setPuntuacionB(0);
    setSetsA(prevSetsA => prevSetsA + 1);
    setShowSetAnnouncement(true);
    }
    }
    } else {
    setPuntuacionA(prevPuntuacionA => prevPuntuacionA + 1);
    }
    } else {
    if (puntuacionA === puntuacionB) {
    setPuntuacionA(puntuacionA + 1);
    } else if (puntuacionA - puntuacionB === 1) {
    if (setsA === 1000) {
    setShowMatchAnnouncement(true);
    } else {
    setPuntosA(0);
    setPuntosB(0);
    setPuntuacionA(0);
    setPuntuacionB(0);
    setSetsA(prevSetsA => prevSetsA + 1);
    setShowSetAnnouncement(true);
    }
    } else {
    setIsDeuce(false);
    setPuntuacionA(prevPuntuacionA => prevPuntuacionA + 1);
    }
    }
    };
    
    const handlePuntoB = () => {
    if (!isDeuce) {
    if (puntuacionB === 3) {
    if (puntuacionA < 3) {
    if (setsB === 1000) {
    setShowMatchAnnouncement(true);
    } else {
    setPuntosA(0);
    setPuntosB(prevPuntosB => prevPuntosB + 1);
    setPuntuacionA(0);
    setPuntuacionB(0);
    setShowSetAnnouncement(true);
    setSetsB(prevSetsB => prevSetsB + 1);
    }
    } else if (puntuacionA === 3) {
    setIsDeuce(true);
    } else if (puntuacionB - puntuacionA === 1) {handlePuntoB();
    } else if (puntuacionA === 3) {
    setIsDeuce(true);
    } else if (puntuacionB - puntuacionA === 1) {
    setPuntuacionB(prevPuntuacionB => prevPuntuacionB + 1);
    } else if (puntuacionB - puntuacionA >= 2) {
    if (setsB === 1000) {
    setShowMatchAnnouncement(true);
    } else {
    setPuntosA(0);
    setPuntosB(0);
    setPuntuacionA(0);
    setPuntuacionB(0);
    setSetsB(prevSetsB => prevSetsB + 1);
    setShowSetAnnouncement(true);
    }
    }
    } else {
    setPuntuacionB(prevPuntuacionB => prevPuntuacionB + 1);
    }
    } else {
    if (puntuacionA === puntuacionB) {
    setPuntuacionB(puntuacionB + 1);
    } else if (puntuacionB - puntuacionA === 1) {
    if (setsB === 1000) {
    setShowMatchAnnouncement(true);
    } else {
    setPuntosA(0);
    setPuntosB(0);
    setPuntuacionA(0);
    setPuntuacionB(0);
    setSetsB(prevSetsB => prevSetsB + 1);
    setShowSetAnnouncement(true);
    }
    } else {
    setIsDeuce(false);
    setPuntuacionB(prevPuntuacionB => prevPuntuacionB + 1);
    }
    }
    };
    
    const handleReset = () => {
    setPuntosA(0);
    setPuntosB(0);
    setPuntuacionA(0);
    setPuntuacionB(0);
    setSetsA(0);
    setSetsB(0);
    setIsDeuce(false);
    setShowSetAnnouncement(false);
    setShowMatchAnnouncement(false);
    };
    
    return (
    
    <div className="puntos-container">
    <Titulo />
    <div className="puntos">
    <div className="jugador">
    <h2>Jugador A</h2>
    <p>{puntajeActual(puntuacionA)}</p>
    </div>
    <div className="jugador">
    <h2>Jugador B</h2>
    <p>{puntajeActual(puntuacionB)}</p>
    </div>
    </div>
    <Botones handlePuntoA={handlePuntoA} handlePuntoB={handlePuntoB} handleReset={handleReset} />
    {showSetAnnouncement && (
    <div className="announcement-container">
    <h3>¡Jugador {puntosA > puntosB ? 'A' : 'B'} gana el set!</h3>
    <button onClick={() => setShowSetAnnouncement(false)}>Cerrar</button>
    </div>
    )}
    {showMatchAnnouncement && (
      <div className="announcement-container">
  <button onClick={() => setShowMatchAnnouncement(false)}>Cerrar</button>
  </div>
    )}
    </div>
    );
    }

export default PuntosySet;
