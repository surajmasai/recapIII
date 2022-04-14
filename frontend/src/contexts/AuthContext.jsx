import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext({ isAuth: false, setAuth: () => { } })  //type

export const AuthContextProvider = ({ children }) => {

    const [isAuth, setAuth] = useState(false);

    const value = { isAuth, setAuth };


    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}