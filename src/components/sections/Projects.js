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
import ExpenseTrackerImage from "../../images/expense_tracker_logo.jpg";
import WhatsAppGroupImage from "../../images/whatsapp_logo.jpg";
import NetflixImage from "../../images/netflix_logo.jpg";
import ArawazaImage from "../../images/arawaza_logo.png";
import MessengerImage from "../../images/messenger_logo.png";
import Covid19Image from "../../images/covid-19_logo.jpg";
import TravelTrackerImage from "../../images/travel_tracker_logo.jpg";

// IMAGES LOGOS
import ReactLogo from "../../images/react_logo.jpg";
import ReduxLogo from "../../images/redux_logo.jpg";
import WebpackLogo from "../../images/webpack_logo.png";
import BabelLogo from "../../images/babel_logo.png";
import FirebaseLogo from "../../images/firebase_logo.jpg";
import NodeJSLogo from "../../images/node_logo.PNG";
import MongoDBLogo from "../../images/mongodb_logo.png";
import PusherLogo from "../../images/pusher_logo.png";
import MaterialUILogo from "../../images/material_ui_logo.png";
import HerokuLogo from "../../images/heroku_logo.png";

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
        <ProjectCard
          title={"Arawaza Clone"}
          link={"https://arawaza-clone-frontend.herokuapp.com/"}
          image={ArawazaImage}
          description={"Arawaza martial arts store clone"}
          tools={[
            { img: ReactLogo, name: "React" },
            { img: NodeJSLogo, name: "Node" },
            { img: MongoDBLogo, name: "Mongo DB" },
            { img: HerokuLogo, name: "Heroku" },
            { img: MaterialUILogo, name: "Material-ui" },
          ]}
        />
        <ProjectCard
          title={"Messenger Clone - MERN"}
          link={"https://facebook-messenger-clone-9000c.web.app/"}
          image={MessengerImage}
          description={"Messenger dashboard"}
          tools={[
            { img: ReactLogo, name: "React" },
            { img: MaterialUILogo, name: "Material-ui" },
            { img: PusherLogo, name: "Pusher" },
            { img: NodeJSLogo, name: "Node" },
            { img: MongoDBLogo, name: "Mongo DB" },
            { img: HerokuLogo, name: "Heroku" },
            { img: FirebaseLogo, name: "Firebase" },
          ]}
        />
        <ProjectCard
          title={"Covid-19 Tracker"}
          link={"https://diogoku.github.io/travel-tracker-frontend/#/"}
          image={Covid19Image}
          description={
            "Tracks covid-19 active/recover/deaths cases worldwide or country level"
          }
          tools={[
            { img: ReactLogo, name: "React" },
            { img: ReduxLogo, name: "Redux" },
            { img: MaterialUILogo, name: "Material-ui" },
          ]}
        />
        <ProjectCard
          title={"Travel Tracker - MERN"}
          link={"https://diogoku.github.io/travel-tracker-frontend/#/"}
          image={TravelTrackerImage}
          description={
            "Register the countries the user visited and gives information about the percentage of the world the user have visited"
          }
          tools={[
            { img: ReactLogo, name: "React" },
            { img: ReduxLogo, name: "Redux" },
            { img: MaterialUILogo, name: "Material-ui" },
            { img: NodeJSLogo, name: "Node" },
            { img: MongoDBLogo, name: "Mongo DB" },
            { img: HerokuLogo, name: "Heroku" },
          ]}
        />
      </div>
    </section>
  );
}

export default Projects;
