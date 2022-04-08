import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
     <Link to ="/page-2/"><StaticImage
      src="../images/Diffur_logo.png"
      width={1000}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Diffur Logo"
      style={{ marginBottom: `1.45rem` }}
    /></Link>
  </Layout>
)

export default IndexPage
