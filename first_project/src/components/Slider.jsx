import React from 'react'
// import './Slider.css'   // add this css file

function Slider() {
    return (
        <div>
            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/imgs/img4.jpg" className="d-block w-100 slider-img" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="/imgs/img7.jpg" className="d-block w-100 slider-img" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="/imgs/img5.png" className="d-block w-100 slider-img" alt="Slide 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slider
