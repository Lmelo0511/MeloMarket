import React from "react";
import { useLocation } from "react-router-dom";
import imagem4 from "../Imagens/delivering-coffe.144d0dab.png"

const PedidoConfirmado = () => {

    const {state: {logradouro, bairro, localidade, uf, pagamento}} = useLocation();

    return(
            <div>
                <br></br>
                <br></br>
                <h2 className="Titulo2">Pedido Confirmado</h2>
                <span className="descricao">Agora é só aguardar que logo sua compra chegará até você</span>
                <div className="informacoesFinais">
                    <p>Endereço de entrega:</p>
                    <hr></hr>
                    <br></br>
                    <p>logradouro: {logradouro}</p>
                    <p>Bairro: {bairro}</p>
                    <p>Localização: {localidade}</p>
                    <p>Estado: {uf}</p>
                    <p>Forma de pagamento: {pagamento}</p>
                </div>
                <div>
                    <img 
                        className="imagem4"
                        src={imagem4}
                        alt="imagem de entrega"
                    />
                </div>
            </div>
    )
} 

export default PedidoConfirmado;
