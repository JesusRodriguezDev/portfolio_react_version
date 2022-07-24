import React from "react";

function ProjectCard(props) {
  return (
    <div className="container container__portfolio">
      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={props.image} alt={props.alt} />
        </div>
        <h3>{props.named}</h3>
        <a href={props.link1} className="btn" target="_blank">
          Github
        </a>
        <a href={props.link2} className="btn btn-primary" target="_blank">
          Live Demo Page
        </a>
      </article>
    </div>
  );
}

export default ProjectCard;
