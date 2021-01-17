import React, { FC } from "react"

import SEO from "../components/organisms/seo"
import { Link } from "react-router-dom"

const NotFoundPage: FC = () => (
  <>
    <SEO />
    <section className="theme-bg-light">
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-10">
            <h1 className="text-center">NOT FOUND</h1>
            <p className="text-center">
              You just hit a route that doesn&#39;t exist... the sadness.
            </p>
            <div className="row justify-content-center">
              <Link to="/" className="btn btn-primary">
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default NotFoundPage
