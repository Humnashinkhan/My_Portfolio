import React from 'react'
import "./About.css"
const About = () => {
  return (
    <>
    <div className="about-container">
       <h1>About me</h1>
       <p>Who am I</p>
    </div>
    <div className="about-img">
      <div className="left-img">
        <img
        alt="img"
        src="https://asistensia.com/assets/about-img-5653c8506cf39df77a5ff65c60d79290e34bbbb639ba525faff018aaa147d0fa.jpg"
        />
      </div>
      <div className="about-us">
        <h2>I'm Humnashin and I'm a Frontend Developer</h2>
        <p>I am a dedicated front-end developer focused on creating attractive 
          and user-friendly websites. I am passionate about translating design 
          concepts into interactive digital experiences and continuously 
          improving my skill set to stay updated with the latest industry trends. 
          My portfolio showcases a variety of projects that demonstrate my 
          ability to deliver responsive and dynamic web applications.
        </p>
      </div>
    </div>
    </>
  )
}

export default About