import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className='container my-5'>
      <div className="row align-items-center justify-content-center g-4">
        
        {/* Image Section */}
        <div className="col-lg-6 col-md-12 text-center">
          <img 
            src="/imgs/services.jpg" 
            alt="Our Services" 
            className='img-fluid rounded shadow-sm' 
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-lg-6 col-md-12">
          <h1 className="mb-3 text-primary fw-bold">Our Services</h1>
          <p>
            Our services help you organize your ideas and make exploring them effortless. From fine-tuning your preferences to finding exactly what you need, every feature is designed to simplify your journey.
          </p>
          <p>
            With intuitive tools, seamless communication, and thoughtful guidance, we ensure your experience is smooth and engaging. Little touches, like instant feedback and easy access to support, keep you empowered as you navigate your creative path.
          </p>

          {/* Join Journey Button */}
          <div className="mt-3 d-flex justify-content-lg-end justify-content-center">
            <Link to="/contact" className="btn btn-primary btn-md shadow-sm px-3 me-5">
              Join the Journey
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services
