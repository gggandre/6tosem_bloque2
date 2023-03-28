import "./styles/App.css";
import Titulo from './components/Titulo';
import Menu from './components/Menu';
import Productos from './components/Productos';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Titulo texto="Productos Amazon" />
      <Productos/>
    </div>
  );
}

export default App;
