
import './hero.css'
import Lottie from "lottie-react";

import devAnimation from '../../../public/anmation/dev.json';

import React from 'react'

function Hero() {
  
  return (
    <section className='hero'>
      <div className="left-section flex">
        <div className="parent-avatar flex">‍
          <img src="public/IMG_7018-modified.png" className='avatar' alt="" />
          <div className='icon-verified'></div>
        </div>
        <h1 className='title'>"Full-Stack developer, engineer, and problem solver"</h1>
        <p className='subtitle'>I create digital experiences that make a difference. I'm a software designer and entrepreneur based in San Francisco.
          With a passion for innovation and a commitment to excellence.

        </p>
        <div className="icons">
          <a href="https://github.com/ggghsjsgghjajsggsh"><div className="icon-github"></div></a>
          <a href="https://www.linkedin.com/in/ahmed-eltahaan-256430295/"><div className="icon icon-linkedin"></div></a>
          <a href="https://x.com/AhmedEltahaan1"><div className="icon icon-twitter"></div></a>
          <a href="https://www.instagram.com/ahmed.tahaan.9/?__pwa=1"><div className="icon icon-instagram"></div></a>
        </div>
      </div>

        <div className="right-section animation">
              <Lottie
                           
                           className='contact-animation'
                           animationData={devAnimation} 
                          
                            style={{width: '355px', height: '355px', translate:"100px 55px"}}
                           />
        </div>
    </section>
  )
}

export default Hero