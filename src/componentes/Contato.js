import React from "react";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import testarConexao from "../testeConexao/testeConexao";

function Contato() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }

  const conexaoBanco = () => {
    testarConexao();
  }

  const style = {
    color: 'red'
  };

  console.log(watch("example"));

  return (
    <div>
      <div className='mapaEFormulario'>
        <div className='tituloEMapa'>
          <h1 className='titulo1'>Nossa Localização</h1>
          <hr className='Linha'></hr>
          <iframe className='Mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14674.513656401921!2d-47.048865272178425!3d-23.147253736406817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf314519fb0a1f%3A0x2c623dbdcb47eef7!2sMercado%20Tr%C3%AAs%20Pontano!5e0!3m2!1spt-BR!2sbe!4v1701189866919!5m2!1spt-BR!2sbe" ></iframe>
        </div>

        <form className='formulario' onSubmit={handleSubmit(onSubmit)}>
          <h2 className='titulo2'>Dúvida ou Sugestão</h2>
          <hr className='Linha'></hr>
          <div className='secaoNome'>
            <FaUser size={30} color='black'/>
            <input placeholder=" Nome:" className='inserindoNome'
              {...register("firstName", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i
              })}
            />
          </div>
          {errors?.firstName?.type === "required" && <p className="notificacao" style={style}>O campo nome é obrigatório!</p>}
          {errors?.firstName?.type === "maxLength" && (<p className="notificacao" style={style}>Primeiro nome não pode exceder 20 caracteres!</p>)}
          {errors?.firstName?.type === "pattern" && (<p className="notificacao" style={style}>Somente caracteres alfabético!</p>)}

          <div className='secaoEmail'>
            <MdEmail size={30} color='black'/>
            <input className="inserindoEmail" placeholder=" E-mail:" {...register("email", { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
          </div> 
          {errors?.texto?.type === "required" && <p className="notificacao" style={style}>O campo e-mail é obrigatório!</p>} 
          {errors?.email?.type === "pattern" && (<p className="notificacao" style={style}>Digite um e-mail válido!</p>)}

          <div className='secaoTexto'>
            <textarea 
                className='inserindoTexto' 
                placeholder=' Mensagem:' 
                type='text' 
                {...register("texto", {
                    required: true,
                    message: "Digite uma dúvida ou sugestão!",
                    pattern: /^[A-Za-z]+$/i
                })}>
            </textarea> 
          </div>
          {errors?.texto?.type === "required" && <p className="notificacao" style={style}>O campo mensagens é obrigatório!</p>}

          <div className='primeiroBotao'>
            <button className='botaoEnviar' onClick={conexaoBanco} type='submit'><Link className='linkLogo' to='/'>Enviar</Link>  </button>  
          </div>      
        </form>
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

export default Contato;
