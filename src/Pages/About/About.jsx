import React from 'react'
import "./index.scss";
import { countryListAllIsoData } from '../../country-acronyms';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlenIMG from '../../images/AlenImg.jpg'
import MensurImg from '../../images/MensurImg.png'


const About = () => {
  return (
    <div className='About'>
 <p className="project-desc">
 <span>Our application is grounded in accurate data concerning COVID-19, showcasing our team's efforts.</span>
  <span>
 Discover more about our creation below.
 </span>
 </p>
      <div className="credits">
          <div className="container">
        <div className="card">
          <div className="image">
            <img src={AlenIMG} alt="person"></img>
            <h3 >Umer Saćirović</h3>
          </div>
          <div className="content">
            <h3 >Web developer</h3>
            <p>Umer was in charge of the main functionalities of the application, as well as the arrangement of components in the project.</p>
            <div className="icons">
              <FacebookIcon className="icons-about" />
              <InstagramIcon className="icons-about" />
              <GitHubIcon className="icons-about" />
              <LinkedInIcon className="icons-about" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="image">
            <img src={AlenIMG} alt="person"></img>
            <h3 >Alen Kalač</h3>
          </div>
          <div className="content">
            <h3>Web developer</h3>
            <p>Alen was the most deserving when it comes to the Covid Stats, where it was necessary to do a lot of functionality and choose the right styles.</p>
            <div className="icons">
              <FacebookIcon className="icons-about" />
              <InstagramIcon className="icons-about" />
              <GitHubIcon className="icons-about" />
              <LinkedInIcon className="icons-about" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="image">
            <img src={MensurImg} alt="person"></img>
            <h3 >Mensur Mavrić</h3>
          </div>
          <div className="content">
            <h3>Web developer</h3>
            <p>Mensur was developing this About Us section, to showcase our teams efforts !</p>
            <div className="icons">
              <FacebookIcon className="icons-about" />
              <InstagramIcon className="icons-about" />
              <GitHubIcon className="icons-about" />
              <LinkedInIcon className="icons-about" />
            </div>
          </div>
        </div>
      </div>
      </div>
    
    </div>



  )
}

export default About