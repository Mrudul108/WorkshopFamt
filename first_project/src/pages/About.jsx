import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center justify-content-center">
        
        {/* Image Section */}
        <div className="col-lg-6 col-md-12 col-sm-12 mb-4 text-center">
          <img 
            src="/imgs/about.jpg" 
            alt="About Empty Minds" 
            className="img-fluid rounded shadow-sm"
          />
        </div>

        {/* Text Section */}
        <div className="col-lg-6 col-md-12 col-sm-12 px-3">
          <h1 className="mb-3 fw-bold text-primary">About Us</h1>
          <p>
            At <span className="fw-semibold">Empty Minds</span>, we see freedom in silence and possibility in stillness. 
            When thoughts stop colliding, the mind finds space to breathe, to dream, and to create without limits. 
            An empty mind is not empty at all—it is alive, open, and waiting for sparks of imagination. 
            Here, we celebrate the art of letting go of the noise, because only then do the brightest ideas echo the loudest.
          </p>
          <p>
            This is a space for seekers, builders, and dreamers who believe in turning clarity into strength. 
            <span className="fw-semibold"> Empty Minds</span> reminds you that the mind, once free, can shape worlds—through engineering, art, 
            or everyday choices. Think lighter, live bolder, and carry forward the quiet power of thoughts unchained.
          </p>

          {/* Call to Action */}
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

export default About
