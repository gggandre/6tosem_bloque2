// Gilberto André García Gaytán A01753176
// Registro covid19

import Fecha from "./Fecha";
import "../styles/registro.css";

const Registro = (props) => {
    return (
        <div className="registro">
            <Fecha fecha={props.registro.fecha} />
            <div className="registro-descripcion">
                <h2>{props.registro.titulo}</h2>
            </div>
            <div className="registro-contagios">
                {props.registro.cantidad}
            </div>
        </div>
    );
};
export default Registro;
