import React from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const Authcontext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setloding] = useState(true);
    const provider = new GoogleAuthProvider();

    const googlelogin = () => {
        setloding(true)
        return signInWithPopup(auth, provider)
    }
    const createUser = (email, password) => {
        setloding(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateuser = (userinfo) => {
        setloding(true)
        return updateProfile(auth.currentUser, userinfo)
    }

    const loginuser = (email, password) => {
        setloding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const emailverification=()=>{
        setloding(true)
        return sendEmailVerification(auth.currentUser)
    }
    const removeuser=()=>{
        setloding(true)
        return deleteUser(auth.currentUser)
    }
    const logoutuser=()=>{
        setloding(true)
        return signOut(auth)
    }

    const forgatepassword=(email)=>{
        setloding(true)
        return sendPasswordResetEmail(auth,email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setloding(false)
        });

        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        googlelogin,
        updateuser,
        loginuser,
        emailverification,
        removeuser,
        logoutuser,
        forgatepassword

    }

    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;