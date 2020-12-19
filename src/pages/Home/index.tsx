import React from 'react';
import {
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaGithubSquare,
} from 'react-icons/fa';

import LogoMenu from '../../assets/images/logo-menu.svg';
import Logo from '../../assets/images/logo.svg';
import ImgProject from '../../assets/images/api-github.png';
import ImgProject2 from '../../assets/images/semana-omnistack-11.png';
import ImgProject3 from '../../assets/images/nlw2.2.png';
import ImgProject4 from '../../assets/images/ecoleta.svg';
import ImgProject5 from '../../assets/images/login-jwt.svg';
import ImgProject6 from '../../assets/images/login-passport.svg';
import ImgPerfil from '../../assets/images/perfil.jpg';
import ArrowDown from '../../assets/images/arrow-down.png';
import FotoPerfil from '../../assets/images/foto-perfil.png';
import BackgroundTechs from '../../assets/images/bg-techs.png';
import BackgroundTechsWeb from '../../assets/images/bg-techs-web.png';

import './styles.css';

const Home: React.FC = () => {
  return (
    <main className="page-main">
      <header id="page-header" className="page-header">
        <nav className="menu-header">
          <span className="img-logo-menu">
            <a href="#page-header">
              <img src={LogoMenu} alt="Andrey Araújo" />
            </a>
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
            <a
              href="https://www.instagram.com/andreyaraujo.dev/"
              target="blank"
            >
              <li>
                <FaInstagramSquare size={24} />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/jacksson-andrey/"
              target="blank"
            >
              <li>
                <FaLinkedin size={24} />
              </li>
            </a>
            <a href="https://www.facebook.com/andreyaraujo.dev" target="blank">
              <li>
                <FaFacebookSquare size={24} />
              </li>
            </a>
            <a href="https://github.com/JackssonAndrey" target="blank">
              <li>
                <FaGithubSquare size={24} />
              </li>
            </a>
          </ul>
        </aside>

        <aside className="logo-right">
          <img src={Logo} alt="Andrey Araújo" />
        </aside>
      </div>

      <div className="img-arrow-down">
        <img src={ArrowDown} alt="Arrow down" />
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

            <p>
              Aplicação para busca de perfis e repositórios do GitHub. Com
              frontend em React, consumindo API do GitHub.
            </p>

            <span className="card-footer">
              <a
                href="https://github.com/JackssonAndrey/api-github-repos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn-view-code">
                  Código
                </button>
              </a>
            </span>
          </div>

          <div className="card-project">
            <span className="card-img">
              <img src={ImgProject2} alt="Imagem projeto" />
            </span>

            <p>
              Aplicação criada na Semana OmniStack 11. Para conectar ONGs e
              outras instituições a pessoas que tem disponibilidade para ajudar
            </p>

            <span className="card-footer">
              <a
                href="https://github.com/JackssonAndrey/be-the-hero"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn-view-code">
                  Código
                </button>
              </a>
            </span>
          </div>

          <div className="card-project">
            <span className="card-img">
              <img src={ImgProject3} alt="Imagem projeto" />
            </span>

            <p>
              Aplicação criada na Next Level Week 02, da Rocketseat. Serve para
              auxiliar na conexão entre os alunos e os professores.
            </p>

            <span className="card-footer">
              <a
                href="https://github.com/JackssonAndrey/next-level-week-02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn-view-code">
                  Código
                </button>
              </a>
            </span>
          </div>

          <div className="card-project">
            <span className="card-img">
              <img src={ImgProject4} alt="Imagem projeto" />
            </span>

            <p>
              É uma forma de conectar entidades de coleta de resíduos orgânicos
              e inorgânicos as pessoas que precisam descartar seus resíduos.
            </p>

            <span className="card-footer">
              <a
                href="https://github.com/JackssonAndrey/next-level-week"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn-view-code">
                  Código
                </button>
              </a>
            </span>
          </div>

          <div className="card-project">
            <span className="card-img">
              <img src={ImgProject5} alt="Imagem projeto" />
            </span>

            <p>
              Aplicação feita com backend em Nodejs e frontend em React.
              Trata-se de um login básico usando JWT.
            </p>

            <span className="card-footer">
              <a
                href="https://github.com/JackssonAndrey/login-jwt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn-view-code">
                  Código
                </button>
              </a>
            </span>
          </div>

          <div className="card-project">
            <span className="card-img">
              <img src={ImgProject6} alt="Imagem projeto" />
            </span>

            <p>
              Aplicação para login de usuários com passport, usando
              LocalStrategy. Com backend em Nodejs e frontend usando EJS.
            </p>

            <span className="card-footer">
              <a
                href="https://github.com/JackssonAndrey/login-passport"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn-view-code">
                  Código
                </button>
              </a>
            </span>
          </div>
        </article>
      </div>

      <div id="about-me" className="about-me">
        <h1>Quem sou eu?</h1>
        <div className="area-about-me">
          <aside className="text-about-me">
            <p>
              Fala dev, sou Andrey Araújo, atualmente sou desenvolvedor Full
              Stack. Programo em PHP, Lavavel, Javascript, Nodejs, React, React
              Native, mas confesso que minha stack favorita é Nodejs, React e
              React Native. Sou formado em Análise e Desenvolvimento de
              Sistemas. Tive o primeiro contato com programação ainda no ensino
              médio. Desde então sempre procuro desenvolver pequenos e médios
              sistemas, para estar em constante aprendizado. Os erros do dia a
              dia nos fazem crescer e amadurecer como desenvolvedores e
              profissionais.
            </p>
            <p>
              Atualmente trabalho como freelancer no desenvolvimento web, desde
              sites simples até sistemas mais complexos. Caso queira saber mais
              a respeito, minhas redes socias estão mais em baixo para entrar em
              contato comigo.
            </p>
          </aside>

          <aside className="img-about-me">
            <img src={ImgPerfil} alt="Andrey Araújo" />
            <img
              src={FotoPerfil}
              className="img-perfil-mobile"
              alt="Andrey Araújo"
            />
          </aside>
        </div>
      </div>

      <div id="technologies" className="technologies">
        <h1>Algumas das tecnologias que mais utilizo no dia a dia</h1>
        <div className="images-techs">
          <img src={BackgroundTechsWeb} className="bg-techs-web" alt="Techs" />
          <img src={BackgroundTechs} className="bg-techs-mobile" alt="Techs" />
        </div>
      </div>

      <div className="info-mobile">
        <p>
          Quer saber quais projetos já fiz ou estou fazendo? Visita meu Github,
          la tem tudo bem explicado.
        </p>
        <p>
          Se tiver alguma dúvida, minhas redes sociais estão ai em baixo,
          aproveita e me segue também, compartilho muito conteúdo da área,
          aposto que vai gostar e te ajudar em algum momento.
        </p>
      </div>

      <footer id="footer" className="footer">
        <ul className="list-social">
          <a href="https://www.instagram.com/andreyaraujo.dev/" target="blank">
            <li>
              <FaInstagramSquare size={24} />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/jacksson-andrey/" target="blank">
            <li>
              <FaLinkedin size={24} />
            </li>
          </a>
          <a href="https://www.facebook.com/andreyaraujo.dev" target="blank">
            <li>
              <FaFacebookSquare size={24} />
            </li>
          </a>
          <a href="https://github.com/JackssonAndrey" target="blank">
            <li>
              <FaGithubSquare size={24} />
            </li>
          </a>
        </ul>

        <a href="#page-header">
          <img src={Logo} alt="Andrey Araújo" className="img-footer" />
        </a>

        <p>
          Desenvolvido e criado por Andrey Araújo - {new Date().getFullYear()}
        </p>
        <p>andreyaraujo.dev</p>
      </footer>
    </main>
  );
};

export default Home;
