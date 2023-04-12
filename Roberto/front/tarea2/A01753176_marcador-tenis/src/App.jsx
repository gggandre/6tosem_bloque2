//A01753176 - Gilberto André García Gaytán
/**
 * The function returns a React component that renders the PuntosySet component within a div with the
 * class name "App".
 * @returns The `App` component is returning a `div` element with a class name of "App" and rendering
 * the `PuntosySet` component.
 */
import './styles/App.css';
import PuntosySet from './components/PuntosySet';
import Menu from './components/Menu';

function App() {

  return (
    <div className="App">
      <PuntosySet />
      <Menu/>
    </div>
  );
}

export default App;