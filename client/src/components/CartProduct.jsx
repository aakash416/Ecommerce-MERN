import React from 'react'

const CartProduct = ({ product, index }) => {
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
                <button className="btn btn-info">data</button>
                <button className="btn btn-light">+</button>
            </td>
            <td>
                <button className="btn btn-danger">Remove</button>
            </td>
            <td> Price: ${product.price}</td>
        </tr>
    )
}

export default CartProduct