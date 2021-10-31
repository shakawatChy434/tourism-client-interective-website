/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, } from "firebase/auth";
import initAuthentication from '../pages/Login/Firebase/Firebase.init';


initAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const googleLogInProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const singInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleLogInProvider)
            .finally(() => setLoading(false));
    }
    /* Get Observer */
    useEffect(() => {
        const unsubscribs = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false)
        });
        return () => unsubscribs;
    }, []);

    /* LogOut */
    const LogOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {
            })
            .finally(() => setLoading(false))
    }
    return {
        user,
        singInWithGoogle,
        LogOut,
        isLoading,
    }
};

export default useFirebase;