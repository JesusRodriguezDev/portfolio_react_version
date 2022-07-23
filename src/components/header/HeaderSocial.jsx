import React from "react";
import "./header.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
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
  );
};

export default HeaderSocial;
