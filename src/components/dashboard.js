import React from "react"
import { Link } from "gatsby"

const DashBoard = () => {
  return (
    <div
      style={{
        flexGrow: "2",
        display: "flex",
        justifyContent: "space-around",
        maxWidth: 500,
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          alignSelf: "flex-end",
          marginBottom: `1rem`,
        }}
      >
        Home
      </Link>
      <Link
        to="/projects/"
        style={{
          color: "white",
          alignSelf: "flex-end",
          marginBottom: `1rem`,
        }}
      >
        Project
      </Link>
      <Link
        to="/about/"
        style={{
          color: "white",
          alignSelf: "flex-end",
          marginBottom: `1rem`,
        }}
      >
        About
      </Link>
    </div>
  )
}
export default DashBoard
