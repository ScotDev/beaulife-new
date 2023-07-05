import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signOutOfFireBaseAuth, firebaseAuth } from "../firebase";
// import axios from "axios";
import { useAuthContext } from "../auth/useAuthContext";
// import { getLocalAuthData } from "../auth/LocalStorage";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../components/Button";
import { PrimaryCard } from "../components/Card";
import Navbar from "../components/Navbar";

export default function Home() {
  const user = useAuthContext();
  const name = user?.user?.displayName?.split(" ")[0];

  return (
    <>
      <div className="background">
        <div className="background-color"></div>
      </div>
      <div className="flex flex-col items-center h-screen">
        {/* <main className="flex flex-col items-center w-[315px]"> */}
        <Navbar></Navbar>{" "}
        <main className="container">
          {/* <nav className="flex items-center justify-between w-full">
          <Link to="../settings">
            <GiHamburgerMenu className="h-12 w-8" />
          </Link>
          <p>{name || "Username"}</p>
        </nav> */}
          {/* <h2 className="text-3xl font-medium py-7">Welcome!</h2> */}
          {/* <Card></Card> */}
          <PrimaryCard location="Edinburgh" temp="19" />
        </main>
      </div>
    </>
  );
  // }
}
