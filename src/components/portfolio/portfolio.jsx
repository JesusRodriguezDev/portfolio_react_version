import React from "react";
import "./portfolio.css";
import ProjectCard from "./ProjectCard";
import IMG1 from "../../assets/weather_app_screenshot.png";

const Portfolio = () => {
  const projects = [
    {
      id: "p1",
      alt: "weather dashboard",
      named: "Weather Dashboard",
      link1: "https://github.com/JesusRodriguezDev/Weather-Dashboard",
      link2: "https://jesusrodriguezdev.github.io/Weather-Dashboard/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container container__portfolio">
        <ProjectCard
          image={IMG1}
          alt={projects[0].alt}
          named={projects[0].named}
          link1={projects[0].link1}
          link2={projects[0].link2}
        ></ProjectCard>
      </div>
    </section>
  );
};

export default Portfolio;
