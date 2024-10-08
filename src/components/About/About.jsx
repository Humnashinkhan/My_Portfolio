import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='about-container'>
      <div className="intro">
        <h2>About Me</h2>
        <div className='about'>
        <p>"I am Humnashin Khan.i did my graduation 
            in computer science engineering from Amity university, jharkhand.
            with aggregate cgpa of 8.19.
            I have keen interest in Frontend development have an excellent command 
            HTML, CSS,Tailwind CSS to implement design, Javascript and hava an command on
            React Javascript library. Basic knowledge of NodeJS, Express, Have basic command on SQL
             and oracle database gained by Working on different projects in Bachelor Degree.
             " </p>
        </div>
  </div>
      <div className='education'>
        <h2>Education</h2>
        <div className='edu-details'>
         <h1>2019-2023</h1>
         <h3>Bachelor of Engineering</h3>
         <h4>Amity University,Jharkhand</h4>
         <p>Grade: First division</p>
         </div>
         <div className='intern'>
          <h2>Internship</h2>
          <div className="about-internship">
            <h1>Company Name: Valutico</h1>
            <h3>Duration: 6 Months from Feb 2023-Aug 2023</h3>
            <h4>location: Remote</h4>
            <p>Technology used:Javascript, ReactJS, Typescript, Css, Html</p>
            
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default About