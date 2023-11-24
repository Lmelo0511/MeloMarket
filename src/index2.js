import React from 'react';
import ReactDOM from 'react-dom/client';
import './estilizacaoTelas/index2.css';
import Tela1 from './componentes/Contato';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('contato'));
root.render(
  <React.StrictMode>
    <Tela1 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
