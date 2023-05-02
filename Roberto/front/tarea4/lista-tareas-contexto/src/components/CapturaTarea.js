/**
 *
 */

import { useContext, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "../styles/CapturaTarea.css";
import { ContextoTareas } from "../App";

const CapturaTarea = (props) => {
  // ACCEDE al contexto
  const [ , , agregarTarea] = useContext(ContextoTareas); // se pone así por que es un arreglo de context

  // Estado del input
  const [descripcionTarea, setDescripcionTarea] = useState("");
  
  const cambioEntradaHandler = (event) => {
    setDescripcionTarea(event.target.value);
    console.log(descripcionTarea);
  };

  const agregarTareaHandler = (event) => {
    event.preventDefault();
    const nuevaTarea = {
      id: uuidv4(),
      texto: refInput.current.value,
      completada: false
    };
    agregarTarea(nuevaTarea);
  };

  // Hook de referencia
  const refInput = useRef();

  return <form className="tarea-forma" onSubmit={agregarTareaHandler}>
    <input 
    ref={refInput}
    className="tarea-input"
    type="text"
    placeholder="Escribe la nueva tarea"
    name="texto"
    onChange={cambioEntradaHandler}
    />

    <button className="tarea-boton">
    Agregar tarea
    </button>
  </form>;
};

export default CapturaTarea;
