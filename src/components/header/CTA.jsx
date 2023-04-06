import React from 'react'
import CV from "../../assets/igorntwali.pdf"
const CTA = () => {
  return (
    <div className='cta'>
    <a href={CV} download  className='btn'>  Download my cv</a>
    <a href='#contacts' className="btn btn-primary"> Contact me </a>

    </div>
  )
}

export default CTA