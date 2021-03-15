import React, { PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconName,
  IconPrefix,
  library,
} from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { FC } from "react";

library.add(fas);

export interface IPageList {
  name: string;
  path: string;
  icon: IconName;
  prefix: IconPrefix;
}

const PageListElement: FC<IPageList> = ({
  name,
  path,
  icon,
  prefix,
}: PropsWithChildren<IPageList>) => {
  return (
    <NavLink to={path} activeClassName="active" className="nav-item">
      <li className="nav-link">
        <FontAwesomeIcon icon={[prefix, icon]} className="mx-2 fa-fw" />
        {name}
      </li>
    </NavLink>
  );
};

export default PageListElement;
