import React from "react"

const Footer = () => {
  return (
    <>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> By curro casado
      </footer>
    </>
  )
}
export default Footer
