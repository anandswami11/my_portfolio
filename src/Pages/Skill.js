import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { NavLink } from 'react-router-dom'
function Skill(){
    return(
        <>
        <Header />
        <section class="skills" id="skills">
      <div class="max-width">
        <h2 class="title">My Skills</h2>
        <div class="skills-content">
          <div class="column left">
  
            <div class="text">INTERNSHIP</div>
            <p>
              <li class="intern">   Institute Name "sunday school"</li>
              <li class="intern">Institute link "Where You work"</li>
        
            </p>
  
            <br/>
            <div class="text">PROJECT</div>
  
            <p>
              <li class="project">Portfolio (HTML, CSS, js, Bootstraps)</li>
              <li class="project">eCommerce Website (Shopify liquid-code, HTML, CSS)</li>
              <li class="project">QuickShop - eCommerce Website (Like Amazon, Flipkart etc.)</li>
              <li class="project">Fully Responsive Design Email Subscribe form</li>
              <li class="project">Blog (HTML, CSS, Bootstraps)</li>
              <li class="project">Currently Working on a node.js project (Like WhatsApp)</li>
            </p>
  
            <br/>
            <div class="text">DEVELOPMENT SKILLS</div>
  
            <p>
              I'm familiar & work on a daily basis with HTML, CSS, JavaScript, Bootstrap, React js and other modern frameworks.
            </p>
            <NavLink to="https://aistechx.com/" target="blank">Get Educate...</NavLink>
          </div>
          <div class="column right">
            
            <div class="bars">
              <div class="info">
                <span>HTML</span>
                <span>80%</span>
              </div>
              <div class="line html"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>CSS</span>
                <span>75%</span>
              </div>
              <div class="line css"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>JavaScript</span>
                <span>60%</span>
              </div>
              <div class="line js"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>Bootstraps</span>
                <span>60%</span>
              </div>
              <div class="line bootstraps"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>jQuery</span>
                <span>60%</span>
              </div>
              <div class="line python"></div>
            </div>
            <div class="bars">
              <div class="info">
                <span>React.js</span>
                <span>70%</span>
              </div>
              <div class="line django"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
        </>
    )
}
export default Skill