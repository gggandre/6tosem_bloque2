// Gilberto André García Gaytán A01753176
// App.jsx
/* Importing the components from the files in the components folder. */
import "./styles/App.css";
import Titulo from './components/Titulo';
import Menu from './components/Menu';
import Producto1 from './components/Producto1';
import Producto2 from './components/Producto2';
import Producto3 from './components/Producto3';
import Producto4 from './components/Producto4';

/**
 * The function App() returns a div with the className "App" that contains the Menu, Titulo, Producto1,
 * Producto2, Producto3, and Producto4 components
 */
function App() {
  return (
    <div className="App">
      <Menu/>
      <Titulo texto="Tienda de Funkos" />
      <Producto1 imagen="tokito.jpg"/>
      <Producto2 imagen="mitsuri.jpg" />
      <Producto3 imagen="rengoku.jpg" />
      <Producto4 imagen="sanemi.jpg"/>
    </div>
  );
}

export default App;
