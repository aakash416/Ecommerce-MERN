import React from 'react'

const Input = ({ name, type, id, value, setInput }) => {
    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
            <input
                type={type}
                className="form-control"
                id={id}
                aria-describedby="emailHelp"
                required
                value={value}
                onChange={(e) => {
                    setInput((prev) => ({ ...prev, [id]: e.target.value }))
                }}
            />
        </div>
    )
}

export default Input