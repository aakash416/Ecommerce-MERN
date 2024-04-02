import React, { useContext, useState } from "react";
import Input from "../components/Input";
import { register } from "../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { storeData } from "../Context/ContextStore";

const Register = () => {
  const navgater = useNavigate();
  const store = useContext(storeData);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    gender: "",
    role: store.user,
    image: "",
  });
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await register(data);
      toast.success(res?.data?.message);
      navgater("/login");
    } catch (err) {
      setError(err.response.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

 

  return (
    <div className="container mt-5">
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name={"First Name"}
          type={"text"}
          id={"firstName"}
          value={data.firstName}
          setInput={setData}
        />
        <Input
          name={"Last Name"}
          type={"text"}
          id={"lastName"}
          value={data.lastName}
          setInput={setData}
        />
        <Input
          name={"email "}
          type={"email"}
          id={"email"}
          value={data.email}
          setInput={setData}
        />
        <Input
          name={"Password"}
          type={"password"}
          id={"password"}
          value={data.password}
          setInput={setData}
        />
        <Input
          name={"Phone Number"}
          type={"number"}
          id={"phone"}
          value={data.phone}
          setInput={setData}
        />
        <label htmlFor="gender" className="form-label">
          Gender
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="gender"
          value={data.gender}
          onChange={(e) => {
            setData({ ...data, gender: e.target.value });
          }}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <Input
          name={"Image URL"}
          type={"text"}
          id={"image"}
          value={data.image}
          setInput={setData}
        />
        <Input
          name={"Address"}
          type={"text"}
          id={"address"}
          value={data.address}
          setInput={setData}
        />

        {loading ? (
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              aria-hidden="true"
            ></span>
            <span role="status">Register</span>
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-primary mt-3"
            disabled={
              !(
                data?.firstName &&
                data?.lastName &&
                data?.email &&
                data?.password &&
                data?.image &&
                data?.address &&
                data?.gender &&
                data?.phone
              )
            }
          >
            Register
          </button>
        )}


        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default Register;
