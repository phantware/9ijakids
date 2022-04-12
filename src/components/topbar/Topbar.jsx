import React from 'react'
import './topbar.css'

const Topbar = () => {
  return (
    <div className='container'>
      <div className='topbarLeft'>
        <i className='fas fa-map-marker-alt topbarIcon' />
        <h4>9ijakids Lane, Lagos</h4>
      </div>
      <div className='topbarCenter'>
        <i className='fas fa-envelope'></i>
        <h4>9ijakids@test.com</h4>
      </div>
      <div className='topbarRight'>
        <ul className='social-ul'>
          <li className='social-li'>
            <i className='fab fa-facebook topbarIcon'></i>
          </li>
          <li className='social-li'>
            <i className='fab fa-twitter topbarIcon'></i>
          </li>
          <li className='social-li'>
            <i className='fab fa-instagram topbarIcon'></i>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Topbar
