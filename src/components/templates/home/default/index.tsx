import React, { FC } from "react";
import About from "../../../organisms/home/about";
import Blog from "../../../organisms/home/blog";
import Featured from "../../../organisms/home/featured";
import Overview from "../../../organisms/home/overview";
import Testimonials from "../../../organisms/home/testimonials";
import SEO from "../../../organisms/seo";

const Home : FC = () => {
  return (
    <div>
      <SEO title="Home">
        <link
          rel="stylesheet"
          href="assets/css/owlcarousel/owl.carousel.min.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="assets/css/owlcarousel/owl.theme.default.css"
          type="text/css"
        />
        <script defer src="assets/js/testimonials.js" type="text/javascript" />
      </SEO>
      <About />
      <Overview />
      <div className="container">
        <hr />
      </div>
      <Testimonials />
      <div className="container">
        <hr />
      </div>
      <Featured />
      <div className="container">
        <hr />
      </div>
      <Blog />
    </div>
  );
};

export default Home
