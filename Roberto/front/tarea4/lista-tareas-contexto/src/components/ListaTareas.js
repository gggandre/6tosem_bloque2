/**
 *
 */

import { Fragment } from "react";
import "../styles/ListaTareas.css";
import CapturaTarea from "./CapturaTarea";
import Tarea from "./Tarea";
import { ContextoTareas } from "../App";
import { useContext } from "react";

const ListaTareas = () => {
  // Estado para las tareas (arrTareas)
  //const [arrTareas, setArrTareas] = useState([]);
  // Contexto
  const [arrTareas] = useContext(ContextoTareas);



  return (
    
      <Fragment>
        <CapturaTarea />
        <div className="lista-tareas">
          {arrTareas.map((tarea) => {
            return (
              <Tarea
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
              />
            );
          })}
          {arrTareas.length === 0 && <h1>👽No hay tareas, agrega una👽</h1>}
        </div>
      </Fragment>

  );
};

export default ListaTareas;
