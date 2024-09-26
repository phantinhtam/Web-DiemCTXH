 import React from 'react'
 import { Link } from 'react-router-dom'
 
 const Header = () => {
   return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo">
        <img src="" alt=""/>
        </Link>

        <ul className="nav__menu">
          <li><Link to="/profile" >Thai </Link></li>
          <li><Link to="/create" >Tam </Link></li>
          <li><Link to="/authors" >Tu </Link></li>
          <li><Link to="/logout" >Tan</Link></li>
        </ul>
        
      </div>
    </nav>
   )
 }
 
 export default Header
 