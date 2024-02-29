import React from 'react'

const Carousel = () => {
    return (
        <div
            id="carouselExampleAutoplaying"
            className="carousel slide mt-5"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://assets-global.website-files.com/5e0f6315ca8431ed8cb1cf73/5e1cf59a0bbd5b796d60f820_driftrock-facebook-carousel-ads.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://www.shutterstock.com/image-photo/happy-byer-shopping-bags-standing-600nw-1927526819.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://assets-static.invideo.io/images/large/Creative_Fashion_Digital_Marketing_Ideas_To_Boost_Sales_2_0d0bbb116f.webp" className="d-block w-100" alt="..." />
                </div>



            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel