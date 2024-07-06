import {useEffect, useState} from "react";
import AuthContext from "./AuthContext";

const AuthContextProvider = ({children}) =>{
    const [auth, setAuth] = useState({
        user: null,
        token: ""
    })

    useEffect(()=>{
        const data = localStorage.getItem('auth')
        if(data){
            const parseData = JSON.parse(data)
            setAuth({
                ...auth,
                user:parseData.user,
                token: parseData.token
            })
        }
    },[auth])

    return (
      <AuthContext.Provider value={{auth, setAuth}}>
        {children}
      </AuthContext.Provider>
    )
}

export default AuthContextProvider