import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
// import { useFirebaseContext } from "../firebase/useFirebaseContext";
import { getAuth, signOut } from 'firebase/auth'
import { removeLocalAuthData } from './LocalStorage';
import { signOutOfFireBaseAuth } from '../firebase';

export const useSignOut = () => {

    // const firebaseContext = useFirebaseContext()
    // const auth = getAuth(firebaseContext)

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const { dispatch } = useAuthContext()

    const signOut = async () => {
        setIsLoading(true)
        setError(null)
        signOut(auth)
            .then(() => {
                console.log("user signed out")

                signOutOfFireBaseAuth().then(() => {
                    dispatch({ type: "SIGNOUT" })
                }).catch(err => {
                    throw err;
                    // I think throwing error here is caught below
                })

            })
            .catch(err => {
                setError(err)
            }).finally(() => {
                setIsLoading(false)
            })

    }

    return { signOut, isLoading, error }
}