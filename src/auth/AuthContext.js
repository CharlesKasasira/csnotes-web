import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";

import { auth } from "../helpers/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const AuthContext = createContext()

export function AuthProvider({children}){

    const [ user, setUser ] = useState(null)

    const [ person, loading, error ] = useAuthState(auth)

    // const auth = getAuth()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, setUser)

        return unsubscribe
    }, []) 
    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}


export function useAuthValue(){
    return useContext(AuthContext)
} 