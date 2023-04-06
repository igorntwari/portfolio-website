import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import{BsGithub} from "react-icons/bs"
import {FaStackOverflow} from "react-icons/fa"
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href='https://www.linkedin.com/in/igor-ntwali-366a72252/' target= "_blank" rel=" noreferrer" ><BsLinkedin/> </a>
    <a href='https://github.com/igorntwari' target= "_blank" rel=" noreferrer"><BsGithub/> </a>
    <a href='https://stackoverflow.com/users/20631920/igor' target= "_blank" rel=" noreferrer" ><FaStackOverflow/> </a>
    </div>
  )
}

export default HeaderSocials