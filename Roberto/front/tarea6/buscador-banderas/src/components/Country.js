/*    A01753176 Gilberto André Garccía Gaytán 
Este código es un componente de React que representa un formulario para buscar un país. Al importar React y useState, 
se utiliza el hook de estado para crear una variable llamada 'country' y una función para actualizarla ('setCountry'). 
También se importa el hook 'useNavigate' de 'react-router-dom' para la navegación. Al enviar el formulario, se llama a la función 
'handleSubmit', que evita la acción predeterminada del evento, utiliza 'navigate' para redirigir a una ruta específica (en este caso,
   '/flag/nombre_del_país') y muestra un formulario con un campo de texto y un botón de búsqueda.
 Cuando se cambia el valor del campo de texto, se actualiza el estado de 'country' mediante la función 'setCountry'.*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Country() {
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/flag/${country}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={country} onChange={e => setCountry(e.target.value)} placeholder=" Ingresa el nombre del país"/>
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}

export default Country;
