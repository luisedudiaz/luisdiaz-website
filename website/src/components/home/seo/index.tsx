import { FC } from 'react'
import SEO from '../../utils/seo'

const Seo: FC = () => {
    return (
        <SEO title="Home">
            <link
                rel="stylesheet"
                href="assets/css/owlcarousel/owl.carousel.min.css"
                type="text/css"
            />
            <link
                rel="stylesheet"
                href="assets/css/owlcarousel/owl.theme.default.css"
                type="text/css"
            />
            <script defer src="assets/js/testimonials.js" type="text/javascript" />
        </SEO>
    )
}

export default Seo
