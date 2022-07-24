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
      alt: "weather dashboard",
      named: "Weather Dashboard",
      link1: "https://github.com/JesusRodriguezDev/Weather-Dashboard",
      link2: "https://jesusrodriguezdev.github.io/Weather-Dashboard/",
    },

    {
      id: "p2",
      alt: "cocktail creations",
      named: "Cocktail Creations",
      link1: "https://github.com/JesusRodriguezDev/Cocktail_Creations",
      link2: "https://jesusrodriguezdev.github.io/Cocktail_Creations/",
    },

    {
      id: "p3",
      alt: "day planner",
      named: "Day Planner",
      link1: "https://github.com/JesusRodriguezDev/dayPlannerWebApp",
      link2: "https://jesusrodriguezdev.github.io/dayPlannerWebApp/",
    },

    {
      id: "p4",
      alt: "coding quiz",
      named: "Coding Quiz",
      link1: "https://github.com/JesusRodriguezDev/javaScriptQuizHomework",
      link2: "https://jesusrodriguezdev.github.io/javaScriptQuizHomework/",
    },

    {
      id: "p5",
      alt: "team profile generator",
      named: "Team Profile Generator (Backend Project)",
      link1: "https://github.com/JesusRodriguezDev/Team_Profile_Generator",
      link2: "",
    },
    {
      id: "p6",
      alt: "E-commerce Back End",
      named: "E-commerce Backend (Backend Project)",
      link1: "https://github.com/JesusRodriguezDev/E-Commerce-Back-End",
      link2: "",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container container__portfolio">
        {/* using project card component to populate the various projects */}
        <ProjectCard
          image={IMG1}
          alt={projects[0].alt}
          named={projects[0].named}
          link1={projects[0].link1}
          link2={projects[0].link2}
        ></ProjectCard>

        <ProjectCard
          image={IMG2}
          alt={projects[1].alt}
          named={projects[1].named}
          link1={projects[1].link1}
          link2={projects[1].link2}
        ></ProjectCard>

        <ProjectCard
          image={IMG3}
          alt={projects[2].alt}
          named={projects[2].named}
          link1={projects[2].link1}
          link2={projects[2].link2}
        ></ProjectCard>

        <ProjectCard
          image={IMG4}
          alt={projects[3].alt}
          named={projects[3].named}
          link1={projects[3].link1}
          link2={projects[3].link2}
        ></ProjectCard>

        <ProjectCard
          image={IMG5}
          alt={projects[4].alt}
          named={projects[4].named}
          link1={projects[4].link1}
          // link2={projects[4].link2}
        ></ProjectCard>

        <ProjectCard
          image={IMG6}
          alt={projects[5].alt}
          named={projects[5].named}
          link1={projects[5].link1}
          // link2={projects[5].link2}
        ></ProjectCard>
      </div>
    </section>
  );
};

export default Portfolio;
