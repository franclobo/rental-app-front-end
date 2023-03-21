import React from 'react'
import logo from '../images/logo.png'
import '../styles/index.scss'

function Logo() {
  return (
    <div>
      <img src={logo} alt="logo" className='logo'/>
    </div>
  )
}

export default Logo
