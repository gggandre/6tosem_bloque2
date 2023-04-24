import './styles/App.css';
import ListaTareas from './components/ListaTareas';
import { createContext } from 'react';
import ProovedorTareas from './components/ProovedorTareas';


// Crear el contexto global
export const ContextoTareas = createContext();

function App() {
  return (
    <div className="App">
      <ProovedorTareas>
        <ListaTareas />
      </ProovedorTareas>
    </div>
  );
}

export default App;
