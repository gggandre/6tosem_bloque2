// Gilberto André García Gaytán A01753176
// Menu de la app

/* Importing the css file for the Menu component. */
import "../styles/Menu.css";

/**
 * The function Menu() returns a div with a className of "menu" and an unordered list with two list
 * items.
 * @returns The Menu component is being returned.
 */
function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>Hola</li>
        <li>Esta es una tarea de Gilberto André García Gaytán-- A01753176</li>
      </ul>
    </div>
  );
}

export default Menu;
