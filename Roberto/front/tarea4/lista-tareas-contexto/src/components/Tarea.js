import '../styles/Tarea.css';
import { MdOutlineDeleteForever } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const Tarea = (props) => {
    const estiloTarea = "tarea-contenedor" + (props.completada ? " completada" : "");
    return (
        <div className = {estiloTarea}>
            <div className = "tarea-texto" onClick={() => props.completarTarea(props.id)}>
                {props.texto}
            </div>
            <div className = "tarea-icono" onClick={() => props.eliminarTarea(props.id)}>
                <MdOutlineDeleteForever />
            </div>
        </div>
    );
};



export default Tarea;