import React from "react";

function ProjectCard(props) {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={props.image} alt={props.alt} />
      </div>
      <h3>{props.named}</h3>
      <div className="portfolio__item-cta">
        <a href={props.link1} className="btn" target="_blank">
          Github
        </a>
        <a href={props.link2} className="btn btn-primary" target="_blank">
          Live Demo Page
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
