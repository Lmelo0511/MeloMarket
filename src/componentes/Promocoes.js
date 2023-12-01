import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import imagem3 from "../Imagens/carrossel-img2.jpg"

function Promocoes(){
    return(
        <div className="corpoPagina">
            <div>
                <br></br>
                <h1 className='primeiroTitulo'>Principais Ofertas do Dia</h1>
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
                </section>
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
        </div>
    )
}

export default Promocoes;
