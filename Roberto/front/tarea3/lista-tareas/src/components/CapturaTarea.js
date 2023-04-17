import '../styles/CapturaTarea.css'
import { useState } from 'react';
import { useRef } from 'react';
//import {v4 as uuidv4} from 'uuid';

const CapturaTarea = (props) => {
    
//Contenido del input
const [descripcionTarea, setDescripcionTarea] = useState('');
//Manejador del evento cuando el input cambia de valor
    const refInput = useRef(); 
    const cambioEntradaHandler = (event) => {
        setDescripcionTarea(event.target.value);
        console.log(descripcionTarea);
    }
    const agregarTareaHandler = (event) => {
    event.preventDefault();
    const nuevaTarea = { texto: refInput.current.value};
    props.onSubmit(nuevaTarea); //PENDIENTE
    };
   
    return (
      <form className="tarea-forma" onSubmit={agregarTareaHandler}>
            <input
            ref={refInput}
            className="tarea-input"    
            type="text"
            placeholder="Escibe la nueva tarea"
            name="texto"
            />
            {cambioEntradaHandler}
        <button className="tarea-boton">Agregar tarea</button>
  
      </form>
    );
};
  
export default CapturaTarea;
