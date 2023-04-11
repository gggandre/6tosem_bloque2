import "../styles/Botones.css";
const Botones = (props) => {
    return (
        <button className="botones-tenis" onClick={props.onClick}>
            {props.texto}
        </button>
    );
};

export default Botones;