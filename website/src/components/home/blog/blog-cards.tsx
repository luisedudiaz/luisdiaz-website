import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import BlogCard, { IBlogCard } from "./blog-card-element";

const blogs: Array<IBlogCard> = [];

const BlogCards: FC = () => {
  return (
    <>
      <div className="row">
        {blogs.map((blog, i) => (
          <BlogCard
            key={i}
            createdAt={blog.createdAt}
            description={blog.description}
            img={blog.img}
            path={blog.path}
            title={blog.title}
          />
        ))}
      </div>
      <div className="text-center py-3">
        {blogs.length > 0 ? (
          <Link to="/blog" className="btn btn-primary">
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="me-2" />
            View Blog
          </Link>
        ) : (
          <div>Comming soon...</div>
        )}
      </div>
    </>
  );
};

export default BlogCards;
