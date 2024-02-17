import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { storeData } from "../Context/ContextStore"

const Header = () => {
    const store = useContext(storeData);
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
            <div className="container-fluid  ms-lg-5 me-lg-5  ">
                <Link className="navbar-brand" to={"/"}>
                    Ecommerce
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
                            !store.isLogin &&
                            <li className="nav-item" onClick={() => store.setUser("user")} >
                                <Link className="nav-link" to={"/login"}>
                                    Login
                                </Link>
                            </li>
                        }
                        {
                            !store.isLogin &&
                            <li className="nav-item" onClick={() => store.setUser("user")} >
                                <Link className="nav-link" to={"/register"}  >
                                    Register
                                </Link>

                            </li>
                        }
                        {
                            store.isLogin &&
                            <li className="nav-item"  >
                                <Link className="nav-link" to={"/profile"} >
                                    <img className='rounded-circle' style={{ width: "40px", height: "40px" }} src={store.userData.image} alt={store.userData.firstName} />
                                </Link>
                            </li>
                        }
                        {
                            store.isLogin &&
                            <li className="nav-item"  >
                                <Link className="nav-link" to={"/profile"} >
                                    Hi, {store.userData.firstName}
                                </Link>
                            </li>
                        }

                        {
                            store.isLogin &&
                            <li className="nav-item" onClick={() => store.setIsLogin(false)} >
                                <Link className="nav-link" to={"/login"}>
                                    Logout
                                </Link>
                            </li>
                        }
                        <li className="nav-item position-relative">
                            <Link className="nav-link" to={"/cart"}>
                                <span className='position-absolute  bg-warning  p-1 fs-6 rounded-pill text-dark'>{store.cart?.length !== 0 ? storeData.cart.length : <></>}</span>
                                <i className="bi bi-cart fs-2 "></i>
                            </Link>
                        </li>

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
                                <li onClick={() => store.setUser("seller")}>
                                    <Link className="dropdown-item" to={"/login"}>
                                        Login
                                    </Link>
                                </li>
                                <li onClick={() => store.setUser("seller")}>
                                    <Link className="dropdown-item" to={"/register"}>
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        </li>


                    </ul>

                </div>
            </div>
        </nav >

    )
}

export default Header