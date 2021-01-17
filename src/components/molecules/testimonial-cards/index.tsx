import React, { FC } from "react";
import TestimonialCard, {
  ITestimonialCard,
} from "../../atoms/testimonial-card-element";

const testimonials: Array<ITestimonialCard> = [];

const TestimonialCards: FC = () => {
  return (
    <>
      {testimonials.length > 0 ? (
        <div className="testimonial-carousel owl-carousel owl-theme">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={i}
              avatar={testimonial.avatar}
              company={testimonial.company}
              job={testimonial.job}
              lastname={testimonial.lastname}
              message={testimonial.message}
              name={testimonial.name}
            />
          ))}
        </div>
      ) : (
        <div className="text-center">Comming soon...</div>
      )}
    </>
  );
};

export default TestimonialCards;
