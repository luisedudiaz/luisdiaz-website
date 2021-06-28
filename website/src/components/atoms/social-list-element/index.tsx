import React, { FC, PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Social } from "../../../types/social.types";
import { useContext } from "react";
import { context } from "../../../providers";
import { Roles } from "../../../types";
import { firestore } from "../../../utils/firebase.utils";

library.add(fab);
library.add(fas);

const SocialListElement: FC<Social> = ({
  href,
  icon,
  prefix,
  name
}: PropsWithChildren<Social>) => {
  const { isLoggedIn, roles } = useContext(context.auth);

  const deleteSocial = async () => {
    await firestore().collection("users").doc(process.env.REACT_APP_UID).update({
      socials: firestore.FieldValue.arrayRemove({
        href,
        icon,
        prefix,
        name
      })
    })
  }

  return (
    <>
      <li className="list-inline-item position-relative">
        {isLoggedIn && roles.includes(Roles.ADMIN) && (
          <div
            onClick={deleteSocial}
            className="position-absolute delete-social"
          >
            <FontAwesomeIcon
              size="xs"
              className="fa-fw"
              icon={["fas", "times"]}
            />
          </div>
        )}
        <a href={href} target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="fa-fw" icon={[prefix!, icon!]} />
        </a>
      </li>
    </>
  );
};

export default SocialListElement;
