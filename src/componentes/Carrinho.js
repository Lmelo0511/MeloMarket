import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import imagem3 from "../Imagens/carrossel-img2.jpg";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState, useEffect } from "react";

const Carrinho = ({ produtosNoCarrinho }) => {

    const [produtoNoCarrinho, setProdutoNoCarrinho] = useState(0);

    const adicionarProduto = (index) => {
        const novosProdutos = [...produtosNoCarrinho];
        novosProdutos[index].quantidade += 1;

        setProdutoNoCarrinho(novosProdutos);
    }

    const removerProduto = (index) => {
        const novosProdutos = [...produtosNoCarrinho];
        novosProdutos[index].quantidade += 1;

        setProdutoNoCarrinho(novosProdutos);
    }

    const Total = () => {
        
    }

    const linha = {
        color: 'black'
    };

    return(
        <div>
            <br></br>
            <h1 className="Titulo">Seu carrinho</h1>
            <ul>
                {produtosNoCarrinho?.map((produto, index) => (
                    <li key={index}>
                        <div className='containers'>
                            <img className="imagem3" src={imagem3}></img>
                            <p className='tituloProduto'>{produto.titulo}</p>
                            <p className='descricaoProduto'>{produto.descricao}</p>
                            <p className='precoProduto'>{produto.preco}</p>  
                            <div className='container2'>
                                <button className="botaoRemover" onClick={() => removerProduto(index)}>
                                    <AiFillMinusCircle size={30} color="black"/>
                                </button>
                                <p>Quantidade: {produto.quantidade}</p>
                                <button className="botaoAdicionar" onClick={() => adicionarProduto(index)}>
                                    <AiFillPlusCircle size={30} color="black"/>
                                </button>
                            </div>                        
                        </div>
                    </li>
                ))}
            </ul>
            <hr style={linha}></hr>
            <p className="Total">Total:[...Total]</p>
        </div>
    )
}

export default Carrinho;
