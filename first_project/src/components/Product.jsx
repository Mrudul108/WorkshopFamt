import React from 'react'

function Product(props) {
    return (
        <>
            <div className="card h-100 shadow-sm border-0 rounded-top-3 product-card">
                <img 
                    src={props.imgSrc} 
                    className="card-img-top img-fluid" 
                    alt={props.title} 
                    style={{ height: "200px", objectFit: "cover" }} 
                />
                <div className="card-body d-flex flex-column text-center rounded-bottom-2">
                    <h5 className="card-title fw-bold">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <div className="mt-auto">
                        <a href="#" className="btn btn-primary w-100 disabled">Explore</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
