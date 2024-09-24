import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex">
          <h1>Sobre nós</h1>
        </div>

        <p>
        Bem-vindo a Flashcard.io

        Os flashcards são ferramentas de estudo simples e eficazes, compostas por cartões que apresentam perguntas de um lado e respostas do outro. 
        Utilizados há décadas, eles se destacam por facilitar a memorização e o aprendizado de forma ativa, ajudando a reforçar o conhecimento por meio da repetição espaçada. 
        Essa técnica estimula o cérebro a reter informações de longo prazo, tornando o processo de estudo mais dinâmico e produtivo.
        Aqui você pode criar e acessar seus flashcards em qualquer dispositivo! Sinta-se livre para realizar seu cadastro e entrar nessa jornada conosco!
        Seja você um estudante, professor ou autodidata, nossa plataforma é a parceira ideal para maximizar seus estudos. Junte-se a nós e experimente uma maneira mais inteligente de aprender!
        </p>
      </div>
    </div>
  );
};

export default About;
