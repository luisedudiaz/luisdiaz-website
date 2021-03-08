import React, { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
// import { Image } from "../../atoms"

export interface IProjectCard {
  tags: Array<string>;
  title: string;
  img: string;
  path: string;
  description: string;
  client: string;
}

const ProjectCard: FC<IProjectCard> = ({
  tags,
  title,
  img,
  path,
  description,
  client,
}: PropsWithChildren<IProjectCard>) => {
  return (
    <div className={`col-md-6 mb-5 ${tags.map((tag: string) => tag)}`}>
      <div className="card project-card">
        <div className="row no-gutters">
          <div className="col-lg-4 card-img-holder">
            {/* <Image img={img} className="card-img" /> */}
          </div>
          <div className="col-lg-8">
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/portfolio/${path}`} className="theme-link">
                  {title}
                </Link>
              </h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">Client: {client}</small>
              </p>
            </div>
          </div>
        </div>
        <div className="link-mask">
          <Link className="link-mask-link" to={`/portfolio/${path}`} />
          <div className="link-mask-text">
            <Link className="btn btn-secondary" to={`/portfolio/${path}`}>
              <FontAwesomeIcon icon={faEye} className="mr-2" />
              View Case Study
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
