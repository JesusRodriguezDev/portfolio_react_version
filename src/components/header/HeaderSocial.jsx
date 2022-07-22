import React from "react";
import "./header.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a className="btn" href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a className="btn" href="https://github.com" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
