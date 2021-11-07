import { FC } from "react";
import Home from "../components/home"
import "../components/home/index.scss";

const { About, Blog, Featured, Overview, Seo, Testimonials } = Home

const HomePage: FC = () => {
    return (
        <div>
            <Seo />
            <About />
            <Overview />
            <div className="container">
                <hr />
            </div>
            <Testimonials />
            <div className="container">
                <hr />
            </div>
            <Featured />
            <div className="container">
                <hr />
            </div>
            <Blog />
        </div>
    );
};

export default HomePage;
