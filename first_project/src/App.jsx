import Header from './components/Header'
import Slider from './components/Slider'
import Footer from './components/Footer'
import Product from './components/Product'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PageNotFound from './components/PageNotFound'
import LazyPage from './pages/LazyPage'

function App() {

  return (
    <>
      <Router>
        <div className="container-fluid px-0 overflow-hidden"> {/* px-0 overflow-hidden */}
          <div className="row">
            <div className="col-12">
              <Header />
            </div>
          </div>


          <Routes>
            <Route path='/' element={
              <>
                <div className="row mb-1">
                  <div className="col-12">
                    <Slider />
                  </div>
                </div>

                <div className="container my-2">
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-2 d-flex justify-content-center">
                      <Product
                        imgSrc="/imgs/img.jpeg"
                        title="Quote #1"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex inventore rem numquam id fugiat voluptate deleniti eos vel esse quisquam."
                      />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-2 d-flex justify-content-center">
                      <Product
                        imgSrc="/imgs/img_2.png"
                        title="Quote #2"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex inventore rem numquam id fugiat voluptate deleniti eos vel esse quisquam."
                      />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-2 d-flex justify-content-center">
                      <Product
                        imgSrc="/imgs/img_3.jpg"
                        title="Quote #3"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex inventore rem numquam id fugiat voluptate deleniti eos vel esse quisquam."
                      />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-2 d-flex justify-content-center">
                      <Product
                        imgSrc="/imgs/img_4.png"
                        title="Quote #4"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex inventore rem numquam id fugiat voluptate deleniti eos vel esse quisquam."
                      />
                    </div>
                  </div>

                </div>
              </>
            }>
            </Route>

            <Route path='/about' element={<About />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/data' element={<LazyPage />}></Route> {/* route for loading LazyPage */}
            <Route path='*' element={<PageNotFound />}></Route>
          </Routes>

          <div className="row">
            <div className="col-12">
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
