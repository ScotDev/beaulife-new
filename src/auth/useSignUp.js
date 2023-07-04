import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { firebaseAuth } from "../firebase";
import { useAuthContext } from "./useAuthContext";
import { setLocalAuthData } from "./LocalStorage";
import { addUserToDB } from "./DatabaseSync";

export const useSignUp = () => {
  // Init firebase methods
  // const app = initFirebase()
  const auth = firebaseAuth();
  const provider = new GoogleAuthProvider();

  const { dispatch } = useAuthContext();

  // Declare local state
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signUpWithGoogle = async () => {
    setIsLoading(true);
    setError(false);
    setErrorMsg(null);
    await signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
        dispatch({ type: "SIGNUP", payload: res.user });
        setLocalAuthData(res.user);
        addUserToDB("google", res.user);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        throw error.code;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  // Need to check if user already exists
  const signUpWithEmail = async (email, password, nickName) => {
    setIsLoading(true);
    // setError(false)
    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        updateProfile(res.user, {
          displayName: nickName,
        });
        dispatch({ type: "SIGNUP", payload: res.user });
        setLocalAuthData(res.user);
        addUserToDB("email", res.user, nickName);
      })
      .catch((error) => {
        // console.log(error.code)
        setErrorMsg(error.code);
        setError(true);
        throw error.code;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // https://firebase.google.com/docs/auth/web/account-linking

  return { signUpWithGoogle, signUpWithEmail, isLoading, error, errorMsg };
};
