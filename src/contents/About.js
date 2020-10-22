import React, { Component } from "react"

class About extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">About Me</h1>
        <div className="hr_line line2">
          <div className="inner2"></div>
        </div>
        <h2 className="abouthead">
          Janelle <mark className="mark2">Tamayo</mark>
        </h2>
        <p>Full Stack Developer</p>
        <br></br>
        <p className="p10">
          I am a career shifter who once thought that coding was sort of an elite activity for the gifted. Because of the pandemic and a certain inkling to pursue a high school dream, I then took the time to learn tech stacks and got hooked ever since. <br />
          In 2017, I learned skills focusing on Social Media Marketing, Digital Marketing, Wordpress Development but after a significant amount of time I felt that it's still incomplete.{" "}
        </p>
        <div className="Edu">
          <div className="back1 back2">
            <i className="fa fa-book i1 i3"></i>
          </div>
        </div>
        <h3>Education</h3>
        <div className="vr_line">
          <div className="vr_inner inn1"></div>
          <div className="vr_inner inn2"></div>
        </div>
        <h4>Full-Stack Development</h4>
        <p className="p1">Zuitt Coding Bootcamp</p>
        <p className="p1">
          <i className="fa fa-calendar i2"></i> June - Oct 2020
        </p>
        <h4>Masters in Management</h4>
        <p className="p1">University of the Philippines- Baguio</p>
        <p className="p1">
          <i className="fa fa-calendar i2"></i> June 2021
        </p>

        <h4>Bachelors of Science in Nursing</h4>
        <p className="p1">Saint Louis University</p>
        <p className="p1">
          <i className="fa fa-calendar i2"></i> March 2010
        </p>

        <h3 className="sk_head">Skills</h3>
        <div className="sk">HTML</div>
        <div className="sk s2">CSS</div>
        <div className="sk s3">JavaScript</div>
        <div className="sk s4">React</div>
        <div className="sk s5">NodeJS</div>
        <div className="sk s6">Wordpress</div>
      </div>
    )
  }
}

export default About
