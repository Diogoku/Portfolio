import React, { useEffect } from "react";

// MATERIAL-UI
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

// CSS
import "../../css/contactMeSection.css";

function ContactMe() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section id="contact-section" className="contact-section">
      <p className="section-tittle" data-aos="fade-left">
        Contactos
      </p>
      <div className="contactSection__contacts">
        <p>
          Telefone <PhoneIcon /> <span>916 837 909</span>
        </p>
        <p>
          Email <EmailIcon /> <span>diogomnribeiro@gmail.com</span>
        </p>
      </div>
    </section>
  );
}

export default ContactMe;
