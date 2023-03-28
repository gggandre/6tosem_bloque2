import React from 'react';
import "../styles/Productos.css";

function Producto1() {
  const producto1 = {
    titulo: "Funko Muichiro Tokito",
    precio: "$639.00",
    descripcion:
      "Disponible a un precio más bajo con otros vendedores que posiblemente no ofrezcan Envío Prime gratis.",
    tema: "Película",
    marca: "Funko",
    material: "Vinilo",
    dimensiones: "11.5L x 9W x 16H centimeters",
    personaje: "Tokito",
  };

  return (
    <div className="producto">
      <h1>
        <strong>{producto1.titulo}</strong>
      </h1>
      <p>
        <strong>{producto1.precio}</strong>
      </p>
      <p>{producto1.descripcion}</p>
      <ul>
        <li>Tema: {producto1.tema}</li>
        <li>Marca: {producto1.marca}</li>
        <li>Material: {producto1.material}</li>
        <li>Dimensiones del producto: {producto1.dimensiones}</li>
        <li>Personaje de dibujos animados: {producto1.personaje}</li>
      </ul>
    </div>
  );
}

export default Producto1;
