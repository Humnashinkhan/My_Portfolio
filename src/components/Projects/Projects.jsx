import React from 'react'
import './Projects.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
const Projects = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, // 2 slides on smaller screens
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // 1 slide on mobile screens
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };
  const projectData = [
    {
      title: 'To-Do List App',
      description: 'A to-do list application with add, edit, and delete functionality.',
      technologies: [faHtml5, faCss3Alt, faJs, faReact],
      liveLink: 'https://your-live-link.com',
      codeLink: 'https://github.com/Humnashinkhan/todo-list-react-project',
      image: '/assets/img2.jpg',
    },
    {
      title: 'My Portfolio Website',
      description: 'CRUD (Create, Read, Update, Delete) application built using React.js.',
      technologies: [faHtml5, faCss3Alt, faJs, faReact],
      liveLink: 'https://your-live-link.com',
      codeLink: '',
      image: '/assets/img3.png',
    },
    {
      title: 'Quiz Application',
      description: 'A fully functional Quiz App built with React.js. ',
      technologies: [faHtml5, faCss3Alt, faJs, faReact],
      liveLink: 'https://your-live-link.com',
      codeLink: 'https://github.com/Humnashinkhan/Quiz_App-using-react',
      image: '/assets/img4.webp',
    },
    {
      title: 'CRUD Application',
      description: 'CRUD (Create, Read, Update, Delete) application built using React.js.',
      technologies: [faHtml5, faCss3Alt, faJs, faReact],
      liveLink: 'https://your-live-link.com',
      codeLink: 'https://github.com/Humnashinkhan/CRUD_Application',
      image: '/assets/img5.webp',
    },
    {
      title: 'To-Do List App',
      description: 'A to-do list application with add, edit, and delete functionality.',
      technologies: [faHtml5, faCss3Alt, faJs, faReact],
      liveLink: 'https://your-live-link.com',
      codeLink: 'https://github.com/yourusername/todo-app',
      image: '/assets/img2.jpg',
    },
  ];
  return (
    <div className='Project-Container'>
        <h1>My Projects</h1>
        <div className="projects-grid">
        <Slider {...settings}>
        {projectData.map((project, index) => (
        <div key={index} className="project-card">
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
     </Slider>
    </div>
    </div>

  )
}

export default Projects