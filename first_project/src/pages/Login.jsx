import { useState } from "react"
import { Link } from "react-router-dom"
// import { useNavigate } from "react-router-dom"

function Login() {
  // const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "",
    pass: ""
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }
  
  const clearForm = () => {
    setForm({ name: "", email: "", mobile: "", message: "" })
    setErrors({});
  }

  const validate = () => {
    let newErrors = {}
    if (!form.email) {
      newErrors.email = "Email is required"
    }
    if (!form.pass) {
      newErrors.pass = "Password is required"
    }
    return newErrors
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      clearForm()
      alert("Form Submitted")
      // navigate("/")  // if you want to redirect after login
    }
  }

  return (
    <div className="my-5" style={{ minHeight: "50vh" }}>
      <div className="container">
        <div className="row align-items-center justify-content-center gap-5 gap-lg-0">
          {/* Left Image (hidden on small screens) */}
          <div className="col-lg-6 text-center d-none d-lg-block">
            <img
              src="/imgs/login.jpg"
              alt="login"
              className="img-fluid rounded-4 shadow"
            />
          </div>

          {/* Login Form */}
          <div className="col-lg-6 col-sm-12">
            <div className="card rounded-4 border-0 p-4">
              <h2 className="text-center mb-4 fw-bold text-primary">
                Welcome Back
              </h2>

              <form className="w-100" onSubmit={handleLogin}>
                {/* Email */}
                <div className="form-floating mb-4">
                  <input
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    type="email"
                    name="email"
                    id="email"
                    placeholder=""
                    autoComplete="off"
                    value={form.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="email">Enter Email</label>
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                {/* Password */}
                <div className="form-floating mb-4">
                  <input
                    className={`form-control ${errors.pass ? "is-invalid" : ""}`}
                    type="password"
                    name="pass"
                    id="pass"
                    placeholder=""
                    autoComplete="off"
                    value={form.pass}
                    onChange={handleChange}
                  />
                  <label htmlFor="pass">Enter Password</label>
                  {errors.pass && (
                    <div className="invalid-feedback">{errors.pass}</div>
                  )}
                </div>

                {/* Button */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg fw-semibold shadow-sm"
                  >
                    Login
                  </button>
                </div>

                {/* Extra Links */}
                <p className="text-center mt-3 mb-0 small text-muted">
                  Don’t have an account?{" "}
                  <Link
                    to="/register"
                    className="text-decoration-none fw-semibold text-primary"
                  >
                    Register here
                  </Link>
                </p>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
