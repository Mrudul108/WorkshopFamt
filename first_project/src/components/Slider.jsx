import { useState } from 'react'
// import './Slider.css'   // add this css file

function Slider() {
    const [loaded, setLoaded] = useState(false);
    return (
        <div>
            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {!loaded && (
                            <h2 className="text-center">Loading image... Please wait.</h2>
                        )}
                        <img
                            src="/imgs/img4.jpg"
                            alt="Slide 1"
                            className="d-block w-100 slider-img"
                            style={{ maxHeight: "400px", objectFit: "cover", display: loaded ? "block" : "none" }}
                            onLoad={() => setLoaded(true)}
                        />
                        <img />
                    </div>
                    <div className="carousel-item">
                        {!loaded && (
                            <h2 className="text-center">Loading image... Please wait.</h2>
                        )}
                        <img
                            src="/imgs/img7.jpg"
                            alt="Slide 2"
                            className="d-block w-100 slider-img"
                            style={{ maxHeight: "400px", objectFit: "cover", display: loaded ? "block" : "none" }}
                            onLoad={() => setLoaded(true)}
                        />
                        <img />
                    </div>
                    <div className="carousel-item">
                        {!loaded && (
                            <h2 className="text-center">Loading image... Please wait.</h2>
                        )}
                        <img
                            src="/imgs/img5.png"
                            alt="Slide 3"
                            className="d-block w-100 slider-img"
                            style={{ maxHeight: "400px", objectFit: "cover", display: loaded ? "block" : "none" }}
                            onLoad={() => setLoaded(true)}
                        />
                        <img />
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
