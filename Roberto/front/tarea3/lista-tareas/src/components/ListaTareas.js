/*Gilberto André García Gaytán A01753176
Este código define un componente React que muestra una lista de tareas y permite agregar, completar 
y eliminar tareas  de la lista mediante el uso de otros componentes*/

import '../styles/ListaTareas.css';
import { Fragment, useState } from 'react';
import CapturaTarea from './CapturaTarea';
import Tarea from './Tarea';

const ListaTareas = (props) => {
  const [arrTareas, setArrTareas] = useState([]);
  const [mostrarFormaCaptura, setMostrarFormaCaptura] = useState(false);

  const agregarTarea = (tarea) => { 
    const nuevoArrTareas = [tarea, ...arrTareas];
    setArrTareas(nuevoArrTareas);
    setMostrarFormaCaptura(false);
  };

  const completarTarea = (id) => { 
    const arrTareasNuevo = arrTareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setArrTareas(arrTareasNuevo);
  };

  const eliminarTarea = (id) => {
    const arrTareasNuevo = arrTareas.filter((tarea) => tarea.id !== id);
    setArrTareas(arrTareasNuevo);
  };


  return (
    <Fragment>
      <CapturaTarea onSubmit={agregarTarea} mostrarFormaCaptura={mostrarFormaCaptura} setMostrarFormaCaptura={setMostrarFormaCaptura} />
      <div className="lista-tareas">
        {arrTareas.length === 0 && <h1 className='lista-tareas'>🧚No hay tareas, agrega una🧚</h1>}
        {arrTareas.map((tarea)=>{
          return <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea} 
          />
        })}
      </div>
    </Fragment>
  );
};

export default ListaTareas;
