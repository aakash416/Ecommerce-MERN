import React from 'react'
import EditProfileButton from './EditProfileButton'
import { deleteUser } from '../../../api/admin'

const TableBody = ({ index, data }) => {

    const handleDelete = (id) => {
        deleteUser(id).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err.response.data.message)
        })

    }
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
            <td>
                <EditProfileButton data={data} />
            </td>
            <td><button className="btn btn-danger" onClick={() => handleDelete(data._id)}> Delete</button></td>
        </tr>

    )
}

export default TableBody