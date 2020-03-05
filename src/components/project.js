import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

class Project extends Component {
  render() {
    return (
      <>
        <div>{this.props.name}</div>
      </>
    )
  }
}

export default Project
