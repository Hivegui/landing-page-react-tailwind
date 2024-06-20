import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importe o CSS do Carousel aqui

// Import RedeSociais
import Gmail from "../../assets/images/gmail2.png";
import Linkedin from "../../assets/images/linkedin2.png";
import Github from "../../assets/images/github2.png";
import Instagram from "../../assets/images/instagram2.png";

// Import Ícones de Idiomas
import EUA from "../../assets/icons/eua.png";
import Spanish from "../../assets/icons/espanha.png";

// Import Portfolio
import PageJS from "../../assets/portfolio/page-js.png";
import SlideJS from "../../assets/portfolio/slide-js.png";
import Angular from "../../assets/portfolio/todo-list.png";
import StockControl from "../../assets/portfolio/stock.png";

const HomePage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Header */}
      <header className="text-white mt-10 flex flex-col items-center">
        <h1 style={{ fontFamily: "Ms Madi" }} className="text-6xl font-bold">
          Guilherme Gomes
        </h1>
        <h3 style={{ fontFamily: "Ms Madi" }} className="text-3xl mt-3">
          Full Stack Software Developer
        </h3>
      </header>

      {/* Links com redes sociais */}
      <div className="text-white mt-10 flex justify-center gap-10">
        <ul className="list-none flex gap-10">
          <li className="flex items-center">
            <img src={Gmail} alt="E-mail" className="w-10 h-10 mx-5" />
            <a
              href="mailto:guifariasgomes@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              E-mail
            </a>
          </li>
          <li className="flex items-center">
            <img src={Linkedin} alt="Linkedin" className="w-10 h-10 mx-5" />
            <a
              href="https://www.linkedin.com/in/guilhermefariasgomes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Linkedin
            </a>
          </li>
          <li className="flex items-center">
            <img src={Github} alt="Github" className="w-10 h-10 mx-5" />
            <a
              href="https://github.com/Hivegui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Github
            </a>
          </li>
          <li className="flex items-center">
            <img src={Instagram} alt="Instagram" className="w-10 h-10 mx-5" />
            <a
              href="https://www.instagram.com/hivegui/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>

      {/* Formação acadêmica */}
      <div className="text-white mt-10 flex flex-col justify-center items-center">
        <h3 style={{ fontFamily: "Honk" }} className="text-3xl font-semibold">
          Formação Acadêmica
        </h3>
        <ul className="list-none mt-5">
          <li className="mt-5 text-justify">
            Cursando Análise e Desenvolvimento de Sistemas - Universidade Veiga
            de Almeida (2022 - 2024)
          </li>
          <li className="mt-5 text-justify">
            Bacharel em Publicidade e Propaganda - Universidade Estácio de Sá
            (2018 - 2023)
          </li>
        </ul>
      </div>

      {/* Hardskills */}
      <div className="text-white mt-10 flex flex-col items-center">
        <h3 style={{ fontFamily: "Honk" }} className="text-3xl font-semibold">
          Tecnologias Utilizadas
        </h3>
        <div className="flex justify-center items-center space-x-4 mt-5">
          <img
            alt="Gui-Js"
            height="30"
            width="40"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
          ></img>
          <img
            alt="Gui-Angular"
            height="30"
            width="40"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg"
          ></img>
          <img
            alt="Gui-Ts"
            height="30"
            width="40"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"
          ></img>
          <img
            alt="Gui-React"
            height="30"
            width="40"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
          ></img>
          <img
            alt="Gui-Java"
            height="40"
            width="50"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
          ></img>
          <img
            alt="Gui-PHP"
            height="30"
            width="40"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
          ></img>
          <img
            alt="Gui-Node"
            height="30"
            width="40"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
          ></img>
          <img
            alt="Gui-Python"
            height="30"
            width="40"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
          ></img>
          <img
            alt="Gui-HTML"
            height="30"
            width="40"
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
          ></img>
          <img
            alt="Gui-Tailwind"
            height="30"
            width="40"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          ></img>
          <img
            alt="Gui-Mysql"
            height="40"
            width="50"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
          ></img>
          <img
            alt="Gui-Postgre"
            height="40"
            width="50"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
          ></img>
        </div>
      </div>

      {/* Idiomas */}
      <div className="text-white mt-10 flex flex-col items-center">
        <h3 style={{ fontFamily: "Honk" }} className="text-3xl font-semibold">
          Idiomas
        </h3>
        <div className="flex mt-4 justify-center items-center space-x-4">
          <li className="flex items-center">
            <img src={EUA} alt="EUA" className="w-10 h-10 mr-2" />
          </li>
          <li className="flex items-center">
            <img src={Spanish} alt="Spain" className="w-10 h-10 mr-2" />
          </li>
        </div>
      </div>

      {/* Experiência Profissional */}
      <div className="text-white mt-10 flex flex-col items-center">
        <h2 style={{ fontFamily: "Honk" }} className="font-bold text-3xl mb-5">
          Experiência Profissional
        </h2>
        <div className="mt-5 max-w-screen-md text-justify">
          <h3 className="text-xl font-semibold text-center">
            Applus+ - Desenvolvedor Full Stack (setembro/2023 - Até o momento)
          </h3>
          <p className="mt-10 font-sans">
            Mantive e atualizei o código do sistema ERP da Applus+, garantindo a
            melhoria contínua da experiência do usuário. Desenvolvi novas
            funcionalidades e implementei regras de negócio, focado na
            usabilidade e eficiência do sistema.
          </p>
          <p className="mt-5 font-sans">
            Colaborei no design e implementação do novo sistema ERP da empresa,
            desempenhando um papel fundamental no desenvolvimento back end e do
            front end com novas tecnologias, como interfaces intuitivas e
            responsivas. Onde aumentei a satisfação do usuário em 40% através de
            otimização e por pesquisas internas.
          </p>
          <p className="mt-5 font-sans">
            Tecnologias utilizadas: Javascript, Angular, React, Typescript,
            Injectable, Data Binding, Pipes, React Hooks, Java, PHP, Laravel,
            Node.js, Spring Boot, CRUD, RESTful API, Python, HTML5, CSS3,
            Tailwind, Git.
          </p>
          <p className="mt-5">Banco de dados: MySQL, PostgreSQL.</p>
          <p className="mt-5">
            Gerenciador de Projetos Ágeis: Azure DevOps, Jira.
          </p>
        </div>
        <div className="mt-10 max-w-screen-md text-justify">
          <h3 className="text-xl font-semibold text-center">
            Applus+ - Estagiário Desenvolvedor Full Stack (junho/2023 -
            setembro-2023)
          </h3>
        </div>
      </div>

      {/* Carroussel Portfolio */}
      <div className="mt-10 text-white flex flex-col items-center mb-20">
        <h2 style={{ fontFamily: "Honk" }} className="mb-4 text-3xl font-bold">
          Portfolio
        </h2>
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false} // Remover o status do carrossel
          showThumbs={false} // Remover os thumbs do carrossel
          centerMode={true} // Centralizar os slides
          centerSlidePercentage={50} // Porcentagem do tamanho do slide central
          dynamicHeight={false} // Desativar a altura dinâmica
          interval={5000} // Tempo de exibição de cada slide (5 segundos)
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="custom-prev-arrow"
              >
                &lt;
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="custom-next-arrow"
              >
                &gt;
              </button>
            )
          }
        >
          <div className="md:basis-1/3 lg:basis-1/4 mt-10 mb-20">
            <img
              src={PageJS}
              alt="PageJS"
              style={{
                maxWidth: "80%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="md:basis-1/3 lg:basis-1/4 mt-10 mb-20">
            <img
              src={SlideJS}
              alt="SlideJS"
              style={{
                maxWidth: "80%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="md:basis-1/3 lg:basis-1/4 mt-10 mb-20">
            <img
              src={Angular}
              alt="Angular"
              style={{
                maxWidth: "80%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="md:basis-1/3 lg:basis-1/4 mt-10 mb-20">
            <img
              src={StockControl}
              alt="StockControl"
              style={{
                maxWidth: "90%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </Carousel>
      </div>

      <footer className="bg-zinc-900 text-center py-3">
        <div className="container mx-auto">
          <p className="text-sm text-white">
            &copy; {currentYear}{" "}
            <a
              href="https://www.linkedin.com/in/guilhermefariasgomes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Guilherme Gomes.{" "}
            </a>
            Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
