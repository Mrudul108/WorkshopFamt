import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#3e4551' }}>
        <div className="container p-4 pb-0">
          <section>
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-4 mb-md-3">
                <h5 className="text-uppercase">FOOTER CONTENT</h5>
                <div className="d-flex flex-column align-items-center">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae modi cum ipsam ad, illo possimus laborum ut
                    reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur eaque?
                    Reiciendis assumenda iusto sapiente inventore animi?
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <Link to="/about" className="text-white">About us</Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-white">Services</Link>
                    </li>
                    <li>
                      <Link to="/contact" className="text-white">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/data" className="text-white">Experience Lazy Loading</Link>
                    </li>
                  </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">Link 1</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Link 2</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Link 3</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Link 4</a>
                    </li>
                  </ul>
              </div >

              {/* <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">Link 1</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Link 2</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Link 3</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">Link 4</a>
                    </li>
                  </ul>
                </div> */}

            </div >
          </section >
          <hr className="mb-4" />
          <section className="mb-4 text-center">
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter" /></a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-google" /></a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram" /></a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-github" /></a>
          </section>
        </div >
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © {currentYear} Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer >

    </div >
  )
}

export default Footer