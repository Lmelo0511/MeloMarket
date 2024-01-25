import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import imagem3 from "../Imagens/carrossel-img2.jpg";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import FormularioCarrinho from "./FormularioCarrinho"
import { Link } from "react-router-dom";
import { ContextoTema } from "../contexto/ContextoTema";

export const Carrinho = () => {

    const {produtos, adicionarAoCarrinho, total, RemoverProduto, LimparCarrinho} = useContext(ContextoTema);

   
    return(
        <div>
            <div>
                <br></br>
                <button className="limparCarrinho" onClick={LimparCarrinho}>Limpar Carrinho</button>
                <h1 className="tituloCarrinho">Seu carrinho</h1>
                <div>
                    <FormularioCarrinho />
                </div>
                {
                    produtos.length > 0 ?
                    <React.Fragment>
                        <ul>
                            {produtos?.map((produto, index) => (
                                <li key={index}>
                                <div className='containers2'>
                                    <button className="botaoApagar" onClick={() => RemoverProduto(index, true)}>
                                        <FaRegTrashAlt size={30} color="black"/>
                                    </button>
                                        <img className="imagem3" src={imagem3}></img>
                                        <p className='tituloProduto'>{produto.titulo}</p>
                                        <p className='descricaoProduto'>{produto.descricao}</p>
                                        <p className='precoProduto'>{produto.preco}</p>  
                                    <div className='container2'>
                                        <button className="botaoRemover" onClick={() => RemoverProduto(index)}>
                                            <AiFillMinusCircle size={30} color="black"/>
                                        </button>
                                        <p>Quantidade: {produto.quantidade}</p>
                                        <button className="botaoAdicionar" onClick={() => adicionarAoCarrinho(produto)}>
                                            <AiFillPlusCircle size={30} color="black"/>
                                        </button>
                                    </div>                        
                                </div>
                                </li>
                            ))}
                            </ul>
                            <hr className="linha"></hr>
                            <p className="Total">Total: R$ {total.total} <button className="confirmarPedido"><Link to='resultado'>confirmar pedido</Link></button></p>
                    </React.Fragment>
                    :
                    <> Não há produtos no carrinho.</>
                }
                
            </div>
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
    );
}

export default Carrinho;
