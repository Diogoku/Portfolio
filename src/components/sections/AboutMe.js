import React, { useEffect } from "react";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

// MOTION
import { motion } from "framer-motion";

// CSS
import "../../css/aboutMeSection.css";

// IMAGE
import BackgroundImage from "../../images/backgroundAboutMe.jpg";

function About() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section id="about-me-section" className="about-me-section">
      <img src={BackgroundImage} className="background-image"></img>
      <div className="about-me-section-body"></div>
      <p className="section-tittle about-me-tittle" data-aos="fade-left">
        Sobre Mim
      </p>
      <div className="aboutMe__text" data-aos="fade-right" data-aos-delay="200">
        <p>
          Sou licenciado em Tecnologias de Informação, o que me permitiu
          adquirir competências de implementação e gestão de tecnologias de
          informação, design de conteúdos e desenvolvimento de aplicações
          informáticas e sistemas web, técnicas de informática, análise e
          programação
        </p>
        <p>
          Além da formação específica na área científica da Informática, tive a
          oportunidade de ter formação em Estatística e Investigação
          Operacional.
        </p>
        <p>
          Sou praticante de Karaté desde 2005 e tenho vindo a participar em
          campeonatos nacionais desde então, sendo que até ao momento consegui
          alcançar 6 vezes a medalha de ouro. Para além destes, desde 2015 que
          represento a seleção nacional, o que me permitiu participar em
          campeonatos internacionais.
        </p>
        <p>
          Atualmente no meu clube, tenho também a possibilidade de desenvolver
          as minhas capacidades de liderança, entre ajuda, companheirismo e
          assertividade, enquanto treinador de karaté na vertente competitiva.
        </p>

        <p>
          Para mais informações consulte o meu{" "}
          <a
            className="curriculo__link"
            href="https://europa.eu/!Qq96tf"
            target="_blank"
          >
            currículo
          </a>
        </p>
      </div>
    </section>
  );
}

export default About;
