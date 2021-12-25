import React, { FC, PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
// import { Image } from "atoms";

export interface ITestimonialCard {
  message: string;
  name: string;
  lastname: string;
  job: string;
  company: string;
  avatar: string;
}

const TestimonialCard: FC<ITestimonialCard> = ({
  message,
  name,
  lastname,
  job,
  company,
  avatar,
}: PropsWithChildren<ITestimonialCard>) => {
  return (
    <div className="item">
      <div className="quote-holder">
        <blockquote className="quote-content">{message}</blockquote>
        <FontAwesomeIcon icon={faQuoteLeft} />
      </div>
      <div className="source-holder">
        <div className="source-profile">
          {/* <Image img={avatar} /> */}
        </div>
        <div className="meta">
          <div className="name">
            {name} {lastname}
          </div>
          <div className="info">
            {job}, {company}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard
