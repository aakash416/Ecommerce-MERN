import React, { useEffect, useState } from 'react'
import ProductList from '../../components/ProductList'
import { ContextStore } from '../../Context/ContextStore';
import { getAllProductSeller } from '../../api';

const SeeAllProduct = () => {

    const [products, setProudct] = useState([]);
    const { userData } = ContextStore();
    useEffect(() => {
        getAllProductSeller(userData?._id).then(res => {
            setProudct(res.data.products)
        }).catch(err => {
            console.log(err)
        })
    }, [userData?._id]);

    return (
        <div className='container mt-4'>
            <table className="table">
                <thead>
                    <tr >
                        <th scope="col">S.N.</th>
                        <th scope="col">Product</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">CountInStock</th>
                        <th scope="col">Price</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {products?.map((product, index) => {
                        return <ProductList key={index} product={product} index={index} setProudct={setProudct} />

                    })}
                </tbody>
            </table>

        </div>
    )
}

export default SeeAllProduct