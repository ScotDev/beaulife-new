import { useEffect, useState } from "react";
import { useAuthContext } from "../auth/useAuthContext";
import { BsCreditCard } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { signOutOfFireBaseAuth } from "../firebase";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

export default function Profile() {
  const navigate = useNavigate();
  const user = useAuthContext();

  // useEffect(() => {
  //   console.log("useeff");

  //   const getUserDetails = async () => {
  //     //   const token = await getToken();
  //     //   console.log(user.user.stsTokenManager);
  //     const headers = {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + user.user.stsTokenManager.accessToken,
  //     };

  //     const data = await axios.get(
  //       `${import.meta.env.VITE_API_URL}/auth/user/${user?.user?.uid}`,
  //       // {},
  //       {
  //         headers: headers,
  //       }
  //     );
  //     return data;
  //   };

  //   getUserDetails().then((data) => setSubStatus(data.data.subscription));
  // }, []);

  const handleSignOut = () => {
    signOutOfFireBaseAuth().then(() => {
      navigate(0);
    });
  };

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <Navbar />
        <div className="background dark:background__dark">
          <div className="background-color __glow dark:__ocean"></div>
        </div>
        <main className="container text-gray-800 dark:text-gray-300">
          <div className="flex items-center flex-col mx-auto pt-4">
            <div className="flex items-center pb-8 mb-4 min-w-fit w-full">
              <img
                className="rounded-full ring-offset-2 ring-purple-300 ring-2 h-12 w-12"
                src={user?.user?.photoURL || ""}
              />
              <div className="pl-4">
                <h3 className="font-medium text-lg">
                  {user?.user?.displayName || "Username"}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 mt-2">
                  {user?.user?.email || "email@test.com"}
                </p>
              </div>
            </div>

            <ul className="flex flex-col gap-6  w-full pb-24">
              <fieldset>
                <label for="underline_select" className="font-medium">
                  Language
                </label>
                <select
                  id="underline_select"
                  className="block py-2.5 px-0 w-full text-base text-gray-800 dark:text-gray-400 bg-transparent border-0 border-b-2 border-purple-400  appearance-none dark:border-purple-400 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option selected disabled value="EN">
                    English
                  </option>
                  <option disabled value="ES">
                    Español
                  </option>
                  <option disabled value="DE">
                    Deutsch
                  </option>
                </select>
              </fieldset>
              <li className="font-medium">Temperature units</li>
              <li className="font-medium">Speed units</li>
              <li className="font-medium">Time format</li>
              <li className="font-medium">Unit precision</li>
              <li className="font-medium">Always on dark mode</li>
            </ul>

            {/* <div className="flex items-center mb-6 min-w-fit w-full">
            <BsCreditCard className="h-12 w-10 mr-2" />
            <div className="pl-4">
              <h3 className="font-medium text-lg">Subscription status</h3>
              <p className="text-gray-700 mt-2 capitalize">
                {subStatus || "Inactive"}
              </p>
            </div>
          </div> */}
            <Button type="button" secondary onClick={handleSignOut}>
              Sign out
            </Button>
          </div>
        </main>
      </div>
    </>
  );
}
