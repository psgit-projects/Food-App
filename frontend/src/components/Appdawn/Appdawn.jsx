import React from 'react'
import { assets } from '../../assets/assets'
import './Appdawn.css'

const Appdawn = () => {
  return (
    <div className='app-dawn' id='app-d'>
        <p>For Better Experience Dawanload The App <br />Tamoto App</p>
        <div className="a-d-p">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>


    </div>
  )
}

export default Appdawn
