import React from "react";
import "./portfolio.css";
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
      title: "Weather Dashboard",
      github: "https://github.com/JesusRodriguezDev/Weather-Dashboard",
      live: "https://jesusrodriguezdev.github.io/Weather-Dashboard/",
    },

    {
      id: "p2",
      image: IMG2,
      title: "Cocktail Creations",
      github: "https://github.com/JesusRodriguezDev/Cocktail_Creations",
      live: "https://jesusrodriguezdev.github.io/Cocktail_Creations/",
    },

    {
      id: "p3",
      image: IMG3,
      title: "Day Planner",
      github: "https://github.com/JesusRodriguezDev/dayPlannerWebApp",
      live: "https://jesusrodriguezdev.github.io/dayPlannerWebApp/",
    },

    {
      id: "p4",
      image: IMG4,
      title: "Coding Quiz",
      github: "https://github.com/JesusRodriguezDev/javaScriptQuizHomework",
      live: "https://jesusrodriguezdev.github.io/javaScriptQuizHomework/",
    },

    {
      id: "p5",
      image: IMG5,
      title: "Team Profile Generator",
      github: "https://github.com/JesusRodriguezDev/Team_Profile_Generator",
      live: "https://github.com/JesusRodriguezDev/Team_Profile_Generator",
    },
    {
      id: "p6",
      image: IMG6,
      title: "E-commerce Backend",
      github: "https://github.com/JesusRodriguezDev/E-Commerce-Back-End",
      live: "https://github.com/JesusRodriguezDev/E-Commerce-Back-End",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map(({ id, image, title, github, live }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={live} className="btn" target="_blank">
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
