import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Roteador from './roteador';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

function App() {

  const[menuAberto, setMenuAberto] = useState(false);

  function paginas(){
    setMenuAberto(!menuAberto);
  }

  return (
    <div className="secao1">
      <div className='componente'>
        <header className="cabecalho">
          <button className="botaoMenu" onClick={paginas}>
            <GiHamburgerMenu size={30} color="black"/>
            {menuAberto && (
              <div className='navBar'>
                <div className='meusLinks'>
                  <Link className='atalhos' to='contato'>Contato</Link>
                  <Link className='atalhos' to='promocoes'>Promocoes</Link>
                  <Link className='atalhos' to='sobre'>Sobre</Link>
                </div>                  
              </div>
            )}
          </button>
          <p className='Logo'>
            <Link className='linkLogo' to='home'>MeloMarket</Link>  
          </p>
        </header> 
        <Roteador/>
      </div>
    </div>
  );
}

export default App;
