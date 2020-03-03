import React from "react"

const Footer = () => {
  return (
    <>
      <footer style={{ background: `#00001a` }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            href="https://www.linkedin.com/in/curro-casado-9626a8193/"
            style={{
              color: `#803535`,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/curroCasado"
            style={{
              color: `#803535`,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            GitHub
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100008450767519"
            style={{
              color: `#803535`,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            Facebook
          </a>
        </div>
        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org" style={{ color: `#803535` }}>
              Gatsby
            </a>{" "}
            By Curro Casado
          </p>
        </div>
      </footer>
    </>
  )
}
export default Footer
