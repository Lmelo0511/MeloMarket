import React from "react";
import { Routes, Route } from 'react-router-dom';
import Contato from "./componentes/Contato";
import Promocoes from "./componentes/Promocoes";
import Sobre from "./componentes/Sobre"
import Home from "./componentes/home";

function Roteador(){
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
      <Route
          path="home"
          element = {
            <Home/>
          }> 
      </Route>
    </Routes>    
  );
}

export default Roteador;
