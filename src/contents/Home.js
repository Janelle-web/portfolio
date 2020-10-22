import React, { Component } from "react"
import ReactTypingEffect from "react-typing-effect"
import Social from "../components/Social"

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <h1>
          Janelle <mark>Tamayo</mark>
        </h1>
        <ReactTypingEffect className="typingeffect" text={["MERN Developer", "A UI/UX Designer", "Startup enthusiast", "Lifelong Learner"]} speed={150} eraseDelay={800} />
        <div className="hr_line">
          <div className="hr_inner"></div>
        </div>
        <Social />
      </div>
    )
  }
}

export default Home
