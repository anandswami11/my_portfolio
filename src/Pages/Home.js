import Footer from "../Components/Footer"
import Header from "../Components/Header"
import herobg from '../Assets/herobg.png'
import { NavLink } from "react-router-dom"
function Home(){
    return(
        <div>

<div id="hero">
<Header />
   <img src={herobg} className='herobg1' alt='home banner'/>
    <div className="hero container">
      <div className='home-name'>
        <h1>Hello, <span></span></h1>
        <h1>My Name is <span></span></h1>
        <h1 class="section-title"> <span>Anand</span></h1>
    <NavLink to="">   <div className="cta">Portfolio</div></NavLink> 
      </div>
    </div>  
<Footer />
</div>
</div>
        
    )
}
export default Home