import React from 'react'
import { removeProductItemById } from '../service/AuthService';
import { toast } from 'react-toastify';


const CartProduct = ({ item, index, setCartData }) => {
    const { product, quantity } = item;
    const handelDelete = (id) => {
        removeProductItemById({ _id: id }).then(res => {
            setCartData(res.data?.productsInCart)
            toast.success("Product Removed Successfully")
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <tr >
            <th scope="row">{index + 1}</th>
            <td className='d-flex align-items-center m-1'>
                <img src={product.image} className="img-thumbnail rounded " style={{ width: "100px", height: "100px" }} alt={product.name} />
                <h5 className="card-title">{product.name}</h5>
            </td>
            <td>
                {product.description}
            </td>
            <td >
                <button className="btn btn-light">-</button>
                <button className="btn btn-info">{quantity}</button>
                <button className="btn btn-light">+</button>
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => handelDelete(product._id)}>Remove</button>
            </td>
            <td> Price: ${quantity * product.price}</td>
        </tr>
    )
}

export default CartProduct