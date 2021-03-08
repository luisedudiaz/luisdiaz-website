import React, { FC } from "react";
import SocialListElement, {
  ISocialList,
} from "../../atoms/social-list-element";

const socialMedias: Array<ISocialList> = [
  {
    icon: "github-alt",
    prefix: "fab",
    href: "https://github.com/luisedudiaz",
  },
  {
    icon: "stack-overflow",
    prefix: "fab",
    href: "https://stackoverflow.com/users/13654760/luis-eduardo-d%c3%adaz",
  },
  {
    icon: "linkedin-in",
    prefix: "fab",
    href: "https://linkedin.com/in/luisedudiaz"
  }
];

const SocialsList: FC = () => {
  return (
    <>
      {socialMedias.map((socialMedia, i) => (
        <SocialListElement
          key={i}
          href={socialMedia.href}
          icon={socialMedia.icon}
          prefix={socialMedia.prefix}
        />
      ))}
    </>
  );
};

export default SocialsList;
