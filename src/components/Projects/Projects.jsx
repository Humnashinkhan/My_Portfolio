import React from 'react'
import "./Projects.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
const Projects = () => {

  const projectData = [
    {
      title: 'My Portfolio Website',
      description: 'This is a portfolio website built using React.js.It showcases my skills,and experience as a Frontend Developer.',
      technologies: [faHtml5, faCss3Alt, faJs, faReact],
      liveLink: 'https://your-live-link.com',
      codeLink: 'https://github.com/Humnashinkhan/My_Portfolio',
      image: '/assets/img3.png',
    },
    {
      title: 'My_Netflix',
      description: 'Netflix using React and tailwindCSS.it is kind of like a Netflix where i have used to search Movie.',
      technologies: [faHtml5, faCss3Alt, faJs, faReact],
      liveLink: 'https://netflix-gpt-eight-phi.vercel.app/',
      codeLink: 'https://github.com/Humnashinkhan/Netflix-gpt',
      image: '/assets/img7.jpg',
    },
    {
      title: 'Asistensia Website',
      description: 'It was developed for a company as Frontend developer trainee Task.',
      technologies: [faHtml5, faCss3Alt, faJs, faReact],
      liveLink: 'https://asistensia-website.vercel.app/',
      codeLink: 'https://github.com/Humnashinkhan/Asistensia_Website',
      image: '/assets/img8.png',
    },
    {
      title: 'CRUD Application',
      description: 'CRUD (Create, Read, Update, Delete) application built using React.js.',
      technologies: [faHtml5, faCss3Alt, faJs, faReact],
      liveLink: 'https://crud-application-ruby.vercel.app/',
      codeLink: 'https://github.com/Humnashinkhan/CRUD_Application',
      image: '/assets/img5.jpeg',
    },
  ];
  return (
    <>
    <div className='project-container'>
        <h1>My Projects</h1>
         <p>Check my Work</p>

    <div className='project-grid'>
      <div className="cards-container">
       {projectData.map((project, index) => (
      <div key={index} className='project-card'>
      <img src={project.image} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="technologies-used">
              {project.technologies.map((tech, techIndex) => (
                <FontAwesomeIcon key={techIndex} icon={tech} className="tech-icon" />
              ))}
            </div>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-live">View Live</a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-code">
                <FontAwesomeIcon icon={faGithub} /> View Code
              </a>
            </div>
      </div>
    ))}
    </div>
    </div>
    </div>
    </>
  )
}

export default Projects