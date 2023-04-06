import React from 'react'
import "./footer.css"
import {FiInstagram} from "react-icons/fi"
import {TfiTwitter} from "react-icons/tfi"
import {RxDiscordLogo} from "react-icons/rx"
const footer = () => {
  return (
    <footer id="footer">
    
    <a href='#Nav' className='footer__logo'>IGOR NTWALI</a>

    <ul className='permalinks'>
     <li><a href='#header'>Home</a></li>
     <li><a href='#about'>About</a> </li>
     <li><a href='#experience'>Experience</a> </li>
     <li><a href='#services'>Services</a> </li>
     <li><a href='#contacts'>Contacts</a> </li>
     </ul>
    <div className="footer__socials">
      <a href='https://instagram.com/yrn.igor/' target= "_blank" rel=" noreferrer" ><FiInstagram /> </a>
      <a href='https://twitter.com/nyiramacumu/' target= "_blank" rel=" noreferrer" ><TfiTwitter /></a>
      <a href='https://discord.com/channels/igorntwari#3534/' target= "_blank" rel=" noreferrer"><RxDiscordLogo /></a>
    </div>
   
    <div className='footer__copyright'>
      <small>&copy; Igor NTWALI. All rights resrved.</small>
    </div>
    </footer>
  )
}

export default footer