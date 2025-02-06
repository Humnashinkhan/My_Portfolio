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
        src="https://img.freepik.com/premium-vector/work-home-illustration-design-freelance-woman-sitting-chair-working-laptop_100562-415.jpg?w=740"
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