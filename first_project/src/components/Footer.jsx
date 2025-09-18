import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#3e4551' }}>
      <div className="container p-4 pb-0">
        
        {/* Main Content */}
        <section>
          <div className="row text-center text-md-start">
            
            {/* About Section */}
            <div className="col-lg-6 col-md-12 mb-4">
              <h5 className="text-uppercase fw-bold">About Us</h5>
              <p>
                The mind is both an artist and an engineer, weaving emotions into 
                patterns and logic into structures. Art teaches us to dream, 
                while engineering teaches us to build — together they remind us 
                that imagination without form is fleeting, and form without 
                imagination is empty. A strong mindset bridges this gap, giving 
                courage to dream and discipline to create.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="text-uppercase fw-bold">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/about" className="text-white text-decoration-none">About Us</Link>
                </li>
                <li>
                  <Link to="/services" className="text-white text-decoration-none">Services</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white text-decoration-none">Contact Us</Link>
                </li>
                <li>
                  <Link to="/lazypage" className="text-white text-decoration-none">Lazy Loading Page</Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="text-uppercase fw-bold">Follow Us</h5>
              <div className="d-flex justify-content-center justify-content-md-start gap-2">
                <a className="btn btn-outline-light btn-floating" href="#!" role="button">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-outline-light btn-floating" href="#!" role="button">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-outline-light btn-floating" href="#!" role="button">
                  <i className="fab fa-instagram" />
                </a>
                <a className="btn btn-outline-light btn-floating" href="#!" role="button">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a className="btn btn-outline-light btn-floating" href="#!" role="button">
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <hr className="mb-4" />

        {/* Footer Bottom */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © {currentYear} Copyright:
          <span className="fw-bold ms-1">Empty Minds</span>
        </div>
        <br />
      </div>
    </footer>
  )
}

export default Footer
