import { FC } from 'react'
import ProjectCards from './project-cards'

const Featured: FC = () => (
    <section className="featured-section p-3 p-lg-5">
        <div className="container">
            <h2 className="section-title font-weight-bold mb-5">
                Featured Projects
            </h2>
            <ProjectCards />
        </div>
    </section>
)

export default Featured
