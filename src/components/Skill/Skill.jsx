import React from 'react'
import './Skill.css'
import { Circle } from 'rc-progress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBootstrap, faCss3Alt, faGit, faHtml5, faJs, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
const Skill = () => {
  return (
    <div className='skill-container'>
      <h1>My Skills</h1>
      <div className='skill-details'>
        <div className='Technical-Skill'>
           <h2>Technical Skills</h2>
       <div className='tech-skill'>
         <div className='LOGO'>
           <FontAwesomeIcon icon={faHtml5} className='Skill-icon' color= '#E34F26' width='80px'/> 
             <span>HTML</span>
          </div>   
          <div className='LOGO'>
           <FontAwesomeIcon icon={faCss3Alt} className='Skill-icon' color= '#1572B6' width='80px'/> 
             <span>CSS</span>
          </div>   
          <div className='LOGO'>
           <FontAwesomeIcon icon={faJs} className='Skill-icon' color='#F7DF1E' width='80px'/> 
             <span>JavaScript</span>
          </div>  
           <div className='LOGO'> 
           <FontAwesomeIcon icon={faReact} className='Skill-icon' color='#61DAFB' width='80px'/> 
             <span>ReactJS</span>
          </div>   
          <div className='LOGO'>
           <FontAwesomeIcon icon={faNode} className='Skill-icon' color='#339933' width='80px'/> 
             <span>NodeJS</span>
          </div>
          <div className='LOGO'>
           <FontAwesomeIcon icon={faCss3Alt} className='Skill-icon' color='#87CEFA' width='80px'/> 
             <span>TailwindCss</span>
          </div>
          <div className='LOGO'>
           <FontAwesomeIcon icon={faGit} className='Skill-icon' color='#F05032' width='80px'/> 
             <span>Git</span>
          </div>
          <div className='LOGO'>
           <FontAwesomeIcon icon={faDatabase} className='Skill-icon' color='#4D4D4D' width='80px'/> 
             <span>SQL</span>
          </div>
          <div className='LOGO'>
           <FontAwesomeIcon icon={faBootstrap} className='Skill-icon' color='#7952B3' width='80px'/> 
             <span>Bootstrap</span>
          </div>
          </div>
          </div> 
        <div className='professional-Skill'>
          <h2>Professional Skills</h2>
          <div className='skill-grid'>
            <div className='Skill-Bars' style={{height: 130, width:130}}>
              <span>Creativity</span>
             <Circle percent={90} strokeWidth={4} strokeColor="#ee2e7c" />
             <div className="percentage-text">{`90%`}</div>
            </div>
            <div className='Skill-Bars' style={{height: 130, width:130}}>
                <span>Communication</span>
                <Circle percent={65} strokeWidth={4} strokeColor="#ee2e7c" />
                <div className="percentage-text">{`65%`}</div>
           </div>
            <div className='Skill-Bars' style={{height: 130, width:130}}>
                <span>ProblemSolving</span>
                <Circle percent={75} strokeWidth={4} strokeColor="#ee2e7c" />
                <div className="percentage-text">{`75%`}</div>
           </div>
            <div className='Skill-Bars'style={{height: 130, width:130}}>
                <span>Teamwork</span>
                <Circle percent={85} strokeWidth={4} strokeColor="#ee2e7c" />
                <div className="percentage-text">{`85%`}</div>
         </div>
       </div>
      </div>
      </div>
      </div>  




  )
}

export default Skill