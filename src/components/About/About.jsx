import React, { useEffect, useState } from 'react'
import "./About.css";
const About = () => {

  const titles = ["Frontend Developer", "React Developer"];
    const [currentTitle, setCurrentTitle] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length); // Cycle through titles
      }, 2000); // Change every 2 seconds
  
      return () => clearInterval(interval); // Clean up interval on component unmount
    }, [titles]);

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
        <h2>I'm Humnashin and I'm a <span>{titles[currentTitle]}</span></h2>
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