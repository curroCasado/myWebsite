import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Page about" />
    <h1>About</h1>
    <p>Paragraph of me</p>
    <p>Skills</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
