import { createContext, useReducer } from "react";
import { firebaseAuth } from "../firebase";
import { getLocalAuthData } from "./LocalStorage";

export const AuthContext = createContext()

export const authReducer = (state, action) => {

    switch (action.type) {
        case "LOGIN":
            // console.log(state, action)
            // localStorage.setItem("GPAccessToken", action.accessToken)
            // return { user: action.payload, accessToken: action.accessToken, emailAddress: action.emailAddress }
            return { user: action.payload }
        case "SIGNUP":
            // console.log(state, action)
            return { user: action.payload }
        case "SIGNOUT":
            // console.log(state, action)
            return { user: null }
        case "UPDATE":
            console.log(state, action)
            return { user: action.payload }
        default:
            return state;
    }
}

// TO-DO: firebase onAuthStateChange subscriber
// auth.onstatechange here? or in app.js/index.js?
// https://youtu.be/PKwu15ldZ7k?t=1210


export const AuthContextProvider = ({ children }) => {

    const currentUser = firebaseAuth()
    console.log(currentUser?.currentUser)

    const initialUser = getLocalAuthData()

    // if (JSON.parse(localStorage.getItem("authData"))) {
    //     console.log("local user found")
    //     initialUser = JSON.parse(localStorage.getItem("authData"))
    // } else {
    //     initialUser = null
    // }


    const [state, dispatch] = useReducer(authReducer, { user: initialUser })


    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
