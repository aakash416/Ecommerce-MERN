import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { getAllProduct } from '../api'
import Carousel from '../components/Carousel'

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getAllProduct().then((res) => setProducts(res.data.products)).catch(err => {
            console.log(err)
        })
    }, []);

    return (

        <div className='container'>
            <Carousel />
            <h1>Product</h1>
            <div className='mt-2 d-flex flex-wrap'>
                {
                    products.map((product, index) => {
                        return <Card key={index} product={product} />
                    })
                }
            </div>
        </div>

    )
}

export default Home