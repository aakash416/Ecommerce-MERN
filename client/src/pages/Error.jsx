import React from 'react'
import error from "../assets/error404.gif"

const Error = () => {
    return (
        <div className='container'>
            <img className="card-img-top p-5" src={error} alt="Error 404" />
        </div>
    )
}

export default Error