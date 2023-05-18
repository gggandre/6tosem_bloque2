import './App.css';
import { Routes, Route } from 'react-router'
import { Home, About, Products, Events, Contact, NotFound, Services, History } from './Paginas'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="services" element={<Services />} />
          <Route path="history" element={<History />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
