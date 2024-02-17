import { createContext, useState } from "react";

export const storeData = createContext();


export const Store = (props) => {
    const [cart, setCart] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState("user");
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState();


    return (<storeData.Provider value={{ cart, setCart, isLogin, setIsLogin, user, setUser, token, setToken, userData, setUserData }}>
        {props.children}
    </storeData.Provider>)

}
