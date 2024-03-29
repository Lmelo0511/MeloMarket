import React from "react";
import { Routes, Route } from 'react-router-dom';
import Contato from "./componentes/Contato";
import Promocoes from "./componentes/Promocoes";
import Sobre from "./componentes/Sobre"
import Home from "./componentes/home";
import Carrinho from "./componenteCarrinho/Carrinho";
import PedidoConfirmado from "./componentes/PedidoConfirmado";

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
          path='sobre'
          element = {
            <Sobre/>
          }>    
      </Route>
      <Route
          path='carrinho'
          element = {
            <Carrinho />
          }>
      </Route>
      <Route
          path='home'
          element = {
            <Home/>
          }> 
      </Route>
      <Route
          path='confirmado'
          element = {
            <PedidoConfirmado/>
          }> 
      </Route>
    </Routes>    
  );
}

export default Roteador;
