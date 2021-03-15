import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faAndroid,
  faCss3,
  faDev,
  faEmber,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faPython,
  faReact,
  faSwift,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
// import { Link } from "react-router-dom";

interface IIcons {
  name: IconDefinition;
  className?: string;
}

interface ISkills {
  title: string;
  description: string;
  icons: Array<IIcons>;
}

const skills: Array<ISkills> = [
  {
    title: "JavaScript & Typescript",
    description:
      "JavaScript is a client-side scripting language, which means the source code is processed by the client's web browser rather than on the web server and TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.",
    icons: [{ name: faJsSquare }],
  },
  {
    title: "Vue, React & Ember",
    description:
      "The aim of frameworks is to provide a common structure so that developers don’t have to redo it from scratch and can reuse the code provided. In this way, frameworks allow us to cut out much of the work and save a lot of time.",
    icons: [
      { name: faVuejs },
      { name: faReact, className: "ml-3" },
      { name: faEmber, className: "ml-3" },
    ],
  },
  {
    title: "Node.js",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. This means is a server-side platform wrapped around the JavaScript language for building scalable, event-driven applications.",
    icons: [{ name: faNodeJs }],
  },
  {
    title: "Python & Django",
    description:
      "Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app.",
    icons: [{ name: faPython }],
  },
  {
    title: "Git",
    description:
      "It is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers. Its goals include speed, data integrity, and support for distributed, non-linear workflows.",
    icons: [{ name: faGitAlt }],
  },
  {
    title: "DevOps",
    description:
      "It is a set of practices that combines software development (Dev) and information-technology operations (Ops) which aims to shorten the systems development life cycle and provide continuous delivery with high software quality.",
    icons: [{ name: faDev }],
  },
  {
    title: "HTML & CSS",
    description:
      "HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices.",
    icons: [{ name: faHtml5 }, { name: faCss3, className: "ml-3" }],
  },
  {
    title: "Mobile Apps",
    description:
      "Android (Java or Kotlin) and iOS (Swift) are two of the most important technologies for building mobile applications. These two tools take full advantage of the use of their hardware functionalities. Being more efficient and faster.",
    icons: [{ name: faAndroid }, { name: faSwift, className: "ml-3" }],
  },
];

const Overview: FC = () => {
  return (
    <section className="overview-section p-3 p-lg-5">
      <div className="container">
        <h2 className="section-title font-weight-bold mb-3">What I do</h2>
        <div className="section-intro mb-5">
          I have 2 years experience building software for clients. Below is a
          quick overview of my main technical skill sets and technologies I use.
          {/* Want to find out more about my experience? Check out my
          <Link to="/portfolio"> project portfolio</Link>. */}
        </div>
        <div className="row">
          {skills.map((skill, i) => {
            return (
              <div className="item col-6 col-lg-3" key={i}>
                <div className="item-inner">
                  <div className="item-icon">
                    {skill.icons.map((icon, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={icon.name}
                        className={icon.className && icon.className}
                      />
                    ))}
                  </div>
                  <h3 className="item-title">{skill.title}</h3>
                  <div className="item-desc">{skill.description}</div>
                </div>
              </div>
            );
          })}
        </div>
        {/*<div className="text-center py-3">
        <Link to="/services" className="btn btn-primary">
          <FontAwesomeIcon icon={faArrowAltCircleRight} className="me-2" />Services &amp; Pricing
        </Link>
      </div>*/}
      </div>
    </section>
  );
};

export default Overview;
