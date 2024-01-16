import React, { useState } from "react";
import imagem3 from "../Imagens/carrossel-img2.jpg";
import imagem2 from "../Imagens/carrossel-img1.jpg";

export const Produtos = ({ id, titulo, descricao, preco, adicionarAoCarrinho }) => {

  const [carrinho, setCarrinho] = useState([]);

  const Clicar = () => {
    const novoProduto = { id, titulo, descricao, preco };
    setCarrinho([...carrinho, novoProduto]);
    adicionarAoCarrinho(novoProduto);
  };

  return (
    <>
      <div className='containers'>
        <img className="imagem3" src={imagem3}></img>
        <p className='tituloProduto'>{titulo}</p>
        <p className='descricaoProduto'>{descricao}</p>
        <p className='precoProduto'>{preco}</p>
        <button className='adicionarCarrinho' onClick={Clicar}>Adicionar ao carrinho</button>
      </div>
      
      <div className='containers'>
        <img className="imagem3" src={imagem2}></img>
        <p className='tituloProduto'>{titulo}</p>
        <p className='descricaoProduto'>{descricao}</p>
        <p className='precoProduto'>{preco}</p>
        <button className='adicionarCarrinho' onClick={Clicar}>Adicionar ao carrinho</button>
      </div>
    </>
  );
}

