import React, { Component } from "react"

class About extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Others</h1>
        <div className="hr_line line2">
          <div className="inner2"></div>
        </div>
        <h2 className="abouthead">
          Janelle <mark className="mark2">Tamayo</mark>
        </h2>
        <p>Full Stack Developer</p>
        <br></br>
        <p className="p10">I try my best to develop myself and pursue my different interests: in travel, youth entrepreneurship, climate change. </p>
        <div className="Edu">
          <div className="back1 back2">
            <i className="fa fa-book i1 i3"></i>
          </div>
        </div>
        <h3>Other Activities</h3>
        <div className="vr_line">
          <div className="vr_inner inn1"></div>
          <div className="vr_inner inn1"></div>
          <div className="vr_inner inn1"></div>
          <div className="vr_inner inn1"></div>
        </div>
        <h4>Philippine Youth Ambassador of Goodwill</h4>
        <p className="p1">Ship for the SouthEast and Japanese Youth Program</p>
        <p className="p1">Chosen representative for the Cordillera Administrative Region. A youth program of over 240+ participants voyaging to 5 countries: Japan, Vietnam, Singapore, Thailand, Indonesia</p>
        <p className="p1">
          <i className="fa fa-calendar i2"></i> 2016
        </p>
        <h4>Journalism Enthusiast</h4>
        <p className="p1">Climate Tracker, Development Innovation Insider</p>
        <p className="p1">Trained on citizen's journalism on climate change and article contributor to an online media platform.</p>
        <p className="p1">
          <i className="fa fa-calendar i2"></i> 2017
        </p>

        <h4>Innovator</h4>
        <p className="p1">TUKLAS(Tungo sa Kahandaan ng Pilipinas) Innovator/ Boardgame Developer</p>
        <p className="p1">Created a board game using Design Thinking with the rural youths of the community.</p>
        <p className="p1">
          <i className="fa fa-calendar i2"></i> 2018
        </p>

        <h4>Professional Fellows Program </h4>
        <p className="p1">Young SoutheEast Asian Leaders Initiative on Economic Empowerment</p>
        <p className="p1">US Immersion on different institutions for 6 weeks. I was assigned in Deloitte- Arlington, VA. </p>
        <p className="p1">
          <i className="fa fa-calendar i2"></i> 2019
        </p>
      </div>
    )
  }
}

export default About
