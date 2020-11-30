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
import LogoPython from './assets/images/logo-python.png';
import LogoJs from './assets/images/logo-js.png';
import LogoNode from './assets/images/logo-nodejs.png';
import LogoTs from './assets/images/logo-ts.png';
import LogoPhp from './assets/images/logo-php.png';
import LogoDjango from './assets/images/logo-django.png';
import LogoBootstrap from './assets/images/logo-bootstrap.png';
import LogoJquery from './assets/images/logo-jquery.png';
import LogoMaterial from './assets/images/logo-materialui.png';
import LogoLaravel from './assets/images/logo-laravel.png';
import LogoReact from './assets/images/logo-react.png';
import LogoGithub from './assets/images/logo-github.png';
import LogoCss from './assets/images/logo-css.png';
import LogoHtml from './assets/images/logo-html.png';
import LogoMysql from './assets/images/logo-mysql.png';
import LogoAws from './assets/images/logo-aws.png';
import LogoHeroku from './assets/images/logo-heroku.png';

import './App.css';

const App: React.FC = () => {
  return (
    <main className="page-main">
      <header id="page-header" className="page-header">
        <nav className="menu-header">
          <span className="img-logo-menu">
            <img src={LogoMenu} alt="Andrey Araújo" />
          </span>

          <ul className="list-menu">
            <li>
              <a href="#page-header">Home</a>
            </li>
            <li>
              <a href="#about-me">Sobre</a>
            </li>
            <li>
              <a href="#my-projects">Projetos</a>
            </li>
            <li>
              <a href="#footer">Contatos</a>
            </li>
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

      <div id="my-projects" className="my-projects">
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

      <div id="about-me" className="about-me">
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

        <div className="area-btn">
          <button type="button" className="btn-view-curriculum">
            Veja meu currículo
          </button>
        </div>
      </div>

      <div id="technologies" className="technologies">
        <h1>Tecnologias</h1>
        <div className="images-techs">
          <ul className="list-techs-1">
            <li>
              <img src={LogoPython} alt="Python" />
            </li>
            <li>
              <img src={LogoJs} alt="Javascript" />
            </li>
            <li>
              <img src={LogoNode} alt="Nodejs" />
            </li>
            <li>
              <img src={LogoTs} alt="Typescript" />
            </li>
            <li>
              <img src={LogoPhp} alt="PHP" />
            </li>
          </ul>

          <ul className="list-techs-2">
            <li>
              <img src={LogoDjango} alt="Django" />
            </li>
            <li>
              <img src={LogoBootstrap} alt="Bootstrap" />
            </li>
            <li>
              <img src={LogoJquery} alt="JQuery" />
            </li>
            <li>
              <img src={LogoMaterial} alt="Material-ui" />
            </li>
            <li>
              <img src={LogoLaravel} alt="Laravel" />
            </li>
            <li>
              <img src={LogoReact} alt="React" />
            </li>
          </ul>

          <ul className="list-techs-3">
            <li>
              <img src={LogoGithub} alt="Github" />
            </li>
            <li>
              <img src={LogoCss} alt="CSS" />
            </li>
            <li>
              <img src={LogoHtml} alt="HTML" />
            </li>
            <li>
              <img src={LogoMysql} alt="MySQL" />
            </li>
            <li>
              <img src={LogoAws} alt="AWS" />
            </li>
            <li>
              <img src={LogoHeroku} alt="Heroku" />
            </li>
          </ul>
        </div>
      </div>

      <footer id="footer" className="footer">
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
        <img src={Logo} alt="Andrey Araújo" className="img-footer" />

        <p>Desenvolvido e criado por Andrey Araújo - 2020</p>
        <p>andreyaraujo.dev</p>
      </footer>
    </main>
  );
};

export default App;
