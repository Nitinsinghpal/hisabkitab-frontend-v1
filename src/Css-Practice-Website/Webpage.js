import React from 'react'
import './Webpage.css'
import studySync from './Images/StudySyn.svg'
function Webpage() {
  return (
    <div className='header'>
      <header className='header-content'>
        <a href='#logo' className='logo'>
          <img src={studySync} alt='logoImage' className='logo-icon'/>
          <span className='logo-text'>StudySync</span>
        </a>

        <nav className='nav'>
          <a href='#home' className='nav-link'>Home </a>
          <a href='#features' className='nav-link'>Features </a>
          <a href='#pricing' className='nav-link'>Pricing </a>
          <a href='#blog' className='nav-link'>Blog </a>
          <a href='#about' className='nav-link'>About </a>
        </nav>

          <a href='#contact' className='contact-button'>
            Contact us
          </a>
      </header>  
    </div>
  )
}

export default Webpage