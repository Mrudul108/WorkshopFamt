import { useState } from "react";

const Contact = () => {
  const [loaded, setLoaded] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })

    if ([errors[name]]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  const validate = () => {
    let newErrors = {}
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.mobile) {
      newErrors.mobile = "Mobile is required";
    } else if (!/^[0-9]{10}$/.test(form.mobile)) {
      newErrors.mobile = "Enter a valid 10 digit mobile number";
    }
    if (!form.message) newErrors.message = "Message is required";
    return newErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const ValidationErrors = validate()
    if (Object.keys(ValidationErrors).length > 0) {
      setErrors(ValidationErrors);
    } else {
      setErrors({})
      alert("Form Submitted")
    }
  }

  const handleClear = () => {
    setForm({ name: "", email: "", mobile: "", message: "" })
    setErrors({});
  }

  return (
    <div className="my-5" style={{ minHeight: "70vh" }}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Left Side Image */}
          <div className="col-lg-6 d-none d-lg-block text-center ">
            {!loaded && (
              <h2 className="text-center">Loading image... Please wait.</h2>
            )}
            <img
              src="/imgs/contact.jpg"
              alt="contact"
              className="img-fluid rounded-4 "
              style={{ display: loaded ? "block" : "none" }}
              onLoad={() => setLoaded(true)}
            />
          </div>

          {/* Contact Form */}
          <div className="col-lg-6 col-md-12">
            <div className="card rounded-4 border-0 p-4 input-form">
              <h2 className="text-center mb-4 fw-bold text-muted">
                Get in Touch
              </h2>

              <form className="w-100" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    name="name"
                    id="name"
                    placeholder=""
                    autoComplete="off"
                    value={form.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="name">Enter Your Name</label>
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                {/* Email */}
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    name="email"
                    id="email"
                    placeholder=""
                    autoComplete="off"
                    value={form.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="email">Enter Your Email</label>
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                {/* Mobile */}
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
                    name="mobile"
                    id="mobile"
                    placeholder=""
                    autoComplete="off"
                    value={form.mobile}
                    onChange={handleChange}
                  />
                  <label htmlFor="mobile">Enter Mobile Number</label>
                  {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                </div>

                {/* Message */}
                <div className="form-floating mb-4">
                  <textarea
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    name="message"
                    id="message"
                    style={{ height: "120px" }}
                    placeholder=""
                    autoComplete="off"
                    value={form.message}
                    onChange={handleChange}
                  />
                  <label htmlFor="message">Your Message</label>
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>

                {/* Buttons */}
                <div className="d-flex gap-3 justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-muted btn-lg fw-semibold shadow-sm w-50"
                    style={{ transition: "0.3s" }}
                  >
                    Send Message
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg fw-semibold w-50"
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
