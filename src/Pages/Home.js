import Footer from "../Components/Footer"
import Header from "../Components/Header"
import herobg from '../Assets/herobg.png'
function Home(){
    return(
        <div>
<Header />
<section id="hero">
   <img src={herobg} className='herobg1' alt='home banner'/>
    <div className="hero container">
      <div className='home-name'>
        <h1>Hello, <span></span></h1>
        <h1>My Name is <span></span></h1>
        <h1 class="section-title"> <span>Anand</span></h1>
        <div className="cta">Portfolio</div>
      </div>
    </div>
  </section>
<Footer />

        </div>
    )
}
export default Home