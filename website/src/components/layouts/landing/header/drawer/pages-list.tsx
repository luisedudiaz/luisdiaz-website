import { List } from "@mui/material";
import { FC, useContext } from "react";
import { context } from "providers";
import PageListElement from "./page-list-element";

// const pages: Array<PageList> = [
//   {
//     icon: "user",
//     prefix: "fas",
//     path: "/",
//     name: "About me",
//   },
//   {
//     icon: "laptop-code",
//     prefix: "fas",
//     path: "/portfolio",
//     name: "Portfolio",
//   },
//   {
//     icon: "briefcase",
//     prefix: "fas",
//     path: "/services",
//     name: "Services",
//   },
//   {
//     icon: "file-alt",
//     prefix: "fas",
//     path: "/resume",
//     name: "Resume",
//   },
//   {
//     icon: "blog",
//     prefix: "fas",
//     path: "/blog",
//     name: "Blog",
//   },
//   {
//     icon: "envelope-open-text",
//     prefix: "fas",
//     path: "/contact",
//     name: "Contact",
//   },
// ];

const PagesList: FC = () => {
  const { links } = useContext(context.links);

  return (
    <List>
      {links.map((link, i) => (
        <PageListElement
          key={i}
          name={link.name}
          path={link.path}
          icon={link.icon}
          prefix={link.prefix}
        />
      ))}
    </List>
  );
};

export default PagesList;
