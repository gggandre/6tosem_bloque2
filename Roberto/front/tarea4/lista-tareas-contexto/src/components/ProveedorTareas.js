/**
 *
 */

import { useState } from "react";
import { ContextoTareas } from "../App";

const ProveedorTareas = ({ children }) => {
  // Estado del arreglo, DATS
  const [arrTareas, setArrTareas] = useState([]);

  //FUNCIONES
  const agregarTarea = (tarea) => { 
    setArrTareas([tarea, ...arrTareas] );
  };

  const completarTarea = (id) => {
    const arrTareasNuevo = arrTareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setArrTareas(arrTareasNuevo); //
  };

  const eliminarTarea = (id) => {
    const arrTareasNuevo = arrTareas.filter((tarea) => tarea.id !== id);
    setArrTareas(arrTareasNuevo);
  };

  return(
    <ContextoTareas.Provider value={[arrTareas, setArrTareas, agregarTarea,
      completarTarea, eliminarTarea]}>
        {children}
    </ContextoTareas.Provider>
  );
};

export default ProveedorTareas;
