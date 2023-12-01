import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useForm } from 'react-hook-form'
import { useState } from 'react'

    function Contato(){

        const { register, reset, errors } = useForm();
        const [nomeValue, setNomeValue] = useState('');
        const [emailValue, setEmailValue] = useState('');
        const [textoValue, setTextoValue] = useState('');
        
        const handleNomeChange = (event) => {
            setNomeValue(event.target.value);
        };
        
        const handleEmailChange = (event) => {
            setEmailValue(event.target.value);
        };
        
        const handleTextoChange = (event) => {
            setTextoValue(event.target.value);
        };
        
        const handleSubmit = () => {
            if(nomeValue.trim() === '' || emailValue.trim() === '' || textoValue.trim() === ''){
                //alert("Campos vazios! Por favor Preencha-os");
            }
        }
        
        function onSubmit(){
            alert("Obrigado pela seu envio!");
            reset();
        }
        
        return (
            <div className='corpo'>
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
                          <input
                            className='inserindoNome'
                            name='nome'
                            placeholder=' Nome'
                            value={nomeValue}
                            onChange={handleNomeChange}
                            {...register("nome", {
                              required: "Digite seu Nome!",
                            })}
                          />
                        </div>
                        {errors && errors.nome && <p className='erro'>{errors.nome.message}</p>}
                        
                        <div className='secaoEmail'>
                          <MdEmail size={30} color='black'/>
                          <input
                            name='email'
                            type='email'
                            className='inserindoEmail'
                            placeholder=' E-mail:'
                            value={emailValue}
                            onChange={handleEmailChange}
                            {...register("email",{
                              required: "Digite um e-mail",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Digite um e-mail válido',
                              }
                            })}
                          />
                        </div>
                        {errors && errors.email && <p className='erro'>{errors.email.message}</p>}
                        
                        <div className='secaoTexto'>
                            <textarea 
                                className='inserindoTexto' 
                                placeholder=' Mensagem:' 
                                type='text' 
                                name='texto' 
                                value={textoValue}
                                onChange={handleTextoChange}
                                {...register("texto", {
                                    required: "Digite uma dúvida ou sugestão!"
                                })}>
                            </textarea> 
                        </div>
                        {errors && errors.texto && <p className='erro'>{errors.texto.message}</p>}
                        <div className='primeiroBotao'>
                            <button className='botaoEnviar' type='submit'>Enviar</button>  
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
