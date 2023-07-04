import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { firebaseAuth } from "../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth'

export const useLogIn = () => {
    const auth = firebaseAuth()

    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const { dispatch } = useAuthContext()

    const logInWithEmail = async (email, password) => {
        setIsLoading(true)
        setError(false)
        setErrorMsg(null)
        await signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res.user)
                dispatch({ type: "LOGIN", payload: res.user })
                setLocalAuthData(res.user)
            })
            .catch((error) => {
                console.log(error)
                setError(true)
                throw error.code
            }).finally(() => {
                setIsLoading(false)
            })
    }

    return { logInWithEmail, isLoading, error, errorMsg }
}