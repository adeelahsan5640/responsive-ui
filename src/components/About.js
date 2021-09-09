import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import about from '../assets/about.jpg'

const About = () => {
  function showMenu() {
    document.getElementById('nav-links').style.right = '0px'
  }
  function hideMenu() {
    document.getElementById('nav-links').style.right = '-200px'
  }

  return (
    <>
      <section className='sub-header'>
        <nav>
          <Link to='/'>
            <img src={Logo} />
          </Link>
          <div className='nav-links' id='nav-links'>
            <i className='fa fa-times' onClick={hideMenu}></i>

            <ul>
              <li>
                <Link to='/' className='link'>
                  HOME
                </Link>
              </li>
              <li>
                <Link to='/about' className='link'>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to='/course' className='link'>
                  COURSE
                </Link>
              </li>
              <li>
                <Link to='/blog' className='link'>
                  BLOG
                </Link>
              </li>
              <li>
                <Link to='/contact' className='link'>
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          <i className='fa fa-bars' onClick={showMenu}></i>
        </nav>
        <h1>About Us</h1>
      </section>
      <section className='about-us'>
        <div className='row'>
          <div className='about-col'>
            <h1>We are the World's Largest University</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              repellat voluptates unde nobis quo itaque veritatis ipsa dicta?
              Expedita, assumenda! Autem, modi! Vero unde numquam repellendus.
              Dolorum culpa eveniet nulla ducimus fugiat blanditiis deleniti!
              Accusantium nulla quis illo quam, voluptas neque atque harum porro
              enim, ad perspiciatis inventore! Aperiam, sequi.
            </p>
            <Link to='' className='hero-btn red-btn'>
              EXPLORE NOW
            </Link>
          </div>

          <div className='about-col'>
            <img src={about} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About
