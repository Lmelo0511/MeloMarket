import React from "react";

export const FormularioCarrinho = () => {
    return(
        <div>
            <div className="formCarrinhoPrincipal">
                <h1 className="tituloFormCarrinho">Endreço de Entrega</h1>
                <p className="descricaoFormCarrinho">Informe o endereço onde deseja receber seu pedido</p>
                <br></br>
                <div className="formCarrinho">
                    <input className="CEP" placeholder="Informe seu CEP:"></input>
                    <input className="rua" placeholder="Informe sua Rua:"></input>
                    <div className="numeroEComplemento">
                        <input className="numero" placeholder="Número:"></input>
                        <input className="complemento" placeholder="Complemento:"></input>
                    </div>
                    <div className="bairroCidadeEEstado">
                        <input className="bairro" placeholder="Bairro:"></input>
                        <input className="cidade" placeholder="CIdade:"></input>
                        <input className="estado" placeholder="Estado:"></input>
                    </div>
                </div>
            </div>
            <div className="formPagamento">
                <h2 className="tituloFormPagamento">Pagamento</h2>
                <p className="descricaoFormPagamento">O pagamento é feito na entrega. Escolha a forma que desejar</p>
                <button className="botaoOpcao">Cartão de Crédito</button>
                <button className="botaoOpcao">Cartão de Débito</button>
                <button className="botaoOpcao dinheiro">Dinheiro</button>
            </div>
        </div>
    );
}

export default FormularioCarrinho;
