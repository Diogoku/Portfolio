import React from "react";

// REDUX
import { Provider } from "react-redux";
import store from "../store";

// REACT ROUTER
import { BrowserRouter as Router } from "react-router-dom";

// COMPONENTS
import Navbar from "./Navbar";
import Main from "./sections/Main";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";

// CSS
import "../css/default.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Main />
        <Projects />
        <AboutMe />
        <ContactMe />
      </Router>
    </Provider>
  );
}

export default App;
