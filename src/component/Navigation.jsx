import React from 'react'

const Navigation = () => {
  return (
    <div>
        <nav>
        <div className="Logo">
          <img src="/Images/brand_logo.png" alt="Logo" />
        </div>
        <ul>
          <li><a href="#home">Menu</a></li>
          <li><a href="#about">Location</a></li>
          <li><a href="#services">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  )
}

export default Navigation