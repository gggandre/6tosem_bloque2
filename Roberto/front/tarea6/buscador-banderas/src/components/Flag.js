/* A01753176 Gilberto André Garccía Gaytán 
Este código es otro componente de React que muestra la bandera de un país. Al importar React, useEffect y useState, 
se utiliza el hook de estado para crear una variable llamada 'country' y una función para actualizarla ('setCountry'). 
También se importa el hook 'useParams' de 'react-router-dom' para obtener el nombre del país de los parámetros de la URL 
y 'axios' para realizar una solicitud HTTP. Dentro del useEffect, se define una función asincrónica llamada 'fetchCountry'
 que utiliza axios para obtener los datos del país desde la API 'restcountries.com' según el nombre del país obtenido de los 
 parámetros de la URL. Luego, se actualiza el estado de 'country' con los datos obtenidos. 
El componente renderiza el nombre del país y muestra la bandera solo si se ha cargado correctamente el objeto 'country'.*/ 

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Flag() {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      const result = await axios(
        `https://restcountries.com/v3/name/${countryName}`
      );

      setCountry(result.data[0]);
    };

    fetchCountry();
  }, [countryName]);

  return (
    <div>
      {country && (
        <>
          <h1>{country.name.common}</h1>
          <img src={country.flags[1]} alt={`${countryName} Flag`} />
        </>
      )}
    </div>
  );
}

export default Flag;
