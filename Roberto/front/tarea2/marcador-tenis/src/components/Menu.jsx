// Gilberto André García Gaytán A01753176
// Menu de la app

/* Importing the css file for the Menu component. */
import { useState } from "react";
import "../styles/Menu.css";
/* This is a functional component in JavaScript React that defines the Menu component. It uses the
useState hook to manage the state of a boolean variable called showPopup, which is initially set to
false. The component returns a div with a list and a button that, when clicked, sets the showPopup
state to true. If showPopup is true, the component also renders a popup div with instructions for a
tennis scoring system. The popup div includes a button that, when clicked, sets the showPopup state
back to false. Finally, the component is exported as the default export. */
function Menu() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="menu">
      <ul>
        <li>Hola</li>
        <li>Esta es una tarea de Gilberto André García Gaytán-- A01753176</li>
      </ul>
      <button onClick={() => setShowPopup(true)}>Instrucciones</button>
      {showPopup && (
        <div className="popup">
          <h2>Instrucciones de Puntaje de Tenis</h2>
          <p>0 puntos = Inicio</p>
          <p>1 punto = 15</p>
        <p>2 puntos = 30</p>
<p>3 puntos = 40</p>
                      <p>40 - 40 = Empate</p>
                  <p><b>En caso de haber empate se debe ganar por 2 puntos (dos clicks)</b></p>
                  <p><b>¡Son sets infinitos, juega las veces que quieras!</b></p>
          <button onClick={() => setShowPopup(false)}>Cerrar</button>
        </div>
      )}
    </div>
  );
}

export default Menu;
