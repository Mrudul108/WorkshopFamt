import React from 'react'

function Product(props) {
    return (
        <>
            <div className="card height-10vh">
                <img src={props.imgSrc} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <div className="mt-auto">
                        <a href="#" className="btn btn-primary w-100 align-self-end">Explore</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product