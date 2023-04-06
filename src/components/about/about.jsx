import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.jpg"
import {FaAward} from "react-icons/fa"
import {HiUsers} from "react-icons/hi"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
const about = () => {
  return (
    <section id="about">
    <h5> Get To Know</h5>
    <h2>ABOUT ME</h2>
<div className='container about__container'>  
 <div className='about__me'> 
  <div className='about__me-image'>
   <img src={ME} alt = "MYSELF"/>
   </div> 
  </div>
   
   <div className='about__content'>
   <div className='about__cards'>  
    <article className='about__card'>
    <FaAward className='about__icon'/>
     <h5>Experince</h5>
     <small> 1 year working Experince</small>
    </article>
     
    <article className='about__card'>
    <HiUsers className='about__icon'/>
     <h5>clients</h5>
     <small>30+ worldwide</small>
    </article>

    <article className='about__card'>
    <AiOutlineFundProjectionScreen className='about__icon'/>
     <h5>projects</h5>
     <small>20+ complited projects</small>
    </article>
   </div>
   <p>
  i am enthusiastic about learning and improving my skills,
   and i'm eager to work on projects that challenges my capabilities and helps to grow. 
   i have a good understanding of fundamental programming concepts and i'm familiar with web development technologies such as HTML, CSS, and JavaScript.
   As a fullstack developer, 
   i have a strong grasp of both front-end and back-end development,
   and can work with databases, APIs, and server-side technologies.
   i'm comfortable using frameworks and libraries such as 
   React, mongoDB, Node.js, and Express to build web applications.
   i'm a team player who communicates well and is open to feedback.
   i'm also proactive and take initiative to solve problems and suggest improvements. i'm committed to writing clean, maintainable code that adheres to best practices and standards. Overall, i'm really excited to continue learning and growing as a developer.
  </p> 
  <a href='#contacts'  className='btn btn-primary' > Let's talk </a>
  </div>
  </div>
  
    </section>
  )
}

export default about