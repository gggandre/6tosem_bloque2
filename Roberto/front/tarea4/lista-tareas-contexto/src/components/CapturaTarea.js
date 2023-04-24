import '../styles/CapturaTarea.css'
import { useContext, useState } from 'react';
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ContextoTareas } from '../App';

const CapturaTarea = (props) => {
  // ACcede al contexto
  const [arrTareas, setArrTareas] = useContext(ContextoTareas);
    
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
      const nuevaTarea = {
        id: uuidv4(),
        texto: refInput.current.value,
        completada: false
      };
    //props.onSubmit(nuevaTarea)
      const nuevoArrTareas = { nuevaTarea, ...arrTareas };
      setArrTareas(nuevoArrTareas); //PENDIENTE
      //arrTareas.push(nuevaTarea);
      console.log(arrTareas);
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
