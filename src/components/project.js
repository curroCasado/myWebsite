import React, { Component } from "react"

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <div>{this.props.name}</div>
      </>
    )
  }
}

export default Project
