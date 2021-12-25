import { FC, PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
// import { fas } from "@fortawesome/free-solid-svg-icons";
import { Social } from "types/social.types";
// import { useContext } from "react";
// import { context } from "providers";
// import { Roles } from "types";
// import { getFirestore, doc, updateDoc, arrayRemove } from "firebase/firestore";
import { IconButton } from "@mui/material";
import { common } from "@mui/material/colors";

library.add(fab);
// library.add(fas);

const SocialListElement: FC<Social> = ({
  href,
  icon,
  prefix,
}: PropsWithChildren<Social>) => {
  // const { isLoggedIn, roles } = useContext(context.auth);

  // const deleteSocial = async () => {
  //   const uid = process.env.REACT_APP_UID as string
  //   await updateDoc(doc(getFirestore(), "users", uid), {
  //     socials: arrayRemove({
  //       href,
  //       icon,
  //       prefix,
  //       name
  //     })
  //   })
  // }

  return <IconButton size="small" sx={{
    width: 34,
    height: 34,
    backgroundColor: common.white,
    color: theme => theme.palette.primary.main,
    mr: 2,
    p: 1,
    ":hover": {
      backgroundColor: "hsla(0,0%,100%,.8)"
    }
  }}
    href={href} target="_blank">
    <FontAwesomeIcon icon={[prefix!, icon!]} />
  </IconButton>
  // return (
  //   <>
  //     <li className="list-inline-item position-relative">
  //       {isLoggedIn && roles.includes(Roles.ADMIN) && (
  //         <div
  //           onClick={deleteSocial}
  //           className="position-absolute delete-social"
  //         >
  //           <FontAwesomeIcon
  //             size="xs"
  //             className="fa-fw"
  //             icon={["fas", "times"]}
  //           />
  //         </div>
  //       )}
  //       <a href={href} target="_blank" rel="noreferrer">
  //         <FontAwesomeIcon className="fa-fw" icon={[prefix!, icon!]} />
  //       </a>
  //     </li>
  //   </>
  // );
};

export default SocialListElement;
