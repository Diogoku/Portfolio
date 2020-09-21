import React, { useState } from "react";

// MATERIAL-UI
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";

// REACT SMOOTH SCROLLBAR
import { Link } from "react-scroll";

// CSS
import "../css/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setMenuOpen({ ...menuOpen, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <Link
            to="projects-section"
            className="link navbar-link"
            smooth={true}
            duration={500}
            spy={true}
          >
            Projetos
          </Link>
        </ListItem>
        <ListItem button>
          <Link
            to="about-me-section"
            className="link navbar-link"
            smooth={true}
            duration={500}
            spy={true}
          >
            Sobre mim
          </Link>
        </ListItem>
        <ListItem button>
          <Link
            to="contact-section"
            className="link navbar-link"
            smooth={true}
            duration={500}
            spy={true}
          >
            Contactos
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="header">
      <div className="logo-wrapper">
        <div className="link logo-letters">
          <Link to="intro-wrapper" smooth={true} duration={500}>
            <span className="logo-letter logo-first-letter">D</span>
            <span className="logo-letter logo-second-letter">R</span>
          </Link>
        </div>
      </div>

      <Drawer
        anchor={"left"}
        open={menuOpen["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link
              to="projects-section"
              className="link navbar-link"
              smooth={true}
              duration={500}
              spy={true}
            >
              Projetos
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="about-me-section"
              className="link navbar-link"
              smooth={true}
              duration={500}
              spy={true}
            >
              Sobre mim
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="contact-section"
              className="link navbar-link"
              smooth={true}
              duration={500}
              spy={true}
            >
              Contactos
            </Link>
          </li>
        </ul>
        <MenuIcon
          className="navbar__menu"
          onClick={toggleDrawer("left", true)}
        />
      </nav>
    </div>
  );
}

export default Navbar;
