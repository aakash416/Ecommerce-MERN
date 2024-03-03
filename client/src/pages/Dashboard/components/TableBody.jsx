import React from 'react'

const TableBody = ({ index, data }) => {
    return (
        <tr >
            <th scope="row">{index + 1}</th>
            <td>
                <img src={data?.image} alt={data?.firstName} style={{ width: "50px", height: "50px" }} />
            </td>
            <td>{data?.firstName}</td>
            <td>{data?.lastName}</td>
            <td>{data?.email}</td>
            <td>{data?.phone}</td>
            <td>{data?.gender}</td>
            <td>{data?.address}</td>
            <td><button className='btn btn-warning'> Edit</button></td>
            <td><button className="btn btn-danger" > Delete</button></td>

        </tr>
    )
}

export default TableBody