import React, { useState } from "react";
import API from "../servicos/api";
import { IoSearchSharp } from "react-icons/io5";

export const FormularioCarrinho = () => {

    const [input, setInput] = useState();
    const [cep, setCep] = useState({});

    async function enviarDados(){
        if(input === ''){
            alert("Por favor insira um CEP!");
            return;
        }

        try{
            const resposta = await API.get(`${input}/json`);
            setCep(resposta.data)
        } catch{
            alert("Erro ao bucar o CEP! insira um CEP válido")
            setInput("");
        }
    }

    return(
        <div>
            <div className="formCarrinhoPrincipal">
                <h1 className="tituloFormCarrinho">Endreço de Entrega</h1>
                <p className="descricaoFormCarrinho">Informe o endereço onde deseja receber seu pedido</p>
                <br></br>
                <div className="formCarrinho">
                    <div className="inputEBotao">
                        <input className="CEP" placeholder="Informe seu CEP:" value={input} onChange={(e) => setInput(e.target.value)}></input>
                        <button className="botaoPesquisa" onClick={enviarDados}><IoSearchSharp size={30} color="white"/></button>
                    </div>
                    <span className="rua" placeholder="Informe sua Rua:">Rua: {cep.logradouro}</span>
                    <div className="numeroEComplemento">
                        <input className="numero" placeholder="Número:"></input>
                        <input className="complemento" placeholder="Complemento:"></input>
                    </div>
                    <div className="bairroCidadeEEstado">
                        <span className="bairro" placeholder="Bairro:">Bairro: {cep.bairro}</span>
                        <span className="cidade" placeholder="Cidade:">Cidade: {cep.localidade}</span>
                        <span className="estado" placeholder="Estado:">UF: {cep.uf}</span>
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
