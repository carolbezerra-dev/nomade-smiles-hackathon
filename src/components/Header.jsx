import React from 'react';
import headerURLs from '../URLs';
import SmilesLogo from '../images/header/smiles-logo.svg';
import '../css/header.css';

function Header() {
  const { toSmilesHome, toSmilesHelp, toSmilesSignUp, toSmilesSignIn } = headerURLs;
  return (
    <header class='main-container'>
      <nav cl>
        <a href={ toSmilesHome }>
          <img alt='smiles-logo' src={ SmilesLogo } />
        </a>
        <a href={ toSmilesHelp }>Ajuda</a>
        <a href={ toSmilesSignUp }>Cadastre-se</a>
        <button type='button' onClick={ () => window.location.href = toSmilesSignIn }>
          Entrar
        </button>
      </nav>
    </header>
  );
}

export default Header;
