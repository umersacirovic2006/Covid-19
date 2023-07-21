import React from 'react'
import "./index.css";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { useNavigate } from 'react-router';
import { Link } from '@mui/material';
import slika1 from "../About/Mensur.jpg"
import slika2 from '../About/Alen.jpg'
import slika3 from '../About/Umer.jpg'

const About = () => {
  return(
    <div className='About'>
      <p className='covidText'>Our application is made on the basis of accurate data regarding information about covid-19.<br/>
        You can see about our team below.</p>
        
        {/* odavde su kartice, kartica 1*/}
          <div className='divZaKartice'>
            <div className='cardText'>
                <div className='slika'>
                  <img className='imgS' src={slika1} alt="" />
                </div>
                 
                  <p className='name'>Mensur Mavric</p>

                  <div className='text'>
                    <p className='profesija'>Web developer</p>
                    <p className='Onama'>"Hello! My name is Mensur Mavric, born on September 21, 2002. Currently, I work as a waiter, but my big dream and goal are to become a programmer.<br/> I am passionately interested in technology and programming, and I want to develop my skills to become a successful programmer one day.<br/> I am looking forward to future challenges and opportunities that will enable me to achieve my goal. Besides that, I enjoy spending time with books, traveling, and learning new things. I'm glad we've met, and thank you for the conversation!"</p>
                  
                      <div className='divIkone'>
                          <Link  href='https://m.facebook.com/people/Mensur-Mavric/100010528954656/'>
                            <FaFacebook className='ikona'/>
                          </Link>
                          <Link href='https://www.instagram.com/mensur_mavric__/'>
                            <BsInstagram className='ikona'/>
                          </Link>
                          <Link href='https://github.com/mensurmavric02'>
                            <AiFillGithub className='ikona'/>
                          </Link>
                          <Link href='https://www.linkedin.com/in/mensur-mavric-a5b513269/'>
                            <AiFillLinkedin className='ikona'/>
                          </Link>
                      </div>
                  </div>
              </div>

          {/* 2 kartica */}
            <div className='cardText2'>
                
                <div className='slika'>
                  <img className='imgS' src={slika3} alt=''/>
                </div>

                  <p className='name'>Umer Sacirovic</p>

                  <div className='text'>

                      <p className='profesija'>Web developer</p>
                      <p className='Onama'>Umer was in charge of the main functionalities of the application, as well as the arrangement of components in the project.</p>
                    
                        <div className='divIkone'>
                            <Link  href='#'>
                              <FaFacebook className='ikona'/>
                            </Link>
                            <Link href='#'>
                              <BsInstagram className='ikona'/>
                            </Link>
                            <Link href='#'> 
                              <AiFillGithub className='ikona'/>
                            </Link>
                            <Link href='#'>
                              <AiFillLinkedin className='ikona'/>
                            </Link>
                        </div>
                  </div>
            </div>

            {/* 3 kartica */}
                <div className='cardText3'>
                  <div className='slika'>
                    <img className='imgS' src={slika2} alt=''/>
                  </div>

                      <p className='name'>Alen Kalac</p>

                  <div className='text'>
                      <p className='profesija'>Web developer</p>
                      <p className='Onama'>Alen was the most deserving when it comes to the Covid Stats, where it was necessary to do a lot of functionality and choose the right styles. </p>
                  
                        <div className='divIkone'>
                          <Link href='#'>
                            <FaFacebook className='ikona'/>
                          </Link>
                          <Link href='#'>
                            <BsInstagram className='ikona'/>
                          </Link>
                          <Link href='#'>
                            <AiFillGithub className='ikona'/>
                          </Link>
                          <Link href='#'>
                            <AiFillLinkedin className='ikona'/>
                          </Link>
                        </div>
                  </div>
                </div>
            </div>
   </div>

  )
}

export default About