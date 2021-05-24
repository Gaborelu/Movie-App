//Secara Manuela
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className='navbar menu'>
        <Link to='/'>
          <i className='fas fa-fire'></i> Trending
        </Link>
        <Link to='/movies'>
          <i className='fas fa-video'></i> Filme
        </Link>
        <Link to='/series'>
          <i className='fas fa-film'></i> Seriale
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
