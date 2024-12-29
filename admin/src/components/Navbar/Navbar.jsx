import React from 'react'
import { assets } from './../../../../admin/src/assets/assets';

const Navbar = () => {
  return (
    <div className='nav'>
        <img className='logo' src={assets.logo} alt="" />
        <img className='pro' src={assets.profile_icon} alt="" />
    </div>
  )
}

export default Navbar