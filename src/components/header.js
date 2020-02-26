import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import DashBoard from "./dashboard"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#00001a`,
      marginBottom: `1.45rem`,
      display: "flex",
      justifyContent: "flex-start",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
        flexGrow: "1",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h2
        style={{
          color: `#803535`,
          marginBottom: `1rem`,
        }}
      >
        Web Developer
      </h2>
    </div>
    <DashBoard />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
