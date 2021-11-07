import { PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { FC } from "react";
import { PageList } from "../../../../types";

library.add(fas);

const PageListElement: FC<PageList> = ({
  name,
  path,
  icon,
  prefix,
}: PropsWithChildren<PageList>) => {
  return (
    <NavLink exact to={path} activeClassName="active" className="nav-item">
      <li className="nav-link">
        <FontAwesomeIcon icon={[prefix, icon]} className="mx-2 fa-fw" />
        {name}
      </li>
    </NavLink>
  );
};

export default PageListElement;
