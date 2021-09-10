import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import certificate from '../assets/certificate.jpg'

const Blog = () => {
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
        <h1>Our Certificate & Online Programs For 2021</h1>
      </section>

      <section className='blog-content'>
        <div className='row'>
          <div className='blog-left'>
            <img src={certificate} />
            <h2>Our Certificate & Online Programs For 2021</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, consequatur et? Labore et ex totam quia minus enim
              vitae deserunt placeat possimus in dicta molestiae delectus itaque
              soluta eius laudantium magnam culpa, maiores eaque debitis eveniet
              ab officiis nesciunt? Quibusdam unde dolores, molestiae qui quos
              voluptatum sequi laboriosam fugiat natus praesentium at, fugit ad
              quas labore, expedita ducimus? Aut, amet.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, consequatur et? Labore et ex totam quia minus enim
              vitae deserunt placeat possimus in dicta molestiae delectus itaque
              soluta eius laudantium magnam culpa, maiores eaque debitis eveniet
              ab officiis nesciunt? Quibusdam unde dolores, molestiae qui quos
              voluptatum sequi laboriosam fugiat natus praesentium at, fugit ad
              quas labore, expedita ducimus? Aut, amet.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, consequatur et? Labore et ex totam quia minus enim
              vitae deserunt placeat possimus in dicta molestiae delectus itaque
              soluta eius laudantium magnam culpa, maiores eaque debitis eveniet
              ab officiis nesciunt? Quibusdam unde dolores, molestiae qui quos
              voluptatum sequi laboriosam fugiat natus praesentium at, fugit ad
              quas labore, expedita ducimus? Aut, amet.
            </p>
            <div className='comment-box'>
              <h3>Leave a Comment</h3>
              <form className='comment-form'>
                <input type='text' placeholder='Enter Name' />
                <input type='text' placeholder='Enter Email' />
                <textarea rows='5' placeholder='Your Comment'></textarea>
                <button type='submit' className='hero-btn red-btn'>
                  POST COMMENT
                </button>
              </form>
            </div>
          </div>
          <div className='blog-right'>
            <h3>Post Categories</h3>
            <div>
              <span>Business Analytics </span>
              <span>21</span>
            </div>
            <div>
              <span>Data Science </span>
              <span>28</span>
            </div>
            <div>
              <span>Machine Learning </span>
              <span>15</span>
            </div>
            <div>
              <span>Computer Science </span>
              <span>34</span>
            </div>
            <div>
              <span>AutoCAD </span>
              <span>42</span>
            </div>
            <div>
              <span>Journalism </span>
              <span>22</span>
            </div>
            <div>
              <span>Commerce </span>
              <span>30</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Blog
