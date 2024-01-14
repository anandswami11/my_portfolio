import '../Pages/Style.css'
import Alogo from "../Assets/Alogo.png"
import { NavLink } from "react-router-dom"

function Header(){
    return(
        <>

<div className="container">
     {/* <div className="max-width">  */}

<nav class="nav">
  <input type="checkbox" id="nav-check" />
  <div class="nav-header">
    <div class="nav-title">
    <NavLink className='a' to="/"> <img src={Alogo} alt='logoimg' /> </NavLink>
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <ul class="nav-list">
  <li> <NavLink id='a' className="a" to="/about">about</NavLink></li>
        <li> <NavLink id='a' className="a" to="/skill">skill</NavLink></li>
        <li><NavLink id='a' className="a" to="/project">project</NavLink></li>
        <li><NavLink id='a' className="a" to="/contact">contact</NavLink></li>
  </ul>
</nav>

        {/* </div> */}
        </div>
        </>
    )
}
export default Header