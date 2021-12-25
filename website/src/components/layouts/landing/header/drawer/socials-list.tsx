import { FC, PropsWithChildren } from "react";
import { styled } from "@mui/material/styles"
import { PropsSocialList } from "types/social.types";
import SocialListElement from "./social-list-element";

const SocialElement = styled("div")(() => ({
  margin: "auto"
}))

const SocialsList: FC<PropsSocialList> = ({
  socials,
}: PropsWithChildren<PropsSocialList>) => {
  return (
    <SocialElement>
      {socials.map((social, i) => (
        <SocialListElement
          key={i}
          href={social.href}
          icon={social.icon}
          prefix={social.prefix}
          name={social.name}
        />
      ))}
    </SocialElement>
  );
};

export default SocialsList;
