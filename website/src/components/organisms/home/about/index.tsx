import React, { FC } from "react";
// import Image from "../../../atoms/image"
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

const About: FC = () => {
  return (
    <section className="about-me-section p-3 p-lg-5 theme-bg-light">
      <div className="container">
        <div className="profile-teaser media flex-column flex-lg-row">
          <div className="media-body">
            <h2 className="name font-weight-bold mb-1">Luis Díaz</h2>
            <div className="tagline mb-3">Software Engineer</div>
            <div className="bio mb-4">
              I'm a software engineer specialised in frontend and backend
              development for complex scalable web apps.
              {/* I write about software development on <Link to="/blog">my blog</Link>.  */}{" "}
              Want to know how I may help your project? Check out my
              {/* project{" "}
              <Link to="/portfolio">portfolio</Link> and */}
              {" "}
              <a
                href="Luis_Diaz_Software_Engineer.pdf"
                target="_blank"
              >
                online resume
              </a>
              .
            </div>
            <div className="mb-4">
              {/* <Link to="/portfolio" className="btn btn-primary me-2 mb-3">
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className="me-2"
                />
                <span className="d-none d-md-inline">View</span> Portfolio
              </Link> */}
              <a
                href="Luis_Diaz_Software_Engineer.pdf"
                target="_blank"
                className="btn btn-secondary mb-3"
              >
                <FontAwesomeIcon icon={faFileAlt} className="me-2" />
                <span className="d-none d-md-inline">View</span> Resume
              </a>
            </div>
          </div>
          {/*<Image name="profile-lg" />*/}
        </div>
      </div>
    </section>
  );
};

export default About;
