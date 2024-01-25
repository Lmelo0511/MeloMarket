import React, {useContext} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Produtos } from "./Produtos";
import { ContextoTema } from "../contexto/ContextoTema";

function Promocoes(){

  const {} = useContext(ContextoTema);

    return(
      <div className="">
          <br></br>
          <h1 className='primeiroTitulo'>Principais Ofertas do Dia</h1>
          <Produtos
            id={1}
            titulo="titulo1"
            descricao="descricao1" 
            preco="10.98"    
          />
          <Produtos
            id={2}
            titulo="titulo2"
            descricao="descricao2" 
            preco="20.80"       
          />
          <Produtos
            id={3}
            titulo="titulo3"
            descricao="descricao3" 
            preco="30.50"       
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
