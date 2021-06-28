import { FC, PropsWithChildren, ReactNode } from "react";
import Footer from "../../../organisms/footer";
import Header from "../../../organisms/header";

const Layout: FC = ({ children }: PropsWithChildren<ReactNode>) => {
  return (
    <>
      <Header />
      <div className="main-wrapper">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
