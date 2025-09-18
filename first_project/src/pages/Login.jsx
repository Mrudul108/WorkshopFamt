import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate("/submitlogin")
  }
  return (
    <div className="my-5" style={{ minHeight: "40vh" }}>
      <div className="container">
        <div className="row align-items-center justify-content-center gap-5 gap-lg-0">
          <div className="col-lg-6 col-sm-12">
            <img src="/imgs/login.jpg" alt="" className="img-fluid img-thumbnail"/>
          </div>

          <div className="col-lg-6 col-sm-12">
            <h1 className='text-center mb-4'>Login Form</h1>
            <form action="" className='w-75 mx-auto'>
              <div className="form-floating mb-4">
                <input className='form-control' type="email" name="email" id="email" placeholder='' autoComplete='off' />
                <label className='form-label' htmlFor="email">Enter email</label>
              </div>
              <div className="form-floating mb-4">
                <input className='form-control' type="password" name="pass" id="pass" placeholder='' autoComplete='off' />
                <label className='form-label' htmlFor="pass">Enter password</label>
              </div>
              <div className="mx-auto">
                <button onClick={handleLogin} className="btn col-12 btn-primary" role="button" to="/">Login</button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div >
  )
}

export default Login