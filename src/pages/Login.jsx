import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, Link } from "react-router-dom";
import { useSignUp } from "../auth/useSignUp";
import { useLogIn } from "../auth/useLogIn";
import { parseFirebaseAuthError } from "../auth/firebaseErrors";
import Button from "../components/Button";

export default function Login() {
  const { signUpWithGoogle, isLoading } = useSignUp();
  // Lack of error and loading states because of clash
  const { logInWithEmail, errorMsg } = useLogIn();

  const navigate = useNavigate();

  //   const [credentials, setcredentials] = useState({
  //     email: "",
  //     password: "",
  //   });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, [email, password]);

  const handleGoogleSignIn = async () => {
    try {
      await signUpWithGoogle();
      console.log(document.location.href);
      navigate("/callback");
      console.log(document.location.href);
      navigate("/home");
      console.log(document.location.href);
    } catch (error) {
      console.log("Sign in error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.length > 5 && password.length > 12) {
      try {
        await logInWithEmail(email.trim(), password.trim());
      } catch (error) {
        console.log("Sign up error");
        const parsedError = parseFirebaseAuthError(error);
        setError(parsedError);
      }
    } else {
      setError("Email/password is invalid");
    }
  };

  return (
    <>
      <main className="flex flex-col items-center pt-8 h-screen">
        <h1 className="text-2xl font-bold font-display">beaulife.</h1>
        <h2 className="text-3xl font-medium pt-7">Welcome back!</h2>
        <h3 className="text-lg font-medium pt-4 ">Let's log in</h3>

        <div className="rounded-t-[32px] bg-gray-200 h-full w-screen pt-12 mt-14 flex flex-col items-center">
          <div className="flex flex-col items-center w-[315px]">
            <form
              className="h-[244px] w-full flex flex-col justify-between"
              onSubmit={handleSubmit}
            >
              {/* <input type="text" placeholder='Nickname' className="rounded-md min-w-fit w-full h-[48px] px-4 caret-sky-500"></input> */}
              <input
                type="email"
                placeholder="Email"
                className="rounded-md min-w-fit w-full h-[48px] px-4"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
              <input
                type="password"
                placeholder="Password"
                className="rounded-md min-w-fit w-full h-[48px] px-4"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <p className="h-8 min-w-fit w-full px-4 py-1 text-sm text-gray-700">
                {error}
              </p>
              <Button primary type="submit" disabled={isLoading}>
                Log in
              </Button>
            </form>

            <div className="relative flex py-5 items-center w-full">
              <div className="flex-grow border-t border-gray-900"></div>
              <span className="flex-shrink mx-2 text-gray-700">or</span>
              <div className="flex-grow border-t border-gray-900"></div>
            </div>

            <button
              className="border border-1 border-black rounded-md min-w-fit w-full h-[48px] px-4 font-medium text-lg"
              onClick={handleGoogleSignIn}
              disabled={isLoading}
            >
              <FcGoogle className="inline-block w-[20px] h-[20px] mb-1 mr-[2px]" />{" "}
              Log in with Google
            </button>

            <div className="flex items-center justify-between mt-12 text-sm w-full">
              <Link to="../resetpassword">
                <span className="underline decoration-sky-500 hover:cursor-pointer">
                  Forgot password?
                </span>
              </Link>
              <div>
                <p className="text-center max-w-fit">
                  New here?
                  <Link to="../signup">
                    <span className="underline decoration-sky-500 ml-1 hover:cursor-pointer">
                      Sign up
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
