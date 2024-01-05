import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import imagem3 from "../Imagens/carrossel-img2.jpg";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import FormularioCarrinho from "./FormularioCarrinho"

const Carrinho = ({ produtosNoCarrinho }) => {

    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        if(produtosNoCarrinho) {
            setProdutos(produtosNoCarrinho.map(produto => ({...produto, quantidade: 0})));
        }
    }, [produtosNoCarrinho]);

    const AdicionarQuantia = (index) => {
        const novosProdutos = [...produtos];
        novosProdutos[index].quantidade++;
        setProdutos(novosProdutos);
    };

    const RemoverQuantia = (index) => {
        const novosProdutos = [...produtos];
        novosProdutos[index].quantidade--;
        setProdutos(novosProdutos);
    };

    const { total, quantidade } = produtos.reduce(
        (acumulador, item) => {
            return {
                quantidade: acumulador.quantidade + item.quantidade,
                total: acumulador.total + item.preco * item.quantidade,
            };
        },
        {
            quantidade: 0,
            total: 0,
        }
    );

    const RemoverProduto = (index) => {
        const novosProdutos = [...produtos];
        novosProdutos.splice(index, 1);
        setProdutos(novosProdutos);
    };

    const LimparCarrinho = () => {
        setProdutos([]);
    };

    const linha = {
        color: 'black'
    };

    return(
        <div>
            <div>
                <br></br>
                <button className="limparCarrinho" onClick={() => LimparCarrinho()}>Limpar Carrinho</button>
                <h1 className="tituloCarrinho">Seu carrinho</h1>
                <div>
                    <FormularioCarrinho />
                </div>
                <ul>
                    {produtos?.map((produto, index) => (
                        <li key={index}>
                        <div className='containers2'>
                            <button className="botaoApagar" onClick={() => RemoverProduto(index)}>
                                <FaRegTrashAlt size={30} color="black"/>
                            </button>
                                <img className="imagem3" src={imagem3}></img>
                                <p className='tituloProduto'>{produto.titulo}</p>
                                <p className='descricaoProduto'>{produto.descricao}</p>
                                <p className='precoProduto'>{produto.preco}</p>  
                            <div className='container2'>
                                <button className="botaoRemover" onClick={() => RemoverQuantia(index)}>
                                    <AiFillMinusCircle size={30} color="black"/>
                                </button>
                                <p>Quantidade: {produto.quantidade}</p>
                                <button className="botaoAdicionar" onClick={() => AdicionarQuantia(index)}>
                                    <AiFillPlusCircle size={30} color="black"/>
                                </button>
                            </div>                        
                        </div>
                        </li>
                    ))}
                </ul>
                <hr className="linha"></hr>
                <p className="Total">Total: R$ {total} <button className="confirmarPedido">confirmar pedido</button></p>
            </div>
        </div>
    )
}
export default Carrinho;
