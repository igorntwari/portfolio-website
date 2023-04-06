import React from 'react'
import "./Header.css"
import CTA from './CTA'
import profile from "../../assets/ceo.jpg"
import HeaderSocials from './HeaderSocials'



const header = () => {
  return (
    <header id ="header">
      <div className='container header__container'>
      <h5>Hello I'm</h5>
      <h1> Ntwali Igor </h1>
      <h5 className='text-light'>Fullstack Developer</h5>
      <CTA />
      <HeaderSocials />

      <div className='profile'>
       <img src={profile} alt = "me"/>
      </div>
      <a href='#contacts' className='scroll__down'> access my contacts</a> 
       </div>
    </header>
  )
}

export default header;