import { Link, useNavigate } from "react-router-dom"

function Header() {
    const navigate = useNavigate()
    const handleLoginNav = (e) => {
        e.preventDefault();
        navigate("/login")
    }
    const handleRegisterNav = (e) => {
        e.preventDefault();
        navigate("/register")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Empty Minds</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex flex-lg-row flex-column gap-2" role="search">
                            <button className="btn btn-outline-primary" onClick={handleLoginNav} >Login</button>
                            <button className="btn btn-outline-success" onClick={handleRegisterNav} >Register</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header