import TextareaAutosize from "react-textarea-autosize";
import {
  faAdjust,
  faSignOutAlt,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useHistory } from "react-router-dom";
import { context } from "../../../providers";
import PagesList from "../../molecules/pages-list";
import SocialsList from "../../molecules/socials-list";
import { useEffect } from "react";
import { firestore } from "../../../utils/firebase.utils";
import { Roles } from "../../../types";
import { User, Header as IHeader } from "../../../types/user.types";
import { Social } from "../../../types/social.types";
import AddSocialMedia from "../../molecules/modals/add-social-media";
import Login from "../../molecules/modals/login";

const Header: FC = () => {
  const isChecked = JSON.parse(sessionStorage.getItem("dark-mode")!);
  const { isLoggedIn, roles, user, logoutWithRedirect } = useContext(
    context.auth
  );
  const [socialMedia, setSocialMedia] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [checked, setChecked] = useState(isChecked);
  const [bioStatus, setBioStatus] = useState(false);
  const [header, setHeader] = useState<IHeader>();
  const [socials, setSocials] = useState<Social[]>([]);
  const history = useHistory();
  const uid = process.env.REACT_APP_UID!;

  useEffect(() => {
    getHeaderInfo(uid);
  }, [uid]);

  const handleChangeDarkMode = () => {
    sessionStorage.setItem("dark-mode", JSON.stringify(!checked));
    setChecked(!checked);
  };

  const getHeaderInfo = async (uid: string) => {
    firestore()
      .collection("users")
      .doc(uid)
      .onSnapshot((snapshot) => {
        const user = snapshot.data() as User;
        setHeader(user.header);
        setSocials(user.socials);
      });
  };

  const cancelBio = async () => {
    await getHeaderInfo(user?.uid!);
    setBioStatus(false);
  };

  const saveBio = async () => {
    await firestore()
      .collection("users")
      .doc(user?.uid)
      .update({
        header: {
          bio: header?.bio,
        },
      });
    setBioStatus(false);
  };

  return (
    <header className="header text-center">
      <Helmet>
        <body className={checked ? "dark-mode" : ""} />
      </Helmet>
      <div className="force-overflow">
        {isLoggedIn && (
          <h1 className="blog-name pt-lg-4 mb-0 text-right me-3">
            <FontAwesomeIcon
              onClick={() => logoutWithRedirect!(history)}
              icon={faSignOutAlt}
            />
          </h1>
        )}
        <h1 className="blog-name pt-lg-4 mb-0">
          <Link to="/">Luis Díaz</Link>
        </h1>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div id="navigation" className="collapse navbar-collapse flex-column">
            <div className="profile-section pt-3 pt-lg-0">
              {/*<Image name="profile" />*/}
              <div
                className="bio mb-3"
                onClick={() =>
                  isLoggedIn &&
                  roles.includes(Roles.ADMIN) &&
                  setBioStatus(true)
                }
              >
                {bioStatus ? (
                  <div className="d-flex flex-column align-items-end">
                    <TextareaAutosize
                      className="profile-textarea w-100"
                      minRows={7}
                      cacheMeasurements
                      value={header?.bio}
                      onChange={(e) =>
                        setHeader({ ...header, bio: e.target.value })
                      }
                    />

                    <div className="mt-1">
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm me-1"
                        onClick={cancelBio}
                      >
                        <FontAwesomeIcon icon={faTimes} fixedWidth />
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => saveBio()}
                      >
                        <FontAwesomeIcon icon={faCheck} fixedWidth />
                      </button>
                    </div>
                  </div>
                ) : (
                  <p>{header?.bio}</p>
                )}
              </div>

              <ul className="social-list list-inline py-2 mx-auto">
                <SocialsList socials={socials} />
                {isLoggedIn && roles.includes(Roles.ADMIN) && (
                  <li className="list-inline-item">
                    <button onClick={() => setSocialMedia(true)}>
                      <FontAwesomeIcon
                        className="fa-fw"
                        icon={["fas", "plus"]}
                      />
                    </button>
                  </li>
                )}
              </ul>
              <hr />
            </div>
            <ul className="navbar-nav flex-column text-left">
              <PagesList />
            </ul>
            {/*
            <div className="my-2">
              <a className="btn btn-primary" href="contact.html" target="_blank">
              <i className="fas fa-paper-plane me-2"/>Hire Me</a>
            </div> */}
            {!isLoggedIn && (
              <div className="my-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setShowLogin(true)}
                >
                  Login
                </button>
              </div>
            )}
            <hr />
            <div className="dark-mode-toggle text-center w-100">
              <hr className="mb-4" />
              <h4 className="toggle-name mb-3 ">
                <FontAwesomeIcon icon={faAdjust} className="mx-1" />
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
      {isLoggedIn && roles.includes(Roles.ADMIN) && (
        <AddSocialMedia
          show={socialMedia}
          setShow={setSocialMedia.bind(this)}
        />
      )}
      {!isLoggedIn && (
        <Login show={showLogin} setShow={setShowLogin.bind(this)} />
      )}
    </header>
  );
};

export default Header;
