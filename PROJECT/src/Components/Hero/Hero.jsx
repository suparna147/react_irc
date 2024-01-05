import React from 'react';
import './Hero.css';
import hand_icon from '../Assests/hand_icon.png';
import arrow_icon from '../Assests/arrow.png';
import hero_image from '../Assests/hero_image.png';
const Hero = () =>
{
    return(
        <div className='hero'>
          <div className="hero-left">
            <h1>SPORTEX</h1>
            <div>
                
                <p>GAME ON!</p>
                <p>WORLD OFF!!</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt=""/>
            </div>
          </div>
          <div className="hero-right">
            <img src={hero_image} alt=""/>
          </div>
        </div>
    )
}
export default Hero;