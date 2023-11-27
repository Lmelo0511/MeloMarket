import React from "react";
import Contato from './componentes/Contato';
import Promocoes from './componentes/Promocoes';
import Sobre from './componentes/Sobre';
import Home from "./componentes/home";
import { Routes, Route } from 'react-router-dom';

function Rotas(){
  return(
    <Routes>
      <Route           
          path='/'
          element = {
            <Home/>
          }>
      </Route>  
      <Route 
          path='contato'
          element = {
            <Contato/>
          }>
      </Route>
      <Route 
          path='promocoes'
          element = {
            <Promocoes/>
          }>
      </Route>
      <Route 
          path="sobre"
          element = {
            <Sobre/>
          }>    
      </Route>
    </Routes>    
  );
}

export default Rotas;
