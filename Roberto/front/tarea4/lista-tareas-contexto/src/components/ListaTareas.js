import '../styles/ListaTareas.css';
import { Fragment, useContext, useState } from 'react';
import CapturaTarea from './CapturaTarea';
import Tarea from './Tarea';
import { ContextoTareas } from '../App';


const ListaTareas = (props) => {
    //Estado para las tareas (arrTareas)
    //const [arrTareas, setArrTareas] = useState([]);
    //Contexto
    const [arrTareas] = useContext(ContextoTareas);

    const agregarTarea = (tarea) => { 
        const nuevoArrTareas = [tarea, ...arrTareas];
        //setArrTareas(nuevoArrTareas);
    };

    const completarTarea = (id) => { 
        const arrTareasNuevo = arrTareas.map((tarea) => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        //setArrTareas(arrTareasNuevo); //
    };

    const eliminarTarea = (id) => {
        const arrTareasNuevo = arrTareas.filter((tarea) => tarea.id !== id);
        //setArrTareas(arrTareasNuevo);
    };

    return (
        <Fragment>
            <CapturaTarea />
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