import { faAdjust, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useContext, useState } from "react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
import { context } from "../../../providers";
import PagesList from "../../molecules/pages-list";
import SocialsList from "../../molecules/socials-list";

const Header : FC = () => {
  const isChecked = JSON.parse(sessionStorage.getItem("dark-mode")!);
  const { isLoggedIn, logout } = useContext(context.auth);
  const [checked, setChecked] = useState(isChecked);

  const handleChangeDarkMode = () => {
    sessionStorage.setItem("dark-mode", JSON.stringify(!checked));
    setChecked(!checked);
  };

  return (
    <header className="header text-center">
      <Helmet>
        <body className={checked ? "dark-mode" : ""} />
      </Helmet>
      <div className="force-overflow">
        {isLoggedIn && (
          <h1 className="blog-name pt-lg-4 mb-0 text-right mr-3">
            <FontAwesomeIcon onClick={() => logout!()} icon={faSignOutAlt} />
          </h1>
        )}
        <h1 className="blog-name pt-lg-4 mb-0">
          <Link to="/">Luis Díaz</Link>
        </h1>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div id="navigation" className="collapse navbar-collapse flex-column">
            <div className="profile-section pt-3 pt-lg-0">
              {/*<Image name="profile" />*/}
              <div className="bio mb-3">
                Hi, my name is Luis Díaz and I'm a software engineer. Welcome to
                my personal website!
              </div>
              <ul className="social-list list-inline py-2 mx-auto">
                <SocialsList />
              </ul>
              <hr />
            </div>
            <ul className="navbar-nav flex-column text-left">
              <PagesList />
            </ul>
            {/*
            <div className="my-2">
              <a className="btn btn-primary" href="contact.html" target="_blank">
              <i className="fas fa-paper-plane mr-2"/>Hire Me</a>
            </div> */}

            {!isLoggedIn && (
              <div className="my-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#login"
                >
                  Login
                </button>
              </div>
            )}
            <hr />
            <div className="dark-mode-toggle text-center w-100">
              <hr className="mb-4" />
              <h4 className="toggle-name mb-3 ">
                <FontAwesomeIcon icon={faAdjust} className="mr-1" />
                Dark Mode
              </h4>
              <input
                className="toggle"
                id="darkmode"
                type="checkbox"
                defaultChecked={checked}
                onChange={handleChangeDarkMode}
              />
              <label className="toggle-btn mx-auto mb-0" htmlFor="darkmode" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
