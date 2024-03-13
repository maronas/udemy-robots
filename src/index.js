import React from 'react';
import ReactDOM from 'react-dom/client';
import './Css/index.css';
import Robots from "./Components/Robots/Robots";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Robots />
  </React.StrictMode>
);