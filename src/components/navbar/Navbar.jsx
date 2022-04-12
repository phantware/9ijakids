import React from 'react'
import AuthButton from '../AuthButton'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='navbarLeft'>
        <img
          src='/assets/images/open-book.svg'
          alt='open-book'
          className='open-book'
        />
        <h4 className='naijakid'>9IJAKIDS</h4>
      </div>
      <div className='navbarRight'>
        <ul className='nav-ul'>
          <li className='nav-li'>Home</li>
          <li className='nav-li'>About</li>
          <li className='nav-li'>Games</li>
          <li className='nav-li'>Competition</li>
          <li className='nav-li-register'>
            <AuthButton name='Register' styles='register-1' />
          </li>
          <li className='iconBorder'>
            <i className='fas fa-search navbarIcon' />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
