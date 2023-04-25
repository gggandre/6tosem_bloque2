/*Gilberto André García Gaytán A01753176
Este código define la función principal App que retorna un elemento div que contiene el componente ListaTareas.
 El archivo de estilo App.css también se importa para aplicar estilos al componente App.
 Finalmente, la función App se exporta como el componente predeterminado de la aplicación.*/
import './styles/App.css';
import ListaTareas from './components/ListaTareas';

function App() {
  return (
    <div className="App">
      <ListaTareas/>
    </div>

  );
}

export default App;
