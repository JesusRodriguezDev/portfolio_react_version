import React from "react";
import "./portfolio.css";
import ProjectCard from "./ProjectCard";
import IMG1 from "../../assets/weather_app_screenshot.png";
import IMG2 from "../../assets/cocktail_creations_screenshot.png";
import IMG3 from "../../assets/day_planner_screenshot.png";
import IMG4 from "../../assets/coding_quiz_screenshot.png";
import IMG5 from "../../assets/team_profile_generator_screenshot.png";
import IMG6 from "../../assets/ecommerce_backend_screenshot.png";

const Portfolio = () => {
  const projects = [
    {
      id: "p1",
      image: IMG1,
      named: "Weather Dashboard",
      link1: "https://github.com/JesusRodriguezDev/Weather-Dashboard",
      link2: "https://jesusrodriguezdev.github.io/Weather-Dashboard/",
    },

    {
      id: "p2",
      image: IMG2,
      named: "Cocktail Creations",
      link1: "https://github.com/JesusRodriguezDev/Cocktail_Creations",
      link2: "https://jesusrodriguezdev.github.io/Cocktail_Creations/",
    },

    {
      id: "p3",
      image: IMG3,
      named: "Day Planner",
      link1: "https://github.com/JesusRodriguezDev/dayPlannerWebApp",
      link2: "https://jesusrodriguezdev.github.io/dayPlannerWebApp/",
    },

    {
      id: "p4",
      image: IMG4,
      named: "Coding Quiz",
      link1: "https://github.com/JesusRodriguezDev/javaScriptQuizHomework",
      link2: "https://jesusrodriguezdev.github.io/javaScriptQuizHomework/",
    },

    {
      id: "p5",
      image: IMG5,
      named: "Team Profile Generator",
      link1: "https://github.com/JesusRodriguezDev/Team_Profile_Generator",
      link2: "",
    },
    {
      id: "p6",
      image: IMG6,
      named: "E-commerce Backend",
      link1: "https://github.com/JesusRodriguezDev/E-Commerce-Back-End",
      link2: "",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map(({ id, image, named, link1, link2 }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={named} />
              </div>
              <h3>{named}</h3>
              <div className="portfolio__item-cta">
                <a href={link1} className="btn" target="_blank">
                  Github
                </a>
                <a href={link2} className="btn btn-primary" target="_blank">
                  Live Demo Page
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
