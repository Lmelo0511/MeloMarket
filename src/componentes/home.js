import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import imagem1 from "../Imagens/feira-supermercado-hortifruti.jpg"
import imagem2 from "../Imagens/carrossel-img1.jpg"
import imagem3 from "../Imagens/carrossel-img2.jpg"
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className="secao1">
      <div style={{padding: 20}}>
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
          <div className='container1'>
            <img 
              className='imagem3'
              src={imagem3}
            />
            <p className='tituloProduto'>Imagem teste</p>
          </div>
          <div className='container1'>
            <img 
              className='imagem3'
              src={imagem3}
            />
            <p className='tituloProduto'>Imagem teste</p>
          </div>
          <div className='container1'>
            <img 
              className='imagem3'
              src={imagem3}
            />
            <p className='tituloProduto'>Imagem teste</p>
          </div>
          <div className='container1'>
            <img 
              className='imagem3'
              src={imagem3}
            />
            <p className='tituloProduto'>Imagem teste</p>
          </div>
          <div className='container1'>
            <img 
              className='imagem3'
              src={imagem3}
            />
            <p className='tituloProduto'>Imagem teste</p>
          </div>
          <div className='container1'>
            <img 
              className='imagem3'
              src={imagem3}
            />
            <p className='tituloProduto'>Imagem teste</p>
          </div>
          <div className='botaoPrincipal'>
            <button className='botaoMais'>
              <Link className='acessoPromocoes' to='promocoes'>Saiba Mais</Link>
            </button>
          </div>
        </section>
        <footer className='rodape' style={{backgroundColor: 'white'}}>
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
