// Gilberto André García Gaytán A01753176
// Fecha app covid19
import "../styles/Fecha.css";

const Fecha = (props) => {
    const year = props.fecha.getFullYear();
    const month = props.fecha.toLocaleString("en-US", { month: "long" });
    const day = props.fecha.toLocaleString("en-US", { day: "2-digit" });

    return (
        <div className="fecha">
            <div className="fecha_anio">{year}</div>
            <div className="fecha_mes">{month}</div>
            <div className="fecha_dia">{day}</div>
        </div>
    );  
};

export default Fecha;