import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Country from './components/Country';
import Flag from './components/Flag';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Country />} />
        <Route path="/flag/:countryName" element={<Flag />} />
      </Routes>
    </Router>
  );
}

export default App;
