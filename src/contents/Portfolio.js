import React, { Component } from "react"
import project1 from "../img/project1.jpg"
import project2 from "../img/project2.jpg"
import project3 from "../img/project3.jpg"
import project4 from "../img/project4.jpg"

class Portfolio extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Work</h1>
        <div className="hr_line line2">
          <div className="inner2 inner3"></div>
        </div>
        <div class="port_out port1">
          <div class="port_in">
            <a href="https://pennywiseapp.xyz/" target="_blank" rel="noopener noreferrer">
              <img src={project1} className="po1" alt="portfolio-projects"></img>
            </a>
          </div>
        </div>
        <div class="port_out port2">
          <div class="port_in">
            <a href="https://moola-banking.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src={project2} className="po1" alt="portfolio-projects"></img>
            </a>
          </div>
        </div>
        <div class="port_out port3">
          <div class="port_in">
            <a href="https://iwander-travel.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src={project3} className="po1" alt="portfolio-projects"></img>
            </a>
          </div>
        </div>
        <div class="port_out port4">
          <div class="port_in">
            <a href="https://the-pizza-place.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src={project4} className="po1" alt="portfolio-projects"></img>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
