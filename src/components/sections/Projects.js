import React, { useEffect } from "react";

// COMPONENTS
import ProjectCard from "../ProjectCard";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

// CSS
import "../../css/projectsSection.css";

// IMAGES PROJECTS
import GoogleBooksAPIImage from "../../images/google_books_logo.jpg";
import HangmanImage from "../../images/hangman_logo.jpg";
import FusoesImage from "../../images/fusoes_academia.jpg";
import ExpenseTrackerImage from "../../images/expense_tracker_logo.jpg";
import WhatsAppGroupImage from "../../images/whatsapp_logo.jpg";
import NetflixImage from "../../images/netflix_logo.jpg";

// IMAGES LOGOS
import ReactLogo from "../../images/react_logo.jpg";
import ReduxLogo from "../../images/redux_logo.jpg";
import WebpackLogo from "../../images/webpack_logo.png";
import BabelLogo from "../../images/babel_logo.png";
import HTML5Logo from "../../images/html5_logo.png";
import CSSLogo from "../../images/css_logo.png";
import JavaScriptLogo from "../../images/javascript_logo.jpg";
import FirebaseLogo from "../../images/firebase_logo.jpg";
import NodeJSLogo from "../../images/node_logo.PNG";
import MongoDBLogo from "../../images/mongodb_logo.png";
import PusherLogo from "../../images/pusher_logo.png";
import MaterialUILogo from "../../images/material_ui_logo.png";

function Projects() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section id="projects-section" className="projects-section">
      <p className="section-tittle" data-aos="fade-left">
        Projetos
      </p>
      <div className="projects-wrapper">
        <ProjectCard
          title={"Google Books API"}
          link={"https://diogoku.github.io/googleBooksAPI/"}
          image={GoogleBooksAPIImage}
          description={
            "Google Books has a mission to digitize the world's book content and make it more discoverable on the Web. "
          }
          tools={[
            { img: ReactLogo, name: "React" },
            { img: ReduxLogo, name: "Redux" },
            { img: WebpackLogo, name: "Webpack" },
            { img: BabelLogo, name: "Babel" },
          ]}
        />
        <ProjectCard
          title={"Hangman Game"}
          link={"https://diogoku.github.io/hangman/"}
          image={HangmanImage}
          description={
            "Discover the word your friend thought, before he d _ _ s"
          }
          tools={[
            { img: ReactLogo, name: "React" },
            { img: ReduxLogo, name: "Redux" },
            { img: WebpackLogo, name: "Webpack" },
            { img: BabelLogo, name: "Babel" },
          ]}
        />
        <ProjectCard
          title={"Fusoes Academia site"}
          link={"https://diogoku.github.io/fusoesAcademia/"}
          image={FusoesImage}
          description={"Fusões Academia, Karate Site"}
          tools={[
            { img: HTML5Logo, name: "HTML5" },
            { img: CSSLogo, name: "CSS" },
            { img: JavaScriptLogo, name: "JavaScript" },
          ]}
        />
        <ProjectCard
          title={"Expense Tracker"}
          link={"https://diogoku.github.io/expenseTracker/"}
          image={ExpenseTrackerImage}
          description={"Keep track of your cash flow"}
          tools={[
            { img: ReactLogo, name: "React" },
            { img: ReduxLogo, name: "Redux" },
            { img: WebpackLogo, name: "Webpack" },
            { img: BabelLogo, name: "Babel" },
          ]}
        />
        <ProjectCard
          title={"Whatsapp Clone"}
          link={"https://whatsapp-mern-849a1.web.app/"}
          image={WhatsAppGroupImage}
          description={"WhatsApp Group - MERN"}
          tools={[
            { img: ReactLogo, name: "React" },
            { img: ReduxLogo, name: "Redux" },
            { img: FirebaseLogo, name: "Firebase" },
            { img: NodeJSLogo, name: "Node" },
            { img: MongoDBLogo, name: "Mongo DB" },
            { img: PusherLogo, name: "Pusher" },
            { img: MaterialUILogo, name: "Material-ui" },
          ]}
        />
        <ProjectCard
          title={"Netflix Clone"}
          link={"https://netflix-clone-1bb45.firebaseapp.com/"}
          image={NetflixImage}
          description={"Netflix Dashboard"}
          tools={[
            { img: ReactLogo, name: "React" },
            { img: FirebaseLogo, name: "Firebase" },
            { img: MaterialUILogo, name: "Material-ui" },
          ]}
        />
      </div>
    </section>
  );
}

export default Projects;
