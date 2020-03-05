import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query nameProject {
      githubViewer {
        login
        repositories {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <Layout>
        <SEO title="Home" />

        <h1>I am Curro Casado</h1>
        <p>
          I am a Spaniard that arrived to the US thanks to Water Polo, and end
          up studying Computer Science in Lindenwood University, St Charles, MO.
          Currently in St. Louis, becoming a Full-Stack Developer looking to
          work as a Web Developer. Love learning and new challenges. Always
          ready for new ideas.{" "}
        </p>
        <h3>Porfolio</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {data.githubViewer.repositories.edges.map(project => (
            <Project name={project.node.name} />
          ))}
        </div>
        <h3>Achievements</h3>
        <div>
          <p>Water Polo</p>
          <p>Else</p>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
