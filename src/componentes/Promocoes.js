import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Produtos } from "./Produtos";

function Promocoes(){
    return(
      <div>
          <br></br>
          <h1 className='primeiroTitulo'>Principais Ofertas do Dia</h1>
          <Produtos
            id={1}
            titulo="titulo1"
            descricao="descricao1" 
            preco="preco1"       
          />
          <Produtos
            id={1}
            titulo="titulo2"
            descricao="descricao2" 
            preco="preco2"       
          />
          <Produtos
            id={1}
            titulo="titulo3"
            descricao="descricao3" 
            preco="preco3"       
          />
          <footer className='rodape'>
              <div className='Informacao'>
                  <h3 className='titulo3'>Endereço:</h3>
                  <br></br><br></br>
                  <p className='endereco'>
                      Av. Alípio Octaviano de Souza paraíso<br></br> 
                      Bairro: Terra Brasilis<br></br>
                      Cidade: Itupeva - SP
                  </p>
                  <p className='Logo2'>MeloMarket</p>
              </div>
          </footer>
      </div>
    )
}

export default Promocoes;
