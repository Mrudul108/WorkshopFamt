import { useState } from "react"
import { Link } from "react-router-dom"
function Register() {
  const [loaded, setLoaded] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    pass: "",
    cpass: ""
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })

    if ([errors[name]]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  const clearForm = () => {
    setForm({ name: "", email: "", mobile: "", message: "" })
    setErrors({});
  }

  const validate = () => {
    let newErrors = {}
    if (!form.username) newErrors.username = "Username is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.phone) {
      newErrors.phone = "Mobile is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10 digit mobile number";
    }
    if (!form.pass) newErrors.pass = "Password is required";
    if (!form.cpass) { newErrors.cpass = "Confirm Password is required" }
    if (form.pass && form.cpass && !(form.pass === form.cpass)) {
      newErrors.matchPass = "Passwords do not match"
    }
    return newErrors;
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const ValidationErrors = validate()
    if (Object.keys(ValidationErrors).length > 0) {
      setErrors(ValidationErrors);
    } else {
      clearForm()
      alert("Form Submitted")
    }
  }

  return (
    <div className="my-5" style={{ minHeight: "60vh" }}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 d-none d-lg-block text-center mb-4 mb-lg-0">
            {!loaded && (
              <h2 className="text-center">Loading image... Please wait.</h2>
            )}
            <img
              src="/imgs/register.jpg"
              alt="register"
              className="img-fluid rounded-4 shadow"
              style={{ display: loaded ? "block" : "none" }}
              onLoad={() => setLoaded(true)}
            />
          </div>

          <div className="col-lg-6 col-sm-12">
            <div className="card shadow-lg rounded-4 border-0 p-4">
              <h2 className="text-center mb-4 fw-bold text-success">
                Create Your Account
              </h2>

              <form className="w-100" onSubmit={handleRegister}>
                {/* Username */}
                <div className="form-floating mb-3">
                  <input
                    className={`form-control ${errors.username ? "is-invalid" : ""}`}
                    type="text"
                    name="username"
                    id="username"
                    placeholder=""
                    autoComplete="off"
                    value={form.username}
                    onChange={handleChange}
                  />
                  <label htmlFor="username">Enter Username</label>
                  {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                </div>

                {/* Email */}
                <div className="form-floating mb-3">
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
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                {/* Phone */}
                <div className="form-floating mb-3">
                  <input
                    className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder=""
                    autoComplete="off"
                    value={form.phone}
                    onChange={handleChange}
                  />
                  <label htmlFor="phone">Enter Phone Number</label>
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>

                {/* Password */}
                <div className="form-floating mb-3">
                  <input
                    className={`form-control ${errors.pass ? "is-invalid" : "" || errors.matchPass ? "is-invalid" : ""}`}
                    type="password"
                    name="pass"
                    id="pass"
                    placeholder=""
                    autoComplete="off"
                    value={form.pass}
                    onChange={handleChange}
                  />
                  <label htmlFor="pass">Enter Password</label>
                  {errors.pass && <div className="invalid-feedback">{errors.pass}</div>}
                  {errors.matchPass && <div className="invalid-feedback">{errors.matchPass}</div>}
                </div>

                {/* Confirm Password */}
                <div className="form-floating mb-4">
                  <input
                    className={`form-control ${errors.cpass ? "is-invalid" : "" || errors.matchPass ? "is-invalid" : ""}`}
                    type="password"
                    name="cpass"
                    id="cpass"
                    placeholder=""
                    autoComplete="off"
                    value={form.cpass}
                    onChange={handleChange}
                  />
                  <label htmlFor="cpass">Confirm Password</label>
                  {errors.cpass && <div className="invalid-feedback">{errors.cpass}</div>}
                  {errors.matchPass && <div className="invalid-feedback">{errors.matchPass}</div>}
                </div>

                {/* Button */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg fw-semibold shadow-sm"
                    style={{ transition: "0.3s" }}
                  >
                    Register
                  </button>
                </div>
                <p className="text-center mt-2 mb-0 small text-muted">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-decoration-none fw-semibold text-success"
                  >
                    Login here
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

export default Register
