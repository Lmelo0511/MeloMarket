import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Promocoes(){
    return(
        <div>
            <br></br>
            <div className="tituloEHistoria">
                <h1 className="Titulo">Nossa história</h1>
                <p className="textoHistoria">
                    MeloMarket é uma plataforma online fundado por Lucas melo. Uma das características <br/>
                    marcantes do MeloMarket é o foco na experiência do cliente, garantindo conveniência, <br/>
                    variedade e qualidade. Eles trabalham com uma rede diversificada de fornecedores, <br/> 
                    priorizando a qualidade dos produtos oferecidos aos clientes. A empresa também se <br/> 
                    destaca por suas práticas sustentáveis, promovendo embalagens ecológicas, parcerias <br/>
                    com produtores locais e iniciativas de responsabilidade social. E com uma estratégia <br/>
                    de expansão agressiva, o MeloMarket planeja abrir novas filiais em diferentes regiões,<br/>
                    aproveitando a logística eficiente e a infraestrutura tecnológica para alcançar um <br/>
                    público mais amplo.
                </p>
            </div>
            <footer className='rodape'>
                <div className='Informacao'>
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

export default Promocoes;
