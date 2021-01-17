import React, { FC, PropsWithChildren, ReactNode } from "react";
import Footer from "../../../organisms/footer";
import Header from "../../../organisms/header";
import Login from "../../../organisms/login";

const Layout : FC = ({ children }: PropsWithChildren<ReactNode>) => (
  <>
    <Header />
    <div className="main-wrapper">
      {children}
      <Footer />
    </div>
    <Login />
  </>
);

export default Layout;
