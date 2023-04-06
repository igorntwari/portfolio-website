import React from 'react'
import "./Nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {BiUserCircle} from "react-icons/bi"
import {BsFillJournalBookmarkFill} from "react-icons/bs"
import {MdOutlineMiscellaneousServices} from "react-icons/md"
import {MdContactMail} from "react-icons/md"
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav ] = useState("");
  
  return (
<nav> 
<a href='#header' onClick={() => setActiveNav("#header")} className={activeNav === "#header" ? "active": "" }>  <AiOutlineHome/></a>
<a href='#about' onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active": "" } > <BiUserCircle/></a>
<a href='#experience'  onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active": "" }> <BsFillJournalBookmarkFill/></a>
<a href='#services'  onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active": "" }> <MdOutlineMiscellaneousServices/></a>
<a href='#contacts'  onClick={() => setActiveNav("#contacts")} className={activeNav === "#contacts" ? "active": "" }> <MdContactMail/></a>
</nav>
  )
}

export default Nav;