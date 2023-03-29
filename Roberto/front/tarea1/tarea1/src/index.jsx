/* Importing the React library and the ReactDOM library. It is also importing the App component from
the App.js file. It is also rendering the App component to the root element. */
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.css";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
