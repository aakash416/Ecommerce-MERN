import React from 'react'
import { Link } from 'react-router-dom'
import { ContextStore } from "../Context/ContextStore"
import logo from "../assets/logo.png"

const Header = () => {

    const { setUserData, userData, setUser, cart } = ContextStore();

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUserData(null);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
            <div className="container-fluid  ms-lg-5 me-lg-5  ">
                <Link className="navbar-brand" to={"/"}>
                    <img src={logo} alt="Get In Bag" style={{ height: "50px" }} />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <form className="d-flex me-auto mt-2" role="search">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-dark" type="submit">
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                    <ul className="navbar-nav  ms-auto mb-2 mb-lg-0 d-flex align-items-center" >
                        {
                            !userData &&
                            <li className="nav-item" onClick={() => setUser("user")} >
                                <Link className="nav-link" to={"/login"}>
                                    Login
                                </Link>
                            </li>
                        }
                        {
                            !userData &&
                            <li className="nav-item" onClick={() => setUser("user")} >
                                <Link className="nav-link" to={"/register"}  >
                                    Register
                                </Link>

                            </li>
                        }


                        {
                            userData?.role === "seller" &&
                            <li className="nav-item"  >
                                <Link className="nav-link" to={"/addNewProduct"}  >
                                    Add New Product
                                </Link>

                            </li>
                        }

                        {
                            userData?.role === "seller" &&
                            <li className="nav-item"  >
                                <Link className="nav-link" to={"/allProduct"}  >
                                    See ALl Product
                                </Link>

                            </li>
                        }
                        {
                            userData?.role === "seller" &&
                            <li className="nav-item" >
                                <Link className="nav-link" to={"/register"}  >
                                    Order Status
                                </Link>

                            </li>
                        }
                        {
                            userData?.role === "seller" &&
                            <li className="nav-item"  >
                                <Link className="nav-link" to={"/register"}  >
                                    Delivered
                                </Link>

                            </li>
                        }

                        {
                            userData &&
                            <li className="nav-item"  >
                                <Link className="nav-link" to={"/profile"} >
                                    <img className='rounded-circle' style={{ width: "40px", height: "40px" }} src={userData.image} alt={userData.firstName} />
                                </Link>
                            </li>
                        }
                        {
                            userData &&
                            <li className="nav-item"  >
                                <Link className="nav-link" to={"/profile"} >
                                    Hi, {userData.firstName}
                                </Link>
                            </li>
                        }

                        {
                            userData &&
                            <li className="nav-item" onClick={handleLogout} >
                                <Link className="nav-link" to={"/login"}>
                                    Logout
                                </Link>
                            </li>
                        }
                        {
                            (userData?.role === "user" || !userData) &&
                            <li className="nav-item position-relative">
                                <Link className="nav-link" to={"/cart"}>
                                    <span className='position-absolute  bg-warning  p-1 fs-6 rounded-pill text-dark'>{cart?.length !== 0 ? cart?.length : <></>}</span>
                                    <i className="bi bi-cart fs-2 "></i>
                                </Link>
                            </li>
                        }

                        {
                            !userData &&
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Became a Seller
                                </Link>
                                <ul className="dropdown-menu">
                                    <li onClick={() => setUser("seller")}>
                                        <Link className="dropdown-item" to={"/login"}>
                                            Login
                                        </Link>
                                    </li>
                                    <li onClick={() => setUser("seller")}>
                                        <Link className="dropdown-item" to={"/register"}>
                                            Register
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        }


                    </ul>

                </div>
            </div>
        </nav >

    )
}

export default Header