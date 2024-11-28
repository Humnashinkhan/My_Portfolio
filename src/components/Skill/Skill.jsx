import React from 'react'
import "./Skill.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCss3Alt, faGit, faHtml5, faJs, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
const Skill = () => {
  return (
    <>
    <div className="skill-container">
      <h1>My skills</h1>
       <p>What i Know</p>
    </div>
    <div className='skill-details'>
      <div className='skill-paragraph'>
          <h2>My creative skills & experiences</h2>
          <p>I am a Frontend Developer with a passion for learning and 
            can work with estimation of future tasks and client 
            feedback. I am highly-motivated, result oriented,
            hard-working, fast learner and constantly seeking to 
            improve my skills and am fully aware of the latest Front-end 
            Development Tools. I have a firm knowledge of JavaScript, 
            React.js,TypeScript, Redux Toolkit,HTML5, CSS3, TailwindCSS, 
            Bootstrap,React Hook Form, Jest, React Testing Library, 
            Webpack, Parcel.js, REST API,NPM, Git,Figma and Adobe Photoshop 
            and possess a good knowledge of computer software packages 
            (frameworks and tools) that are used in today’s technology.
          </p>
      </div>
      <div className="tech-logo-container">
           <div className="logo">
           <FontAwesomeIcon icon={faJs} className='Skill-icon' color='#F7DF1E' width="90px"/>
           <FontAwesomeIcon icon={faReact} className='Skill-icon' color='#61DAFB' width='90px'/> 
           <FontAwesomeIcon icon={faNode} className='Skill-icon' color='#339933' width='90px'/> 
           <FontAwesomeIcon icon={faHtml5} className='Skill-icon' color= '#E34F26' width='90px'/> 
           <FontAwesomeIcon icon={faCss3Alt} className='Skill-icon' color= '#1572B6' width='90px'/> 
           <FontAwesomeIcon icon={faGit} className='Skill-icon' color='#F05032' width='90px'/> 
           <img
           alt="tailwind"
           src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png"
           />
           <img 
            alt="redux"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png"
            />
           <img 
           alt="typescript"
           src="https://icon.icepanel.io/Technology/svg/TypeScript.svg"
           />
           <img
            alt="sql"
            src="https://www.svgrepo.com/show/331760/sql-database-generic.svg"
            />
           </div>
      </div>

    </div>
    </>
  )
}

export default Skill