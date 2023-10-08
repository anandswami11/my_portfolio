
import { NavLink } from 'react-router-dom'
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import projectimg1   from "../Assets/projectimg1.jpeg";
import projectimg2   from "../Assets/projectimg2.jpeg";
import projectimg3   from "../Assets/projectimg3.jpeg";
import projectimg4   from "../Assets/projectimg4.jpeg";
import projectimg6   from "../Assets/projectimg6.jpeg";
import projectimg0   from "../Assets/projectimg0.jpeg";
function Project(){
    return(
        <>
        <Header />
        <section class="projects" id="projects">
      <div class="max-width">
        <h2 class="title">My Projects</h2>
        {/* <div className="what"><span className="what-left"></span>What I did ?<span className="what-left"></span></div> */}
        <div class="carousel owl-carousel">
          <div class="card">
            <div class="box">
            <img src={projectimg1} alt="project" />
              {/* <div class="text">Ecommerce</div> */}
              <NavLink to='https://github.com/anandswami11/timer_countdown'>
          <div className='img-link text'>timer countdown</div></NavLink>
  
              <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={projectimg2} alt="project" />
              {/* <div class="text">Portfolio</div> */}
              <a href='https://github.com/anandswami11/digital_clock_javascript.git'>
          <div className='img-link text'>digital clock</div></a>
        
              <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={projectimg0} alt="project" />
              {/* <div class="text">Blog</div> */}
              <a href='https://github.com/anandswami11/sunday-school-validation-form.git'>
          <div className='img-link text'>form</div></a>
        
              <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={projectimg3} alt="project" />
              {/* <div class="text">Messaging App</div> */}
              <a href='https://github.com/anandswami11/project22.git'>
          <div className='img-link text'>project use-setstate</div></a>
       
              <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={projectimg4} alt="project" />
              {/* <div class="text">Clone</div> */}
              <NavLink to='https://github.com/anandswami11/project13.git'>
          <div className='img-link text'>list rendaring</div></NavLink>
        
              <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="card">
            <div class="box">
              <img src={projectimg6} alt="project" />
              {/* <div class="text">Demo</div> */}
              <a href='https://github.com/anandswami11/digital_clock_javascript.git'>
          <div className='img-link text'>responsiv project</div></a>
        
              <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
        <Footer />
        </>
    )
}
export default Project