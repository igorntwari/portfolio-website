import React from 'react'
import "./services.css"
import {GiCheckMark} from "react-icons/gi"
const services = () => {
  return (
    <section id="services">
     <h5>What I Offer</h5>
     <h2>services</h2>
     
      <div className='container services__container'>
       <article className='service'>
        <div className='service__head'>
        <h3>UI/UX Design</h3>
        </div>
        <ul className='service__list'>
        <li>
          <GiCheckMark  className='service__list-icon'/>
          <p>User Research and Analysis.</p>
        </li>
        <li>
          <GiCheckMark  className='service__list-icon'/>
          <p>Front-end development.</p>
        </li>
        <li>
          <GiCheckMark  className='service__list-icon'/>
          <p>Branding and identity design.</p>
        </li>
        <li>
          <GiCheckMark  className='service__list-icon'/>
          <p>Interface design.</p>
        </li>
        <li>
          <GiCheckMark  className='service__list-icon'/>
          <p>Usability testing.</p>
        </li>
        <li>
          <GiCheckMark  className='service__list-icon'/>
          <p>Interaction design.</p>
        </li>
        </ul>
       </article>
       {/*-----------------------END OF UI/UX DESIGN ---------*/}
        
       <article className='service'>
        <div className='service__head'>
        <h3>Web Development</h3>
        </div>
        <ul className='service__list'>
        <li>
          <GiCheckMark  className='service__list-icon'/>
          <p>Back-end development.</p>
        </li>
        <li>
          <GiCheckMark  className='service__list-icon'/>
          <p>Front-end development.</p>
        </li>
        <li>
          <GiCheckMark  className='service__list-icon'/>
          <p>Full-stack development.</p>
        </li>
        <li>
          <GiCheckMark  className='service__list-icon'/>
          <p>Responsive design.</p>
        </li>
        <li>
          <GiCheckMark  className='service__list-icon'/>
          <p>Integration with third-party tools
           and services.</p>
        </li>
        <li>
          <GiCheckMark  className='service__list-icon'/>
          <p>Website maintenance and support.</p>
        </li>
        <li>
          <GiCheckMark  className='service__list-icon'/>
          <p>Search engine optimization (SEO).</p>
        </li>
        </ul>
       </article>
        {/*-----------------------END OF WEB DEVELOPMENT ---------*/}

        <article className='service'>
        <div className='service__head'>
        <h3>Content Creation</h3>
        </div>
        <ul className='service__list'>
        <li>
          <GiCheckMark  className='service__list-icon'/>
          <p>Social media management.</p>
        </li>
        <li>
          <GiCheckMark  className='service__list-icon'/>
          <p>Email marketing.</p>
        </li>
        <li>
          <GiCheckMark  className='service__list-icon'/>
          <p>Content strategy development.</p>
        </li>
        <li>
          <GiCheckMark  className='service__list-icon'/>
          <p>Analytics and reporting.</p>
        </li>
        </ul>
       </article>

      </div>
    </section>
  )
}

export default services