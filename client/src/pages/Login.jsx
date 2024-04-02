import React, { useState } from "react";
import Input from "../components/Input";
import { login } from "../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ContextStore } from "../Context/ContextStore";

const Login = () => {
  const navgater = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setUserData, setToken } = ContextStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res = await login(data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.existingProfile));
      setUserData(res.data.existingProfile);
      setToken(res.data.token);
      toast.success(res.data.message);
      console.log(res.data.existingProfile.role);
      if (res.data.existingProfile.role === "admin") {
        return navgater("/dashboard");
      }
      navgater("/");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name={"Email"}
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

        {isloading ? (
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              aria-hidden="true"
            ></span>
            <span role="status">Login</span>
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-primary mt-3"
            disabled={!(data.email && data.password)}
          >
            Login
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

export default Login;
