import '../styles/Tarea.css';
import { MdOutlineDeleteForever } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const Tarea = (props) => {
    return (
        <div className="tarea-contenedor">
            <div className="tarea-texto">
                {props.texto}
            </div>
            <div className="tarea-icono">
                <MdOutlineDeleteForever />
            </div>
        </div>
    );
};



export default Tarea;