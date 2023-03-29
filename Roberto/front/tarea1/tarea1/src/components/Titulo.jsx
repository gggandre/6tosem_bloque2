// Gilberto André García Gaytán A01753176
// Título de la app

/**
 * "The Titulo function takes in a props object and returns an h1 element with the className and texto
 * properties of the props object."
 * 
 * The props object is a JavaScript object that contains all the properties that were passed to the
 * Titulo function
 * @returns A function that returns a JSX element.
 */
const Titulo = (props) => { //props son las propiedades del elemento de App.js
    return <h1 className={props.className}>{props.texto}</h1>;
};

export default Titulo;