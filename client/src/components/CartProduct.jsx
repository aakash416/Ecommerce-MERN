import React from 'react'

const CartProduct = ({ product, index }) => {
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td><img src={product.image} className="img-thumbnail rounded " alt={product.name} />  <h5 className="card-title">{product.name}</h5></td>
            <td>
                {product.description}
            </td>
            <td> Price: ${product.price}</td>
        </tr>
    )
}

export default CartProduct