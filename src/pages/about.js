import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Page about" />
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <div>
        <h2>Me</h2>
        <p>Paragraph of me</p>
      </div>
      <div>
        <h2>Skills</h2>
        <p>Skills</p>
      </div>
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h2>Contact</h2>
    </div>
  </Layout>
)

export default About
