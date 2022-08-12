import { createContext,useState } from "react";
export const AuthContext = createContext("");

export const Auth = ({ children }) => {
    const [authState, setAuthState] = useState([])

    const value = {
        authState,
        setAuthState,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}