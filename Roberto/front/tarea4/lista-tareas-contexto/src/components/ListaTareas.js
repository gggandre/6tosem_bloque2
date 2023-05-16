/**
Este código representa un componente de React llamado ListaTareas.
 El componente importa otros componentes y estilos necesarios y luego define dos estados utilizando el hook useState. 
 arrTareas es un estado que almacena un array vacío y se utiliza para almacenar las tareas obtenidas desde una API. 
isLoading es un estado booleano que se utiliza para controlar si se están cargando los datos de la API.
 */

import { Fragment, useEffect, useState } from "react";
import "../styles/ListaTareas.css";
import CapturaTarea from "./CapturaTarea";
import Tarea from "./Tarea";

const ListaTareas = () => {
  const [arrTareas, setArrTareas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        const arrNuevo = data.map((tarea) => ({
          id: tarea.id,
          texto: tarea.title,
          completada: tarea.completed,
        }));
        setArrTareas(arrNuevo);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Fragment>
      <CapturaTarea />
      <div className="lista-tareas">
        {isLoading ? (
          <h1>Cargando tareas...</h1>
        ) : arrTareas.length === 0 ? (
          <h1>👽 No hay tareas, agrega una 👽</h1>
        ) : (
          arrTareas.map((tarea) => (
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
            />
          ))
        )}
      </div>
    </Fragment>
  );
};

export default ListaTareas;
