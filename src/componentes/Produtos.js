import React, { useContext, useState } from "react";
import imagem3 from "../Imagens/carrossel-img2.jpg";
import imagem2 from "../Imagens/carrossel-img1.jpg";
import { ContextoTema } from "../contexto/ContextoTema";

export const Produtos = ({ id, titulo, descricao, preco }) => {

  const [carrinho, setCarrinho] = useState([]);

  const {adicionarAoCarrinho} = useContext(ContextoTema)

  const Clicar = () => {
    const novoProduto = { id, titulo, descricao, preco, quantidade: 1 };
    setCarrinho([...carrinho, novoProduto]);
    adicionarAoCarrinho(novoProduto);
  };

  const ProdutoNaLocalStorage = () => {
    const novoProduto = ({id, titulo, descricao, preco});
    localStorage.setItem("produtos", JSON.stringify(novoProduto));
  }

  return (
    <>
      <div className='containers'>
        <img className="imagem3" src={imagem3}></img>
        <p className='tituloProduto'>{titulo}</p>
        <p className='descricaoProduto'>{descricao}</p>
        <p className='precoProduto'>{preco}</p>
        <button className='adicionarCarrinho' onClick={() => {Clicar(); ProdutoNaLocalStorage()}}>Adicionar ao carrinho</button>
      </div>
      
      <div className='containers'>
        <img className="imagem3" src={imagem2}></img>
        <p className='tituloProduto'>{titulo}</p>
        <p className='descricaoProduto'>{descricao}</p>
        <p className='precoProduto'>{preco}</p>
        <button className='adicionarCarrinho' onClick={() => {Clicar(); ProdutoNaLocalStorage()}}>Adicionar ao carrinho</button>
      </div>
    </>
  );
}
