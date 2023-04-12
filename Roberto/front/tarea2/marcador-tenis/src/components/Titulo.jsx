//A01753176 - Gilberto André García Gaytán
/**
 * This is a React component called "Titulo" that renders a div with a class name "titulo-tenis" and
 * displays the text passed as a prop.
 * @returns The Titulo component is being returned, which is a div element with the class name
 * "titulo-tenis" and the text content passed as a prop to the component.
 */
import "../styles/Titulo.css";

const Titulo = (props) => {
  return <div className="titulo-tenis">
        {props.texto}
    </div>
};

export default Titulo;