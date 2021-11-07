import React, { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export interface IBlogCard {
  title: string;
  description: string;
  path: string;
  img: string;
  createdAt: string;
}

const BlogCard: FC<IBlogCard> = ({
  title,
  description,
  path,
  img,
  createdAt,
}: PropsWithChildren<IBlogCard>) => {
  return (
    <div className="col-md-4 mb-5">
      <div className="card blog-post-card">
        {/* <img
              className="card-img-top"
              src="assets/images/blog/blog-post-thumb-card-1.jpg"
              alt="image"
            /> */}
        <div className="card-body">
          <h5 className="card-title">
            <Link className="theme-link" to={`/blog/${path}`}>
              {title}
            </Link>
          </h5>
          <p className="card-text">{description}</p>
          <p className="mb-0">
            <Link className="more-link" to={`/blog/${path}`}>
              Read more &rarr;
            </Link>
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">{createdAt}</small>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
