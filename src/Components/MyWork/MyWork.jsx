import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { Link } from 'react-router-dom';


const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className='mywork-title'>
        <h1>My latest work</h1>
      </div>
      <Link to='/projects' className='mywork-container'>
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />
        })}
      </Link>
      <Link to="/projects" className='mywork-showmore'>
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </Link>
    </div>
  )
}

export default MyWork