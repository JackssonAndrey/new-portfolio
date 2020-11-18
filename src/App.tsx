import React from 'react';
import {
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaGithubSquare,
} from 'react-icons/fa';

import LogoMenu from './assets/images/logo-menu.svg';
import Logo from './assets/images/logo.svg';
import ImgProject from './assets/images/nlw2.png';
import ImgProject2 from './assets/images/nlw2.2.png';
import ImgProject3 from './assets/images/nlw3.png';
import ImgPerfil from './assets/images/perfil.jpg';

import './App.css';

const App: React.FC = () => {
  return (
    <main className="page-main">
      <header className="page-header">
        <nav className="menu-header">
          <span className="img-logo-menu">
            <img src={LogoMenu} alt="Andrey Araújo" />
          </span>

          <ul className="list-menu">
            <li>Home</li>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Contatos</li>
          </ul>
        </nav>
      </header>

      <div className="apresentation">
        <aside className="text-left">
          <h1>Andrey Araújo</h1>
          <h1>Desenvolvedor Full Stack</h1>
          <p>
            Criando soluções inteligentes para <br />
            seus problemas cotidianos.
          </p>

          <ul className="list-social">
            <li>
              <FaInstagramSquare size={24} />
            </li>
            <li>
              <FaLinkedin size={24} />
            </li>
            <li>
              <FaFacebookSquare size={24} />
            </li>
            <li>
              <FaGithubSquare size={24} />
            </li>
          </ul>
        </aside>

        <aside className="logo-right">
          <img src={Logo} alt="Andrey Araújo" />
        </aside>
      </div>

      <div className="my-projects">
        <h1>Meus Projetos</h1>
        <h4>
          Abaixo estão alguns dos projetos pessoais e profissionais que já
          realizei.
        </h4>

        <article className="projects">
          <div className="card-project">
            <span className="card-img">
              <img src={ImgProject} alt="Imagem projeto" />
            </span>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

            <span className="card-footer">
              <button type="button" className="btn-view-code">
                Código
              </button>
            </span>
          </div>

          <div className="card-project">
            <span className="card-img">
              <img src={ImgProject2} alt="Imagem projeto" />
            </span>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

            <span className="card-footer">
              <button type="button" className="btn-view-code">
                Código
              </button>
            </span>
          </div>

          <div className="card-project">
            <span className="card-img">
              <img src={ImgProject3} alt="Imagem projeto" />
            </span>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

            <span className="card-footer">
              <button type="button" className="btn-view-code">
                Código
              </button>
            </span>
          </div>

          <div className="card-project">
            <span className="card-img">
              <img src={ImgProject} alt="Imagem projeto" />
            </span>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

            <span className="card-footer">
              <button type="button" className="btn-view-code">
                Código
              </button>
            </span>
          </div>

          <div className="card-project">
            <span className="card-img">
              <img src={ImgProject2} alt="Imagem projeto" />
            </span>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

            <span className="card-footer">
              <button type="button" className="btn-view-code">
                Código
              </button>
            </span>
          </div>

          <div className="card-project">
            <span className="card-img">
              <img src={ImgProject3} alt="Imagem projeto" />
            </span>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

            <span className="card-footer">
              <button type="button" className="btn-view-code">
                Código
              </button>
            </span>
          </div>
        </article>
      </div>

      <div className="about-me">
        <h1>Sobre</h1>
        <div className="area-about-me">
          <aside className="text-about-me">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
              provident eveniet omnis modi iusto doloremque iure tenetur
              laborum. Unde possimus alias rerum id, est culpa consequuntur
              minus soluta omnis at. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Ducimus, provident eveniet omnis modi iusto
              doloremque iure tenetur laborum. Unde possimus alias rerum id, est
              culpa consequuntur minus soluta omnis at.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
              provident eveniet omnis modi iusto doloremque iure tenetur
              laborum. Unde possimus alias rerum id, est culpa consequuntur
              minus soluta omnis at. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Ducimus, provident eveniet omnis modi iusto
              doloremque iure tenetur laborum. Unde possimus alias rerum id, est
              culpa consequuntur minus soluta omnis at.
            </p>
          </aside>

          <aside className="img-about-me">
            <img src={ImgPerfil} alt="Andrey Araújo" />
          </aside>
        </div>
      </div>
    </main>
  );
};

export default App;
