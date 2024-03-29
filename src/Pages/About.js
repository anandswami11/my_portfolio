
import aboutimg2 from '../Assets/aboutimg2.jpeg'
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function About(){
    return(
        <>
        <Header />
        <section class="about" id="about">
      <div class="max-width">
        <h2 class="title">About Me</h2>
        <div class="about-content">
          <div class="column left">
            <img src={aboutimg2} className='about-opc' alt="Profile 626x626"/>
          </div>
          <div class="column right">
            <div class="text">I'm Anand and I'm a <span class="typing-2"> front end developer</span></div>
            <p>Seeking an entry-level opportunity with an esteemed organization where I can utilize my skills & enhance learning in the field of work. Capable of mastering new technologies.</p>
            <br/>
            <div class="text">Why Work With Me</div>
            <p>I'm a great communicator & love to invest the necessary time to understand the customer's problem very well.</p>
  
            <a href="https://app.luminpdf.com/viewer/65a0ee3d45f9b36e3935aef2" target="blank">Download CV</a>
          </div>
        </div>
        </div>
        <Footer />
    </section>
        
        </>
    )
}
 export default About