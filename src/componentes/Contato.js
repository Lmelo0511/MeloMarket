import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";

function Contato() {

    return (
        <div className='corpo'>
            <div className='mapaEFormulario'>
                <div className='tituloEMapa'>
                    <h1 className='titulo1'>Nossa Localização</h1>
                    <hr className='Linha'></hr>
                    <iframe className='Mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14674.513656401921!2d-47.048865272178425!3d-23.147253736406817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf314519fb0a1f%3A0x2c623dbdcb47eef7!2sMercado%20Tr%C3%AAs%20Pontano!5e0!3m2!1spt-BR!2sbe!4v1701189866919!5m2!1spt-BR!2sbe" ></iframe>
                </div>
                <form className='formulario'>
                    <h2 className='titulo2'>Dúvida ou Sugestão</h2>
                    <div className='secaoNome'>
                        <FaUser size={25} color='black'/><input className='inserindoNome' placeholder=' Nome:'></input>  
                    </div>
                    <div className='secaoEmail'>
                        <MdEmail size={25} color='black'/><input className='inserindoEmail' placeholder=' E-mail:'></input>
                    </div>
                    <div className='secaoTexto'>
                        <textarea className='inserindoTexto' placeholder=' Mensagem:'></textarea>  
                    </div>
                    <div className='primeiroBotao'>
                        <button className='botaoEnviar'>Enviar</button>  
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
