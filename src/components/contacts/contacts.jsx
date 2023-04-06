import React from 'react'
import "./contacts.css"
import {AiOutlineMail} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import  { useRef } from 'react';
import emailjs from "emailjs-com"
const Contacts = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_leroxgb', 'template_mytg8nw', form.current, 'cVJ_BPRUa0R5oIyQW')
  e.target.reset()
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};


  return (
    <section id="contacts">
    <h5> Get In Touch With me</h5>
     <h2>Contant Me</h2>

     <div className='container contact__container'>

      <div className='contact__options'>
     <article className = "contact__option">
      <AiOutlineMail  className='contact__option-icon'/>
      <h4>E-mail</h4>
      <h5>igorntwari28@gmail.com</h5>
      <a href='mailto:igorntwari28@gmail.com' rel="noreferrer" target= "_blank"> send a message</a>
     </article>
     <article className = "contact__option" >
      <BsInstagram  className="contact__option-icon" />
      <h4>Instagram</h4>
      <h5>yrn.igor</h5>
      <a href='https://www.instagram.com/yrn.igor/'  rel="noreferrer" target= "_blank"> send a message</a>
     </article>
     <article className = "contact__option">
      <BsWhatsapp  className="contact__option-icon" />
      <h4>WhatsApp</h4>
      <h5>clink the link down below</h5>
      <a href='https://api.whatsapp.com/send?phone+250788712462' rel="noreferrer" target= "_blank"> send a message</a>
     </article>
      </div>
    {/* END OF CONTACT OPTIONS */}

    <form ref={form} onSubmit = {sendEmail}>
       <input type="text" name="name"  placeholder='your Full Name' required/>
        <input type = "email" name ="email" placeholder='your E-mail' required/>
        <textarea name = "message" rows= "7" placeholder='write your message here Your Message' required></textarea>
      <button type ="submit" className='btn btn-primary'> send Message</button>
    </form>


     </div> 
    </section>
  )
}

export default Contacts