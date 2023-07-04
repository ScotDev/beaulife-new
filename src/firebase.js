import firebaseConfig from './firebaseConfig'
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { removeLocalAuthData } from './auth/LocalStorage';

// Init services
export const initFirebase = () => {
    return initializeApp(firebaseConfig);
}

export const firebaseAuth = () => {
    const app = initFirebase()
    return getAuth(app)
}

export const signOutOfFireBaseAuth = async ()=>{
    const auth = firebaseAuth()
    removeLocalAuthData()
    return await signOut(auth)
}

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             // Fix types later
//             const name:any = result.user.displayName;
//             const email:any = result.user.email;
//             const profilePic:any = result.user.photoURL;

            

//             localStorage.setItem("name", name);
//             localStorage.setItem("email", email);
//             localStorage.setItem("profilePic", profilePic);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };