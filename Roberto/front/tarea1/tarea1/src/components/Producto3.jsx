// Gilberto André García Gaytán A01753176
// Producto3 Funko Rengoku
/* Importing the useState function from the react library, the Productos.css file and the rengoku.jpg
file. */
import { useState } from 'react';
import '../styles/Productos.css';
import rengoku from "../images/rengoku.jpg";

/* A function that is returning a div with the information of the product. */
/* In classname etrellas create a div with the class name "estrellas" and then it is creating a span with the class name
"estrella-llena" or "estrella" depending on the value of the variable "valoracion". */
function Producto3({ imagen }) {
  const [valoracion, setValoracion] = useState(0);

  const props = {
    titulo: "Funko Pop! Animation: Demon Slayer - Kyojuro Rengoku",
    precio: "$337.22",
    descripcion:
      "Hasta 18 meses de $32.75 con costo de financiamiento",
    tema: "Película",
    marca: "Funko",
    material: "Vinilo",
    dimensiones: "11.5L x 9W x 16H centimeters",
    personaje: "Kyojuro Rengoku",
  };

  const handleClick = (index) => {
    setValoracion(index + 1);
  };

  return (
    <div className="producto">
      <img src={rengoku} alt="rengoku" />
      <h1>
        <strong>{props.titulo}</strong>
      </h1>
      <p>
        <strong>{props.precio}</strong>
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
      <p>{props.descripcion}</p>
      <ul>
        <li>Tema: {props.tema}</li>
        <li>Marca: {props.marca}</li>
        <li>Material: {props.material}</li>
        <li>Dimensiones del producto: {props.dimensiones}</li>
        <li>Personaje de dibujos animados: {props.personaje}</li>
      </ul>
    </div>
  );
}

export default Producto3;
