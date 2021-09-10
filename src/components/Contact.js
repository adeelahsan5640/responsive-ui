import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const Contact = () => {
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
        <h1>Contact Us</h1>
      </section>
      <section className='location'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.793293516936!2d67.12217611432166!3d24.93911074824426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338980b4615af%3A0xe968e4f0fd0119cd!2sUniversity%20of%20Karachi!5e0!3m2!1sen!2s!4v1631285200574!5m2!1sen!2s'
          width='600'
          height='450'
          style={{ border: '0' }}
          allowfullscreen=''
          loading='lazy'
        ></iframe>
      </section>
      <section className='contact-us'>
        <div className='row'>
          <div className='contact-col'>
            <div>
              <i className='fa fa-home'></i>
              <span>
                <h5>XYZ Road, ABC Building</h5>
                <p>Karachi, Sindh, Pakistan.</p>
              </span>
            </div>
            <div>
              <i className='fa fa-phone'></i>
              <span>
                <h5>0900-78601</h5>
                <p>Monday to Friday, 10AM to 4PM</p>
              </span>
            </div>
            <div>
              <i className='fa fa-envelope-o'></i>
              <span>
                <h5>abc@gmail.com</h5>
                <p>Email us your query</p>
              </span>
            </div>
          </div>
          <div className='contact-col'></div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact
