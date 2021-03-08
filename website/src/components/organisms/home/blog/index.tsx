import React, { FC } from 'react'
import BlogCards from '../../../molecules/blog-cards'

const Blog : FC = () => (
  <section className="latest-blog-section p-3 p-lg-5">
    <div className="container">
      <h2 className="section-title font-weight-bold mb-5">
        Latest Blog Posts
      </h2>
      <BlogCards />
    </div>
  </section>
)

export default Blog
