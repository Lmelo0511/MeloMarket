import React, { useState } from "react";
import API from "../servicos/api";
import { IoSearchSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ContextoTema } from "../contexto/ContextoTema";
import { useContext } from "react";

export const FormularioCarrinho = () => {

    const {total, LimparCarrinho} = useContext(ContextoTema);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    const estilo = {
        color: 'red'
    };

    const [input, setInput] = useState();
    const [cep, setCep] = useState({});
    const [pagamento, setPagamento] = useState(null);

    async function enviarDados(){

        if(input === ""){
            alert("Preencha o campo CEP!");
        }

        try{
            const resposta = await API.get(`${input}/json`);
            setCep(resposta.data)
            console.log(resposta)
        } catch{
            alert("Erro ao bucar o CEP! insira um CEP válido")
            setInput("");
        }
    };

    const selecionarFormaPagamento = (formaPagamento) => {
        setPagamento(formaPagamento);

    };

    const enviandoFormulario = () => {
        const enviarDados = {
            logradouro: cep.logradouro,
            bairro: cep.bairro,
            localidade: cep.localidade,
            uf: cep.uf,
            pagamento: pagamento,
        };

        navigate('/confirmado', {state: enviarDados});
        LimparCarrinho();
    };

    return(
        <>
            <div className="todosFormularios">
                <form className="formCarrinhoPrincipal" onSubmit={handleSubmit(onSubmit)}>
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
                            <input className="numero" placeholder="Número:"
                                {...register("numero", {
                                    required: true,
                                    maxLength: 5,
                                })}>
                            </input>
                            <input className="complemento" placeholder="Complemento:"></input>
                        </div>
                        {errors?.numero?.type === "required" && <p className="notificacao" style={estilo}>O campo número é obrigatório!</p>}

                        <div className="bairroCidadeEEstado">
                            <span className="bairro" placeholder="Bairro:">Bairro: {cep.bairro}</span>
                            <span className="cidade" placeholder="Cidade:">Cidade: {cep.localidade}</span>
                            <span className="estado" placeholder="Estado:">UF: {cep.uf}</span>
                        </div>
                    </div>
                </form>
                <div className="formPagamento">
                    <h2 className="tituloFormPagamento">Pagamento</h2>
                    <p className="descricaoFormPagamento">O pagamento é feito na entrega. Escolha a forma que desejar</p>
                    <button className="botaoOpcao" onClick={() => selecionarFormaPagamento('crédito')}
                        {...register("pagamento", {
                            required: true,
                        })}>Cartão de Crédito</button>
                    <button className="botaoOpcao" onClick={() => selecionarFormaPagamento('débito')}
                        {...register("pagamento", {
                            required: true,
                        })}>Cartão de Débito</button>
                    <button className="botaoOpcao dinheiro" onClick={() => selecionarFormaPagamento('dinheiro')}
                        {...register("pagamento", {
                            required: true,
                        })}>Dinheiro</button>
                    {errors?.pagamento?.type === "required" && <p className="notificacao" style={estilo}>Informe um método de pagamento</p>}
                </div>
                <div className="metodoPagamento">
                    <p className="Total">Total: <br></br>R$ {total} <button className="confirmarPedido" onClick={enviandoFormulario}><Link className="atalho" to='confirmado'>confirmar pedido</Link></button></p>
                </div>
            </div>
        </>
    );
}

export default FormularioCarrinho;
