import React, { FC, PropsWithChildren } from "react";
import { PropsSocialList } from "../../../../types/social.types";
import SocialListElement from "./social-list-element";

const SocialsList: FC<PropsSocialList> = ({
  socials,
}: PropsWithChildren<PropsSocialList>) => {
  return (
    <>
      {socials.map((social, i) => (
        <SocialListElement
          key={i}
          href={social.href}
          icon={social.icon}
          prefix={social.prefix}
          name={social.name}
        />
      ))}
    </>
  );
};

export default SocialsList;
