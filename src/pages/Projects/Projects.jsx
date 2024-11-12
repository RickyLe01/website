import React from 'react'
import Project1 from '../../assets/project1.png'
import Project2 from '../../assets/project2.png'
import Project3 from '../../assets/project3.png'
import Project4 from '../../assets/project4.png'
import Project5 from '../../assets/project5.png'
import Project6 from '../../assets/project6.png'
import './Projects.css'

const Projects = () => {
  return (
    <div href="#top" className='projects'>
      <div className='projects-title'>
        <h1>My Projects</h1>
      </div>
      <div className='project1-sections'>
        <div className='project1-left'>
          <a href='https://rickyle01.github.io/geog328_lab03/index.html'><img src={Project1} alt="" /></a>
        </div>
        <div className='project1-para'>
          <p>Successfully developed a web application that asynchronously loads and visualizes GeoJSON data, displaying
            earthquake data in a sortable table and plotting both hospital locations and Vietnamese county boundaries on a
            Mapbox map. Allowing users to locate the nearest hospital in Vietnam within their facility. Along with seeing the amenities
            that the hospital practiced</p>
        </div>
      </div>
      <div className='project2-sections'>
        <div className="project2-para">
          <p>Developed an interactive choropleth web map that visually represents population density and
            allows users to see detailed data on hover. Created an additional map visualizing COVID-19 data for Washington counties, demonstrating the ability to
            work with different datasets and customize map features accordingly
          </p>
        </div>
        <div className="project2-right">
          <a href='https://rickyle01.github.io/geog328_lab04/index.html'><img src={Project2} alt="" /></a>
        </div>
      </div>
      <div className='project3-sections'>
        <div className='project3-left'>
          <img src={Project3} alt='' />
        </div>
        <div className='project3-para'>
          <p>Applied machine learning algorithms in Python to analyze 10,000+ user interactions, enhancing resource recommendations by 25% and increasing user engagement. Developed a React webpage that would help users log in and created a function to allow them to take pictures
            and post them to the application</p>
        </div>
      </div>
    </div>
  )
}

export default Projects