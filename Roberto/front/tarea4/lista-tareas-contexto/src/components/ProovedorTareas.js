import { ContextoTareas } from "../App";
import { useState } from "react";

const ProovedorTareas = ({ children }) => { 
    //Estado del arreglo
    const [arrTareas, setArrTareas] = useState([]);
    return (
        <ContextoTareas.Provider value={{ arrTareas, setArrTareas }}>
            {children}
        </ContextoTareas.Provider>
    )
};

export default ProovedorTareas;