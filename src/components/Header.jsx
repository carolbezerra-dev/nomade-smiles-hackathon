import React from 'react';
import SmilesLogo from '../images/header/smiles-logo.svg';

function Header() {
  const URLsmilesHome = 'https://www.smiles.com.br/home';
  const URLsmilesHelp = 'https://www.smiles.com.br/fale-com-a-gente';
  const URLsmilesSignUp = 'https://www.smiles.com.br/cadastro';
  const URLsmilesSignIn = 'https://smiles.com.br/login';

  return (
    <header>
      <nav>
        <a href={ URLsmilesHome }>
          <img alt='smiles-logo' src={ SmilesLogo } />
        </a>
        <a href={ URLsmilesHelp }>Ajuda</a>
        <a href={ URLsmilesSignUp }>Cadastre-se</a>
        <button type='button' onClick={ () => window.location.href = URLsmilesSignIn }>
          Entrar
        </button>
      </nav>
    </header>
  );
}

export default Header;
