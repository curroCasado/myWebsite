import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Page about" />
    <h1>ABOUT</h1>
    <p>Welcome to page 2</p>
    <p>This the About page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
