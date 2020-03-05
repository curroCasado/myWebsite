import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Page about" />
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <div>
        <h2>Me</h2>
        <p
          className=" text-wrap"
          style={{
            textAlign: "left",
            maxWidth: 460,
            marginRight: 15,
            wordWrap: "normal",
          }}
        >
          I am a Spaniard that arrived to the US thanks to Water Polo, and end
          up studying Computer Science in Lindenwood University, St Charles, MO.
          Currently in St. Louis, becoming a Full-Stack Developer looking to
          work as a Web Developer. Love learning and new challenges. Always
          ready for new ideas.
        </p>
      </div>
      <div
        style={{
          width: 5,
          backgroundColor: "grey",
        }}
      />
      <div>
        <h2>Programming Language</h2>
        <ul>
          <li>Javascript</li>
          <li>Java</li>
          <li>C++</li>
          <li>CSS</li>
          <li>PHP</li>
        </ul>

        <h2>Languages</h2>
        <ul>
          <li>English</li>
          <li>Spanish</li>
        </ul>
      </div>
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 100,
      }}
    >
      <h2>Contact</h2>
      <dl className="row" style={{ paddingLeft: 150 }}>
        <dt className="col-sm-3">Email</dt>
        <dd className="col-sm-9">currocuo9625@gmail.com</dd>

        <dt className="col-sm-3">Home</dt>
        <dd className="col-sm-9">1600 Pine Str, St. Louis, MO, 63103.</dd>

        <dt className="col-sm-3">Mobile</dt>
        <dd className="col-sm-9">(314) 537-5834</dd>
      </dl>
    </div>
  </Layout>
)

export default About
