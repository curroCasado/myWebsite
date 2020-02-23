import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>I am Curro Casado</h1>
    <p>Welcome to my new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to="/page-2/">About</Link>
  </Layout>
)

export default IndexPage
