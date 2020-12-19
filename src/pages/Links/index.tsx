import React from 'react';

import ImgPerfil from '../../assets/images/foto-perfil.png';
import Logo from '../../assets/images/logo.svg';

import './styles.css';
import '../../App.css';

const Links: React.FC = () => {
  return (
    <>
      <header>
        <img src={ImgPerfil} alt="andrey araujo" />
        <p>andreyaraujo.dev</p>
        <p>Links úteis caso queira me conhecer mais.</p>
      </header>
      <main>
        <a
          href="https://andreyaraujo.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="btn">
            Portfólio
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/jacksson-andrey/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="btn">
            LinkedIn
          </button>
        </a>
        <a
          href="https://github.com/JackssonAndrey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="btn">
            GitHub
          </button>
        </a>
        <a
          href="mailto:jaab.andrey@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="btn">
            E-mail
          </button>
        </a>
        <a
          href="https://twitter.com/andreydev_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="btn">
            Twitter
          </button>
        </a>
      </main>

      <footer id="footer" className="footer">
        <img src={Logo} alt="Andrey Araújo" className="img-footer" />

        <p>
          Desenvolvido e criado por Andrey Araújo - {new Date().getFullYear()}
        </p>
        <p>andreyaraujo.dev</p>
      </footer>
    </>
  );
};

export default Links;
