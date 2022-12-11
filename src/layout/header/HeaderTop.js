import React from 'react'
import {FiMenu, FiSearch, FiFacebook, FiLinkedin, FiYoutube, FiInstagram, FiTwitter} from 'react-icons/fi'

const HeaderTop = () => {
  return (
    <div className='header-top'>
      <div className='header-top-inside'>
        <div className='header-comp-left'>
            <FiMenu className='header-menu-icon' />
            <span>Menu</span>
            <FiSearch className='header-search-icon' />
            <span>Search</span>
        </div>
        <div className='header-comp-mid'>
            <p className='header-title'>{process.env.REACT_APP_NAME}</p>
        </div>
        <div className='header-comp-right'>
            <div className='header-comp-right-inside'>
                <FiFacebook className='header-social-icon' />
                <FiLinkedin className='header-social-icon' />
                <FiYoutube className='header-social-icon' />
                <FiInstagram className='header-social-icon' />
                <FiTwitter className='header-social-icon' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
