/**
 *
 */
import { useContext } from "react";
import "../styles/Tarea.css";
import { ContextoTareas } from "../App";
import {MdOutlineDeleteForever} from "react-icons/md";

const Tarea = (props) => {

  const [ , , , completarTarea, eliminarTarea] = useContext(ContextoTareas); // se pone así por que es un arreglo de context

  const estiloTarea = "tarea-contenedor" + (props.completada ? " completada" : "");
  return(
    <div className={estiloTarea}>
        <div className="tarea-texto" onClick={() => completarTarea(props.id)}>
            {props.texto}
        </div>
        <div className="tarea-icono" onClick={() => eliminarTarea(props.id)}>
            <MdOutlineDeleteForever />
        </div>
    </div>
  );
};

export default Tarea;
