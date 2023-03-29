// Gilberto André García Gaytán A01753176
// Producto2 Funko Mitsuri
/* Importing the useState function from the react library, the Productos.css file and the mitsuri.jpg
file. */
import { useState } from 'react';
import '../styles/Productos.css';
import mitsuri from "../images/mitsuri.jpg";

/* The above code is creating a React component that displays a product. */
/* In classname etrellas create a div with the class name "estrellas" and then it is creating a span with the class name
"estrella-llena" or "estrella" depending on the value of the variable "valoracion". */
function Producto2({ imagen }) {
  const [valoracion, setValoracion] = useState(0);

  const producto2 = {
    titulo: "Funko Pop! Animation: Demon Slayer - Mitsuri Kanroji",
    precio: "$369.00",
    descripcion:
      "Hasta 18 meses de $26.75 con costo de financiamiento",
    tema: "Película",
    marca: "Funko",
    material: "Vinilo",
    dimensiones: "11.5L x 9W x 16H centimeters",
    personaje: "Mitsuri Kanroji",
  };

  const handleClick = (index) => {
    setValoracion(index + 1);
  };

  return (
    <div className="producto">
      <img src={mitsuri} alt="mitsuri" />
      <h1>
        <strong>{producto2.titulo}</strong>
      </h1>
      <p>
        <strong>{producto2.precio}</strong>
          </p>
          <li>Valoración:</li>
          <div className="estrellas">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={index < valoracion ? "estrella-llena" : "estrella"}
              onClick={() => handleClick(index)}
            >
              ★
            </span>
          ))}
        </div>
      <p>{producto2.descripcion}</p>
      <ul>
        <li>Tema: {producto2.tema}</li>
        <li>Marca: {producto2.marca}</li>
        <li>Material: {producto2.material}</li>
        <li>Dimensiones del producto: {producto2.dimensiones}</li>
        <li>Personaje de dibujos animados: {producto2.personaje}</li>
      </ul>
    </div>
  );
}

export default Producto2;
