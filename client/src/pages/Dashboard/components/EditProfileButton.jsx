import React, { useState } from 'react'
import Input from '../../../components/Input'
import { updateUser } from '../../../api/admin';

const EditProfileButton = (props) => {
    const [data, setData] = useState(props.data);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            await updateUser(data._id, data)
        }
        catch (err) {
            setError("Something happed wrong !")
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div> <button
            type="button"
            className="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
        >
            Edit
        </button>
            {/* Modal */}
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                Update Profile
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <Input name={"First Name"} type={"text"} id={"firstName"} value={data.firstName} setInput={setData} required />
                                <Input name={"Last Name"} type={"text"} id={"lastName"} value={data.lastName} setInput={setData} />
                                <Input name={"email "} type={"email"} id={"email"} value={data.email} setInput={setData} required />
                                <Input name={"Phone Number"} type={"number"} id={"phone"} value={data.phone} setInput={setData} required />
                                <label htmlFor="gender" className="form-label">
                                    Gender
                                </label>
                                <select className="form-select" aria-label="Default select example" id='gender' value={data.gender} onChange={(e) => { setData({ ...data, gender: e.target.value }) }}>
                                    <option value="">Select Gender</option>
                                    <option value="Male" >Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other" >Other</option>
                                </select>
                                <Input name={"Image URL"} type={"text"} id={"image"} value={data.image} setInput={setData} />
                                <Input name={"Address"} type={"text"} id={"address"} value={data.address} setInput={setData} />
                            </div>
                            <div className="modal-footer ">
                                {error &&
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                }

                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                                {
                                    loading ?
                                        <button className="btn btn-primary" type="button" disabled>
                                            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                            <span role="status">Update</span>
                                        </button> :
                                        <button type="submit" className="btn btn-primary">
                                            Update
                                        </button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfileButton