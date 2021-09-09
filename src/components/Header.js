import { React } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const Header = () => {
  function showMenu() {
    document.getElementById('nav-links').style.right = '0px'
  }
  function hideMenu() {
    document.getElementById('nav-links').style.right = '-200px'
  }

  return (
    <section className='header'>
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
      <div className='text-box'>
        <h1>World's Biggest University</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          delectus, vero, facere dicta reiciendis illo, sint maiores
          <br /> numquam veritatis consequuntur dignissimos. Quo id, unde eos
          dicta quod quibusdam error voluptates!
        </p>
        <Link to='' className='hero-btn'>
          Visit Us To Know More
        </Link>
      </div>
    </section>
  )
}

export default Header
