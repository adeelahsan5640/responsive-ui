import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import cafeteria from '../assets/cafeteria.png'
import basketball from '../assets/basketball.png'
import library from '../assets/library.png'

const Course = () => {
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
        <h1>Our Courses</h1>
      </section>
      <section className='course'>
        <h1>Courses We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className='row'>
          <div className='course-col'>
            <h3>Intermediate</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ut
              numquam nam deleniti iure totam error inventore dicta maiores
              exercitationem, laborum praesentium, quae ab explicabo ratione vel
              tempora. Suscipit, error.
            </p>
          </div>
          <div className='course-col'>
            <h3>Degree</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ut
              numquam nam deleniti iure totam error inventore dicta maiores
              exercitationem, laborum praesentium, quae ab explicabo ratione vel
              tempora. Suscipit, error.
            </p>
          </div>
          <div className='course-col'>
            <h3>Post Graduation</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ut
              numquam nam deleniti iure totam error inventore dicta maiores
              exercitationem, laborum praesentium, quae ab explicabo ratione vel
              tempora. Suscipit, error.
            </p>
          </div>
        </div>
      </section>
      <section className='facilities'>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className='row'>
          <div className='facilities-col'>
            <img src={library} />
            <h3>World Class Library</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              sunt inventore, atque dolorum ipsum veniam.
            </p>
          </div>
          <div className='facilities-col'>
            <img src={basketball} />
            <h3>Largest Play Ground</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              sunt inventore, atque dolorum ipsum veniam.
            </p>
          </div>
          <div className='facilities-col'>
            <img src={cafeteria} />
            <h3>Tasty and Healthy Food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              sunt inventore, atque dolorum ipsum veniam.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Course
