
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { firebaseAuth } from "../firebase"
import { useAuthContext } from "../auth/useAuthContext";
const auth = firebaseAuth()

export default function ResetPassword() {

    const user = useAuthContext()
    const email = user?.user?.email || "";
    const handleResetRequest = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    // https://firebase.google.com/docs/auth/web/manage-users?hl=en&authuser=3#set_a_users_password
    return (
        <main className='flex flex-col items-center pt-24 h-screen'>
            <h1>Reset password</h1>

            <div className='flex flex-col mt-36 w-[315px] min-h-[116px] justify-between items-center'>
                <button className='border border-1 border-black rounded-md min-w-fit w-full h-[48px] px-4 font-medium text-lg' onClick={handleResetRequest}>Get password reset email</button>
            </div>
        </main>
    )
}
