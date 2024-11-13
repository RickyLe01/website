import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';




const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Ricky Le,</span> Data Engineer based in Seattle</h1>
      <p>A recent graduate with a Major in Geography: Data Science and a Minor in Informatics along with Data Analytics</p>
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <Link to="/resume" className='hero-resume'>My resume</Link>
      </div>
    </div>
  )
}

export default Hero