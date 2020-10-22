import React, { Component } from "react"

class Social extends Component {
  render() {
    return (
      <div className="social">
        <div className="btnsame btn1">
          <a href="https://github.com/Janelle-web" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div className="btnsame btn2">
          <a href="https://twitter.com/j_looped" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="btnsame btn3">
          <a href="https://ph.linkedin.com/in/janelle-dulnuan-0b1177146" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
        <div className="btnsame btn4">
          <a href="https://gitlab.com/Jcdulnuan" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-gitlab"></i>
          </a>
        </div>
        <div className="btnsame btn5">
          <a href="https://gitlab.com/Jcdulnuan" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-blog"></i>
          </a>
        </div>
      </div>
    )
  }
}

export default Social
