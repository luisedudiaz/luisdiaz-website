import { FC } from "react";
import TestimonialCards from "./testimonial-cards";

const Testimonials: FC = () => (
    <section className="testimonials-section p-3 p-lg-5">
        <div className="container">
            <h2 className="section-title font-weight-bold mb-5">Testimonials</h2>
            <TestimonialCards />
        </div>
    </section>
);

export default Testimonials;
