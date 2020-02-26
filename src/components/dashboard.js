import React from "react"
import { Link } from "gatsby"

const DashBoard = () => {
  return (
    <div
      style={{
        flexGrow: "2",
        display: "flex",
        justifyContent: "space-around",
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
        to="/page-2/"
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
