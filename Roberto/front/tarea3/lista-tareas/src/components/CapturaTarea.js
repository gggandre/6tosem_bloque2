/*Gilberto André García Gaytán A01753176
Este código define un componente React para capturar nuevas tareas 
y agregarlas a una lista de tareas existente.*/

import '../styles/CapturaTarea.css';
import { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CapturaTarea = (props) => {
  const [descripcionTarea, setDescripcionTarea] = useState('');
  const [mostrarFormaCaptura, setMostrarFormaCaptura] = useState(false);
  const refInput = useRef();

  const cambioEntradaHandler = (event) => {
    setDescripcionTarea(event.target.value);
  }

  const agregarTareaHandler = () => {
    if (descripcionTarea.trim() === '') {
      alert('Por favor, escribe una tarea');
      return;
    }
    const nuevaTarea = {
      id: uuidv4(),
      texto: descripcionTarea,
      completada: false
    };
    props.onSubmit(nuevaTarea);
    setDescripcionTarea('');
    setMostrarFormaCaptura(false);
  }

  const cancelarCapturaHandler = () => {
    setMostrarFormaCaptura(false);
  }

  const mostrarFormaCapturaHandler = () => {
    setMostrarFormaCaptura(true);
  }

  return (
    <div className="captura-tarea">
      {!mostrarFormaCaptura && (
        <button className="tarea-boton tarea-boton-agregar" onClick={mostrarFormaCapturaHandler}>Agregar Tarea Nueva</button>
      )}
      {mostrarFormaCaptura && (
        <>
          <input
            ref={refInput}
            className="tarea-input"
            type="text"
            placeholder="Escibe la nueva tarea"
            name="texto"
            value={descripcionTarea}
            onChange={cambioEntradaHandler}
          />
          <button className="tarea-boton tarea-boton-agregar" onClick={agregarTareaHandler}>Agregar</button>
          <button className="tarea-boton tarea-boton-cancelar" onClick={cancelarCapturaHandler}>Cancelar</button>
        </>
      )}
    </div>
  );
};

export default CapturaTarea;
