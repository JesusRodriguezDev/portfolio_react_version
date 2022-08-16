import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/jesus-rodriguez-126829114/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/JesusRodriguezDev" target="_blank">
          <BsGithub />
        </a>
        <a
          href="https://www.facebook.com/jesus.rodriguez.12327608/"
          target="_blank"
        >
          <GrFacebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
