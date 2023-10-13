import '../Pages/Style.css'
import { NavLink } from "react-router-dom"
import React, { useState } from 'react';

// import './Navbar.css'; // Import your CSS file for styling

function Header(){
  const [isMobile, setIsMobile] = useState(false);
  const handleToggle = () => {
    setIsMobile(!isMobile);
  };
    return(
        <>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        
       <div className="container">
            {/* <div className="max-width"> */}
    <nav className="navbar">
      <div className="logo nav-logo"><NavLink className='a' to="/"> Anand Swami</NavLink></div>
      <ul className={isMobile ? "nav-links mobile" : "nav-links"}>
      
        <li> <NavLink className="a" to="/about">about</NavLink></li>
        <li> <NavLink className="a" to="/skill">skill</NavLink></li>
        <li><NavLink className="a" to="/project">project</NavLink></li>
        <li><NavLink className="a" to="/contact">contact</NavLink></li>
      </ul>
      <div className="menu-icon" onClick={handleToggle}>
        <i className={isMobile ? "fa fa-bars" : "fa fa-bars"}></i>
      </div>
    </nav>
</div>
        
        </>
    )
}
export default Header