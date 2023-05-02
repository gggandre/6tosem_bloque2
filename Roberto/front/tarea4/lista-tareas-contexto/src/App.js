import { createContext } from "react";
import "./styles/App.css";
import ListaTareas from "./components/ListaTareas";
import ProveedorTareas from "./components/ProveedorTareas";

// Crear el contexto (Zona GLOBAL)
export const ContextoTareas = createContext();

function App() {
  return (
    <div className="App">
      <ProveedorTareas>
        <ListaTareas />
      </ProveedorTareas>
    </div>
  );
}

export default App;
