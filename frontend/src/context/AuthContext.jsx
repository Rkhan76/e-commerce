// import { useState, useEffect, useContext, createContext, Children} from "react";

// const AuthContext = createContext()


// const AuthProvider = ({Children})=>{
//     const [auth, setAuth] = useState({
//       user: null,
//       token: '',
//     })

//     return(
//         <AuthContext.Provider value={[auth,setAuth]}>
//             {Children}
//         </AuthContext.Provider>
//     )
// }

// //customhook
// const useAuth = ()=> useContext(AuthContext)

// export { useAuth, AuthProvider}


import {createContext} from "react";

const AuthContext = createContext()

export default AuthContext