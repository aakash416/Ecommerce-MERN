import React from 'react'

const ProductTableBody = ({ index, data }) => {
    return (
        <tr >
            <th scope="row">{index + 1}</th>
            <td>
                <img src={data?.image} alt={data?.name} style={{ width: "50px", height: "50px" }} />
            </td>
            <td>{data?.name}</td>
            <td>{data?.description}</td>
            <td>{data?.price}</td>
            <td>{data?.category}</td>
            <td>{data?.countInStock}</td>
            <td>{data?.status}</td>
            <td>{data?.isApproved}</td>
            <td><button className='btn btn-warning'> Edit</button></td>
            <td><button className="btn btn-danger" > Delete</button></td>

        </tr>
    )
}

export default ProductTableBody