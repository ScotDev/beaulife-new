import { useState, useEffect } from "react";

import { FcGoogle } from "react-icons/fc";
import { useNavigate, Link } from "react-router-dom";
import { useSignUp } from "../auth/useSignUp";
import { parseFirebaseAuthError } from "../auth/firebaseErrors";

export default function Signup() {
  const { signUpWithGoogle, signUpWithEmail, isLoading, errorMsg } =
    useSignUp();

  // Hooks
  const navigate = useNavigate();

  // TO-DO Condense into one form state
  const [email, setEmail] = useState("");
  const [nickName, setnickName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, [email, password, nickName]);

  // Also normalise other fields?
  const normalizeWhitespace = async () => {
    password.replace(/\s/g, "");
    email.replace(/\s/g, "");
  };

  const handleGoogleSignIn = async () => {
    try {
      await signUpWithGoogle();
      navigate("/callback");
      navigate("/home");
    } catch (error) {
      console.log("Sign up error");
    }
  };
  const handleSignUpWithEmail = async (email, password, nickName) => {
    try {
      await signUpWithEmail(email, password, nickName);
      navigate("/callback");
      navigate("/home");
    } catch (error) {
      console.log("Sign up error");
      const parsedError = parseFirebaseAuthError(error);
      setError(parsedError);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordRegexLatin = /[a-zA-Z]/;
    const passwordRegexNumbers = /[0-9]/;

    await normalizeWhitespace();

    if (
      password.length < 12 ||
      !passwordRegexLatin.test(password) ||
      !passwordRegexNumbers.test(password)
    ) {
      setError(
        "Password must be longer than 12 characters and contain both numbers and letters"
      );
    } else {
      await handleSignUpWithEmail(email, password, nickName);
    }
    // if (error)  - handle error
  };

  return (
    <>
      <div className="background dark:background__dark"></div>
      <main className="flex flex-col items-center pt-8 h-screen dark:text-gray-100">
        <h1 className="text-2xl font-bold font-display">beaulife.</h1>
        <h2 className="text-3xl font-medium pt-7">Let's get started!</h2>
        <h3 className="text-lg font-medium pt-4">Create an account</h3>

        <div className="rounded-t-[32px] h-full w-screen mt-14 pt-16 flex flex-col items-center glass-card bg-gray-600">
          <div className="flex flex-col items-center w-[315px]">
            <form
              className="h-[300px] w-full flex flex-col justify-between"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Nickname"
                className="rounded-md min-w-fit w-full h-[48px] px-4 caret-sky-500"
                value={nickName}
                onChange={(e) => {
                  setnickName(e.target.value);
                }}
              ></input>
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
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <p className="h-8 min-w-fit w-full px-4 py-1 mb-4 text-sm text-gray-700 dark:text-gray-200">
                {error}
              </p>
              <button
                className="btn-primary"
                type="submit"
                disabled={isLoading}
              >
                Sign up
              </button>
            </form>

            <div className="relative flex py-5 items-center w-full">
              <div className="flex-grow border-t border-gray-900 dark:border-gray-300"></div>
              <span className="flex-shrink mx-2 text-gray-700 dark:text-gray-200">
                or
              </span>
              <div className="flex-grow border-t border-gray-900 dark:border-gray-300"></div>
            </div>

            <button
              className="btn-google"
              onClick={handleGoogleSignIn}
              disabled={isLoading}
            >
              <FcGoogle className="inline-block w-[20px] h-[20px] mb-1 mr-[2px]" />{" "}
              Sign up with Google
            </button>
          </div>

          <p className="text-center max-w-fit mt-12 px-4 text-sm hover:cursor-pointer">
            Already have an account?
            <Link to="../login">
              <span className="underline decoration-sky-500 ml-1">Log in</span>
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
