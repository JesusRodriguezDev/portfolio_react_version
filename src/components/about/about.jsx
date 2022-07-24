import React from "react";
import "./about.css";
import ME from "../../assets/about_me.png";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { AiFillCode } from "react-icons/ai";
import { GoDatabase } from "react-icons/go";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsFileEarmarkCodeFill className="about__icon" />
              <h5>Front End</h5>
              <small>HTML, CSS, JavaScript, React</small>
            </article>

            <article className="about__card">
              <AiFillCode className="about__icon" />
              <h5>Back End</h5>
              <small>NodeJS</small>
            </article>

            <article className="about__card">
              <GoDatabase className="about__icon" />
              <h5>Databases</h5>
              <small>MySQL, MongoDB</small>
            </article>
          </div>
          <p>
            Aspiring web developer with 10 years of data analysis and business
            intelligence development experience. I am currently going through a
            full stack bootcamp to get the necessary foundation to start a
            career as a web developer.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
