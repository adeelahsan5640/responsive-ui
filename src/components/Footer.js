import React from 'react'

const Footer = () => {
  return (
    <section className='footer'>
      <h4>About Us</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere unde
        adipisci cumque error quod
        <br /> ea corrupti molestias ratione repellat odio quas dicta, qui
        mollitia ex a sequi nemo dolores ad.
      </p>
      <div className='icons'>
        <i className='fa fa-facebook' style={{ color: 'blue' }}></i>
        <i className='fa fa-twitter' style={{ color: 'skyblue' }}></i>
        <i className='fa fa-instagram' style={{ color: 'purple' }}></i>
        <i className='fa fa-linkedin' style={{ color: 'blue' }}></i>
      </div>
      <p>
        Made with <i className='fa fa-heart-o' style={{ color: 'red' }}></i> By
        Adeel Ahsan
      </p>
    </section>
  )
}

export default Footer
