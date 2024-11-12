import React from 'react'
import './About.css'
import profile_img from '../../assets/about_profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About me</h1>
      </div>
      <div className='about-sections'>
        <div className='about-left'>
          <img src={profile_img} alt="" />
        </div>
        <div className='about-right'>
          <div className="about-para">
              <p>As a University of Washington graduate with a BA in Geography (Data Science concentration) and a minor in Informatics and Data Analytics, I have honed my skills in SQL, Python, Java, ArcGIS Pro, JavaScript, HTML/CSS, and React. I have led projects to assess health center accessibility, create interactive COVID-19 web maps, and apply machine learning to enhance web applications.</p>
              <p>Professionally, I managed inventory and increased sales as an Operations Coordinator at Sunright Corporation. As a program leader of the Vietnamese Student Association, I grew event attendance and my volunteer work at Hòa Bình Orphanage improved English proficiency for orphans. My commitment to leveraging technology for social good drives my dedication to innovating accessible solutions, especially in healthcare information systems.</p>
          </div>
          <div className='about-skills'>
            <div className='about-skill'>
              <p>Python</p><hr style={{width: "90%"}} /></div>
              <div className='about-skill'>
              <p>Java</p><hr style={{width: "40%"}} /></div>
              <div className='about-skill'>
              <p>JavaScript</p><hr style={{width: "80%"}} /></div>
              <div className='about-skill'>
              <p>ArchGIS Pro</p><hr style={{width: "60%"}} /></div>
              <div className='about-skill'>
              <p>SQL</p><hr style={{width: "90%"}} /></div>
              <div className='about-skill'>
              <p>R</p><hr style={{width: "50%"}} /></div>
              <div className='about-skill'>
              <p>HTML & CSS</p><hr style={{width: "90%"}} /></div>
              <div className='about-skill'>
              <p>QGIS</p><hr style={{width: "60%"}} /></div>
          </div>
        </div>
      </div>
      <div className='about-achievements'>
        <div className='about-achievement'>
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>15+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  )
}

export default About