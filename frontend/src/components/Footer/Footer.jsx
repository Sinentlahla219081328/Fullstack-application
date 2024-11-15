import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='capereadslogofooter' src={assets.logo} alt="" />
            <p>We aim to offer a convenient, user-friendly, and secure online shopping experience with competitive pricing and prompt delivery, reaching even the most remote and underserved areas. With a strong commitment to promoting literacy, education, and a culture of reading, we strive to make quality literature accessible to all..</p>
            <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+27 21 098 765 46</li>
              <li>capereads@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024 © CapeReads - All rights reserved.</p>
    </div>
  )
}

export default Footer