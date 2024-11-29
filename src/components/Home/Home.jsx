import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='home-container'>
        <div className='left-text'>
        <h2>Hello!</h2>
        <h1>I'm <span>Humnashin</span><br />
             <span>Khan</span></h1>
              <p>And I'm a <strong>Frontend Developer</strong> with 1 year of<br />
                 Experience Using <span>ReactJs</span> and <span>NodeJs.</span> 
                 Reach out if you'd like to learn more!</p>
                 <a href="#contact"className="button" >Contact me</a>
             </div>
             <div className='right-img'>
                <img src="/assets/intro-img.webp" alt=''/>
             </div>
    </div>
  )
}

export default Home