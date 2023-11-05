import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../../shared/Firebase/Firebase";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const proviter = new GoogleAuthProvider()
    const createUsers = (email, pass)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const loginUser = (email, pass)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }

    
    const googleUser = () =>{
        setLoading(true)
        return signInWithPopup(auth, proviter)
    }
    useEffect(()=>{
        const unSubscrib = onAuthStateChanged(auth, crrent =>{
            setUser(crrent)
            setLoading(false)
        })
        return ()=>{
            unSubscrib()
        }
    },[])
    const logOut = ()=>{
        return signOut(auth)
    }
    const authInfo = {
        user,
        loading,
        createUsers,
        loginUser,
        googleUser,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;