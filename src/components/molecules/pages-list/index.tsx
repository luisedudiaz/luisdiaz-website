import React, { FC } from "react";
import PageListElement, {
  IPageList,
} from "../../atoms/page-list-element";

const pages: Array<IPageList> = [
  {
    icon: "user",
    prefix: "fas",
    path: "/",
    name: "About me",
  },
  // {
  //   icon: "laptop-code",
  //   prefix: "fas",
  //   path: "/portfolio",
  //   name: "Portfolio",
  // },
  // {
  //   icon: "briefcase",
  //   prefix: "fas",
  //   path: "/services",
  //   name: "Services",
  // },
  // {
  //   icon: "file-alt",
  //   prefix: "fas",
  //   path: "/resume",
  //   name: "Resume",
  // },
  // {
  //   icon: "blog",
  //   prefix: "fas",
  //   path: "/blog",
  //   name: "Blog",
  // },
  // {
  //   icon: "envelope-open-text",
  //   prefix: "fas",
  //   path: "/contact",
  //   name: "Contact",
  // },
];

const PagesList: FC = () => {
  return (
    <>
      {pages.map((page, i) => (
        <PageListElement
          key={i}
          name={page.name}
          path={page.path}
          icon={page.icon}
          prefix={page.prefix}
        />
      ))}
    </>
  );
};

export default PagesList;
