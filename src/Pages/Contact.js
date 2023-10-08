import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Contact(){
    return(
     <>
       <Header />
       <section class="contact" id="contact">
      <div class="max-width">
        <h2 class="title">Contact Me</h2>
           <div class="contact-content">
            <div class="column left col-left">
             <div class="text">Get in Touch</div>
              <p className="text-p">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be a part of your visions. Email me with any questions or inquiries. I'll happy to answer your questions and set up a meeting with you.</p>
              <div class="icons">
  
  <a href="https://instagram.com/aistscience">
    <div class="row">
      <i class="fa-solid fa-user-large"></i>
      <div class="info">
        <div class="head">Name</div>
        <div class="sub-title"><a className="mail" href="https://aistechx.com/"> Anand Swami</a></div>
      </div>
    </div>
  </a>

  <div class="row">
    <i class="fa-solid fa-location-dot"></i>
    <div class="info">
      <div class="head">&nbsp;Address</div>
      <div class="sub-title">&nbsp;ABC, 123 Lane, India</div>
    </div>
  </div>

  <div class="row">
    <i class="fa-solid fa-envelope"></i>
    <div class="info">
      <div class="head">Email</div>
      <div class="sub-title"><a className="mail" href="mailto:#"> anand00kumar20@gmail.com</a></div>
    </div>
  </div>

  <div class="row">
    <i class="bi bi-translate"></i>
    <div class="info">
      <div class="head">Language Known</div>
      <div class="sub-title">Hindi, English, Odia, Bengali</div>
    </div>
  </div>
</div>
<div class="social-menu">
                <ul>
                  <li><a href="https://github.com/akashm47"><i class="fa-brands fa-github"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/akashmahapatra/"><i class="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a href="https://www.instagram.com/___kaaashx___/"><i class="fa-brands fa-instagram"></i></a></li>
                  <li><a href="https://twitter.com/___kaaashx___/"><i class="fa-brands fa-twitter"></i></a></li>
                  <li><a href="https://aistechx.com/" title="Get Educate with Us"><i class="fa-solid fa-graduation-cap"></i></a></li>
                </ul>
              </div>
            </div>

            <div className="coulm-right">
            <div class="text">Message me</div>
            <div className="form">
            <form action="#">
              <div class="fields">
                <div class="name name-1">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div class="email name-1">
                  <input type="email" placeholder="Your Email" required />
                </div>
              </div>
              <div class="field">
                <input type="text" placeholder="Subject" required />
              </div>
              <div class="field textarea">
                <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
              </div>
              <div class="button-area">
                <button type="submit">Send message</button>
              </div>
            </form>
            </div>
          </div>
            </div>
          </div>
      
         </section>
        {/* </div> */}
    
       <Footer />
     </>
    )
}
export default Contact