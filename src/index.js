import React from 'react';
import ReactDOM from 'react-dom/client';
import './estilizacaoTelas/index.css';
import './estilizacaoTelas/index2.css';
import './estilizacaoTelas/index3.css';
import './estilizacaoTelas/index4.css';
import './estilizacaoTelas/index5.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import TemaProvider from './contexto/ContextoTema';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <TemaProvider>
      <App/>
    </TemaProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
