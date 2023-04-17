import '../styles/ListaTareas.css';
import { Fragment, useState } from 'react';
import CapturaTarea from './CapturaTarea';
import Tarea from './Tarea';


const ListaTareas = (props) => {
    //Estado para las tareas (arrTareas)
    const [arrTareas, setArrTareas] = useState([]);
    const agregarTarea = (tarea) => { 
        const nuevoArrTareas = [tarea, ...arrTareas];
        setArrTareas(nuevoArrTareas);
    };
    return (
        <Fragment>
            <CapturaTarea onSubmit={agregarTarea} />
            <div className="lista-tareas">
                {arrTareas.map((tarea)=>{
                    return <Tarea texto={tarea.texto} />
                })}
            </div>
        </Fragment>

    );
};


export default ListaTareas;