import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signOutOfFireBaseAuth, firebaseAuth } from "../firebase";
// import axios from "axios";
import { useAuthContext } from "../auth/useAuthContext";
// import { getLocalAuthData } from "../auth/LocalStorage";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
  const user = useAuthContext();
  const name = user?.user?.displayName?.split(" ")[0];
  const navigate = useNavigate();
  // Testing passing auth details to server (it works)
  // const getToken = async () => {
  //   return await user?.user?.getIdToken(true);
  // };
  // useEffect(() => {
  //   async () => {
  //     //  axios.get("http://localhost:3333/uuid")
  //     const headers = {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + (await getToken()),
  //     };

  //     await axios.post(
  //       "http://localhost:3333/api/login",
  //       {},
  //       {
  //         headers: headers,
  //       }
  //     );
  //     // console.log(user?.user.accessToken)
  //   };
  // }, []);
  const handleSignOut = () => {
    signOutOfFireBaseAuth().then(() => {
      navigate(0);
    });
  };

  return (
    <div className="flex flex-col items-center pt-8 h-screen">
      <main className="flex flex-col items-center w-[315px]">
        <nav className="flex items-center justify-between w-full">
          <Link to="../settings">
            <GiHamburgerMenu className="h-12 w-8" />
          </Link>
          <p>{name || "Username"}</p>
        </nav>
        <h2 className="text-3xl font-medium py-7">Welcome!</h2>
        <Card></Card>
        <Button type="button" onClick={handleSignOut}>
          Sign out
        </Button>
      </main>
    </div>
  );
  // }
}
