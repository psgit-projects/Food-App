import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Foooter = () => {
  return (
    <div className='footer' id='footer'>
        <div className="f-c">
            <div className="f-c-l">
              <img src={assets.logo} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, at molestiae magnam quas non culpa quaerat laboriosam accusantium, porro, voluptas sequi. Ipsum minus corporis expedita minima necessitatibus ipsam aspernatur et?</p>
              <div className="f-s-i">
               <img src={assets.linkedin_icon} alt="" />
               <img src={assets.twitter_icon} alt="" />
               <img src={assets.facebook_icon} alt="" />
              </div>
            </div>
            <div className="f-c-r">
                      <h2>Company</h2>
                      <ul>
                        <li>Home</li>
                        <li>Aboutus</li>
                        <li>Delivery</li>
                        <li>Policy</li>
                      </ul>
            </div>
            <div className="f-c-c">
<h2>Get in Touch</h2>
<ul>
    <li>77719686554</li>
    <li>concets@tamoto.com</li>
</ul>
            </div>
        </div>
      <hr />
        <p className='f-cop'>Copyright 2024© Tamoto.Com</p>
    </div>
  
  )
}

export default Foooter