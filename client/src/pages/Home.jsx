import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { getAllProduct } from '../service/AuthService'

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getAllProduct().then(res => {
            setProducts(res.data.products)
        }).catch(err => {
            console.log(err)
        })
    }, []);


    return (
        <div className='container mt-2 d-flex flex-wrap'>
            {
                products.map(product => {
                    return <Card key={product._id} product={product} />
                })
            }
        </div>
    )
}

export default Home