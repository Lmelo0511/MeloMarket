import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import imagem3 from "../Imagens/carrossel-img2.jpg";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import FormularioCarrinho from "./FormularioCarrinho"
import { ContextoTema } from "../contexto/ContextoTema";

const Carrinho = () => {

    const {produtos, AdicionarQuantia, RemoverQuantia, total, RemoverProduto, LimparCarrinho} = useContext(ContextoTema);

    return(
        <div className="secao1">
            <br></br>
            <button className="limparCarrinho" onClick={LimparCarrinho}>Limpar Carrinho</button>
            <h1 className="tituloCarrinho">Seu carrinho</h1>
            <div>
                <FormularioCarrinho />
            </div>
            <ul>
                {produtos?.map((produto, index) => (
                    <li key={index}>
                    <div className='containers2'>
                        <button className="botaoApagar" onClick={RemoverProduto}>
                            <FaRegTrashAlt size={30} color="black"/>
                        </button>
                            <img className="imagem3" src={imagem3}></img>
                            <p className='tituloProduto'>{produto.titulo}</p>
                            <p className='descricaoProduto'>{produto.descricao}</p>
                            <p className='precoProduto'>{produto.preco}</p>  
                        <div className='container2'>
                            <button className="botaoRemover" onClick={RemoverQuantia}>
                                <AiFillMinusCircle size={30} color="black"/>
                            </button>
                            <p>Quantidade: {produto.quantidade}</p>
                            <button className="botaoAdicionar" onClick={AdicionarQuantia}>
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
    )
}

export default Carrinho;
