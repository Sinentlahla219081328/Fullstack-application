import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Shop your Dream Book</h2>
            <p>A place where every book is an invitation to dream, learn, and grow.</p>
            <a href="#explore-menu"><button className='buttonwl'>View Books</button></a>
        </div>
    </div>
  )
}

export default Header