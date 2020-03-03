import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />

      <h1>I am Curro Casado</h1>
      <p>
        I am a Spaniard that arrived to the US thanks to Water Polo, and end up
        studying Computer Science in Lindenwood University, St Charles, MO.
        Currently in St. Louis, becoming a Full-Stack Developer looking to work
        as a Web Developer. Love learning and new challenges. Always ready for
        new ideas.{" "}
      </p>
      <h3>Porfolio</h3>
      <div>
        <p>GitHub API</p>
      </div>

      <h3>Achievements</h3>
      <div>
        <p>Water Polo</p>
        <p>Else</p>
      </div>
    </Layout>
  </>
)

export default IndexPage
