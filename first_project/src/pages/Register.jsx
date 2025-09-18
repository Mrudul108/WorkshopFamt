import { useNavigate } from "react-router-dom"

function Register() {
  const navigate = useNavigate()
  const handleRegister = () => {
    navigate("/submitRegister")
  }
  return (
    <>
      <div className="my-5" style={{ minHeight: "40vh" }}>
        <div className="container">
          <div className="row align-items-center justify-content-center gap-5 gap-lg-0">
            <div className="col-lg-6 col-sm-12">
              <img src="/imgs/register.jpg" alt="" className="img-fluid img-thumbnail" />
            </div>

            <div className="col-lg-6 col-sm-12">
              <h1 className='text-center mb-4'>Registration Form</h1>
              <form action="" className='w-75 mx-auto'>
                <div className="mb-2 form-floating mb-4">
                  <input className='form-control' type="text" name="username" id="username" placeholder='' autoComplete='off' />
                  <label className='form-label' htmlFor="username">Enter Username</label>
                </div>
                <div className="mb-2 form-floating mb-4">
                  <input className='form-control' type="email" name="email" id="email" placeholder='' autoComplete='off' />
                  <label className='form-label' htmlFor="email">Enter email</label>
                </div>
                <div className="mb-2 form-floating mb-4">
                  <input className='form-control' type="number" name="phone" id="phone" placeholder='' autoComplete='off' />
                  <label className='form-label' htmlFor="phone">Enter Phone Number</label>
                </div>
                <div className="mb-2 form-floating mb-4">
                  <input className='form-control' type="password" name="pass" id="pass" placeholder='' autoComplete='off' />
                  <label className='form-label' htmlFor="pass">Enter password</label>
                </div>
                <div className="mb-2 form-floating mb-4">
                  <input className='form-control' type="password" name="cpass" id="cpass" placeholder='' autoComplete='off' />
                  <label className='form-label' htmlFor="cpass">Confirm password</label>
                </div>
                <div className="mx-auto">
                  <button onClick={handleRegister} className="btn col-12 btn-primary" role="button" to="/">Register</button>
                </div>
              </form>
            </div>
          </div >
        </div>
      </div>
    </>
  )
}

export default Register