import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { GiHamburgerMenu } from "react-icons/gi";
import Rotas from './rotas';
import { Link } from 'react-router-dom';

function App() {

  const[menuAberto, setMenuAberto] = useState(false);

  function paginas(){
    setMenuAberto(!menuAberto);
  }

  return (
    <div className="secao1">
      <div>
        <header className="cabecalho">
          <button className="botaoMenu" onClick={paginas}>
            <GiHamburgerMenu size={30} color="black"/>
            {menuAberto && (
              <div className='navBar'>
                <div className='meusLinks'>
                  <Link className='atalhos' to='./componentes/Contato'>Contatos</Link>
                  <Link className='atalhos' to='./componentes/Promocoes'>Promocoes</Link>
                  <Link className='atalhos' to='./componentes/Sobre'>Sobre</Link>
                </div>                  
              </div>
            )}
          </button>
          <p className='Logo'>MeloMarket</p>
        </header>
        <Rotas/>
      </div>
    </div>
  );
}

export default App;
