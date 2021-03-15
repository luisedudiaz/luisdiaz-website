import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import ProjectCard, { IProjectCard } from "../../atoms/project-card-element";

const projects: Array<IProjectCard> = [];

const ProjectCards: FC = () => {
  return (
    <>
      <div className="row">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            client={project.client}
            description={project.description}
            img={project.img}
            path={project.path}
            tags={project.tags}
            title={project.title}
          />
        ))}
      </div>
      <div className="text-center py-3">
        {projects.length > 0 ? (
          <Link to="/portfolio" className="btn btn-primary">
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="me-2" />
            View Portfolio
          </Link>
        ) : (
          <div>Comming soon...</div>
        )}
      </div>
    </>
  );
};

export default ProjectCards;
