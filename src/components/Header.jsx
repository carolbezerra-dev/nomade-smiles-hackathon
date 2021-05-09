import React from 'react';
import headerURLs from '../URLs';
import SmilesLogo from '../images/header/smiles-logo.svg';
import '../css/header.css';

function Header() {
  const { toSmilesHome, toSmilesHelp, toSmilesSignUp, toSmilesSignIn } = headerURLs;
  return (
    <header className='main-container'>
      <nav className='nav-container'>
        <>
          <a href={ toSmilesHome } className='logo-link'>
            <img alt='smiles-logo' src={ SmilesLogo } className='logo-img' />
          </a>
        </>
        <div className='right-div-links'>
          <a href={ toSmilesHelp } className='help-link'>Ajuda</a>
          <a href={ toSmilesSignUp } className='signup-link'>Cadastre-se</a>
          <a href={ toSmilesSignIn } className='signin-link'>Entrar</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
