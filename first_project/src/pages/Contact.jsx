import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({
    name:"",
    email:"",
    mobile:"",
    message:""
  })
  const [errors, setErrors] = useState()
  return (
    <div className='container-fluid'>
      <div className="row align-items-center justify-content-center my-4">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <img src="/imgs/contact.jpg" alt="" className='img-fluid' />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <h1 className='mb-3'>Contact Us</h1>
          <div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Enter username here" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">Enter mobile number</label>
              <input type="number" className="form-control" id="mobile" placeholder="Enter valid mobile number" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows={3} defaultValue={""} />
            </div>
            <div className="btns d-flex gap-3 justify-content-center mt-3">
              <div className="btn btn-primary w-25">Send Message</div>
              <div className="btn btn-secondary w-25">Clear</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact