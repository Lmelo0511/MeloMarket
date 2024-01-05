import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import imagem1 from "../Imagens/feira-supermercado-hortifruti.jpg"
import imagem2 from "../Imagens/carrossel-img1.jpg"
import { Link } from 'react-router-dom';
import { Produtos } from './Produtos';
import Carrinho from '../componenteCarrinho/Carrinho';

function Home() {

  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (novoProduto) => {
    const novosProdutos = [...carrinho];
    novosProdutos.push(novoProduto);
    setCarrinho(novosProdutos);
  };

  return (
    <div className="secao1">
      <div>
        <Carousel>
          <Carousel.Item className='carrosel-item'>
            <img
              className="imagem1"
              src={imagem1}
              alt="Image One"
            />
            <h1>Reaproveite melhor os alimentos</h1>
          </Carousel.Item>
          <Carousel.Item className='carrosel-item'>
            <img
              className="imagem2"
              src={imagem2}
              alt="Image Two"
            />
            <h1>Economize e ganhe saúde</h1>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='secao2'>
        <br></br>
        <h2 className='titulo2'>Principais Ofertas do Dia</h2>
        <section>
          <Produtos
            id={1}
            titulo="titulo1"
            descricao="descricao1" 
            preco="10.98"    
            adicionarAoCarrinho={adicionarAoCarrinho}   
          />
          <Produtos
            id={2}
            titulo="titulo2"
            descricao="descricao2" 
            preco="20.80"       
            adicionarAoCarrinho={adicionarAoCarrinho} 
          />
          <Produtos
            id={3}
            titulo="titulo3"
            descricao="descricao3" 
            preco="30.50"       
            adicionarAoCarrinho={adicionarAoCarrinho} 
          />
          <Carrinho produtosNoCarrinho={carrinho} />
          <div className='botaoPrincipal'>
            <button className='botaoMais'>
              <Link className='acessoPromocoes' to='promocoes'>Saiba Mais</Link>
            </button>
          </div>
        </section>
        <footer className='rodape'>
          <div className='Informacao' color='white'>
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
    </div>
  );
}

export default Home;
