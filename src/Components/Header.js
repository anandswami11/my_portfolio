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
     
         {/* <nav class="navbar"> */}
      {/* // <div class="max-width">
      //   <div class="logo"><a href="#"><span>AISTECHX</span><span>.com</span></a></div>
      //   <ul class="menu">
      //     <li><NavLink to="/" class="menu-btn"><strong>Home</strong></NavLink></li>
      //     <li>   <NavLink to="/about" class="menu-btn"><strong>About</strong></NavLink></li>
      //     <li><NavLink to="/skill" class="menu-btn"><strong>Services</strong></NavLink></li>
      //      <li><NavLink to="/skill" class="menu-btn"><strong>Skills</strong></NavLink></li> 
      //     <li><NavLink to="/project" class="menu-btn"><strong>Projects</strong></NavLink></li>
      //     <li><NavLink to="/contact" class="menu-btn"><strong>Contact</strong></NavLink></li>
      //   </ul>
      //   <div class="menu-btn">
      //     <i class="fas fa-bars"></i>
      //   </div>
      // </div> */}
    {/* </nav>  */}
       <div className="container">
            {/* <div className="max-width"> */}
    <nav className="navbar">
      <div className="logo"><a className='a' href="/"> Anand swami</a></div>
      <ul className={isMobile ? "nav-links mobile" : "nav-links"}>
      
        <li> <NavLink className="a" to="/about">about</NavLink></li>
        <li> <NavLink className="a" to="/skill">skill</NavLink></li>
        <li><NavLink className="a" to="/project">project</NavLink></li>
        <li><NavLink className="a" to="/contact">contact</NavLink></li>
      </ul>
      <div className="menu-icon" onClick={handleToggle}>
        <i className={isMobile ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>

                {/* <div className='navbar'>
       <div className='logo'> <NavLink className="a" to="/"> Anand swami</NavLink></div>
        <div className='nav-link'>   <NavLink className="a" to="/about">about</NavLink>
             <NavLink className="a" to="/skill">skill</NavLink>
             <NavLink className="a" to="/project">project</NavLink>
             <NavLink className="a" to="/contact">contact</NavLink></div>
             </div> */}
         </div>
         {/* </div> */}
        </>
    )
}
export default Header