import React from 'react'
import Header from './Header'
import london from '../assets/london.png'
import newyork from '../assets/newyork.png'
import washington from '../assets/washington.png'
import library from '../assets/library.png'
import basketball from '../assets/basketball.png'
import cafeteria from '../assets/cafeteria.png'
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpg'
const Course = () => {
  return (
    <>
      <Header />
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
      <section className='campus'>
        <h1>Our Global Campus</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className='row'>
          <div className='campus-col'>
            <img src={london} />
            <div className='layer'>
              <h3>LONDON</h3>
            </div>
          </div>
          <div className='campus-col'>
            <img src={newyork} />
            <div className='layer'>
              <h3>NEWYORK</h3>
            </div>
          </div>
          <div className='campus-col'>
            <img src={washington} />
            <div className='layer'>
              <h3>WASHINGTON</h3>
            </div>
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
      <section className='testimonials'>
        <h1>What Our Student Says</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
          laudantium.
        </p>
        <div className='row'>
          <div className='testimonial-col'>
            <img src={user1} />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                ipsam praesentium obcaecati reiciendis aliquam eligendi cumque
                id laboriosam inventore repellat
              </p>
              <h3>Christine Berkley</h3>
              <i class='fa fa-star'></i>
              <i class='fa fa-star'></i>
              <i class='fa fa-star'></i>
              <i class='fa fa-star'></i>
              <i class='fa fa-star-o'></i>
            </div>
          </div>
          <div className='testimonial-col'>
            <img src={user2} />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                ipsam praesentium obcaecati reiciendis aliquam eligendi cumque
                id laboriosam inventore repellat
              </p>
              <h3>David Byer</h3>
              <i class='fa fa-star'></i>
              <i class='fa fa-star'></i>
              <i class='fa fa-star'></i>
              <i class='fa fa-star-half-o'></i>
              <i class='fa fa-star-o'></i>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Course
