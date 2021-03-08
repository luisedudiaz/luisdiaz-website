import React, { FC, PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconName,
  IconPrefix,
  library,
} from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

export interface ISocialList {
  href: string;
  icon: IconName;
  prefix: IconPrefix;
}

const SocialListElement: FC<ISocialList> = ({
  href,
  icon,
  prefix,
}: PropsWithChildren<ISocialList>) => {
  return (
    <li className="list-inline-item">
      <a href={href} target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="fa-fw" icon={[prefix, icon]} />
      </a>
    </li>
  );
};

export default SocialListElement;
