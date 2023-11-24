import React from "react";
import Tela1 from './componentes/Contato';
import Tela2 from './componentes/Promocoes';
import Tela3 from './componentes/Sobre';
import { Routes, Route } from 'react-router-dom';

function trocaTelas(){
    return(
      <Routes>
        <Route           
            path='../componentes/Contato'
            element = {
            <Tela1></Tela1>
            }>
        </Route>  
        <Route 
            path='../componentes/Promocoes'
            element = {
              <Tela2></Tela2>
            }>
        </Route>
        <Route 
            path='../componentes/Sobre'
            element = {
              <Tela3></Tela3>
            }>
        </Route>
      </Routes>    
    );
}

export default trocaTelas;
