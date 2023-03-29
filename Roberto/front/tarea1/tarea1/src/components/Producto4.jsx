// Gilberto André García Gaytán A01753176
// Producto3 Funko Sanemi
/* Importing the useState function from the react library, the Productos.css file and the sanemi.jpg
file. */
import { useState } from 'react';
import '../styles/Productos.css';
import sanemi from "../images/sanemi.jpg";

/* A function that is returning a div with the information of the product. */
/* In classname etrellas create a div with the class name "estrellas" and then it is creating a span with the class name
"estrella-llena" or "estrella" depending on the value of the variable "valoracion". */
function Producto4({ imagen }) {
  const [valoracion, setValoracion] = useState(0);

  const producto4 = {
    titulo: "Funko Pop Sanemi Shinazugawa 1253 Demon Slayer",
    precio: "$289.00",
    descripcion:
      "Hasta 18 meses de $19.65 con costo de financiamiento",
    tema: "Película",
    marca: "Funko",
    material: "Vinilo",
    dimensiones: "11.5L x 9W x 16H centimeters",
    personaje: "Sanemi Shinazugawa",
  };

  const handleClick = (index) => {
    setValoracion(index + 1);
  };

  return (
    <div className="producto">
      <img src={sanemi} alt="sanemi" />
      <h1>
        <strong>{producto4.titulo}</strong>
      </h1>
      <p>
        <strong>{producto4.precio}</strong>
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
      <p>{producto4.descripcion}</p>
      <ul>
        <li>Tema: {producto4.tema}</li>
        <li>Marca: {producto4.marca}</li>
        <li>Material: {producto4.material}</li>
        <li>Dimensiones del producto: {producto4.dimensiones}</li>
        <li>Personaje de dibujos animados: {producto4.personaje}</li>
      </ul>
    </div>
  );
}

export default Producto4;
