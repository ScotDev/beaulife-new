import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signOutOfFireBaseAuth, firebaseAuth } from "../firebase";
// import axios from "axios";
import { useAuthContext } from "../auth/useAuthContext";
// import { getLocalAuthData } from "../auth/LocalStorage";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../components/Button";
import { PrimaryCard, SecondaryCard } from "../components/Card";
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
          <PrimaryCard location="Edinburgh, UK" temp="19" />
          <div className="flex flex-col lg:flex-row gap-4 py-4">
            <SecondaryCard temp="22" time="6pm" />
            <SecondaryCard temp="18" time="7pm" />
            <SecondaryCard temp="17" time="8pm" />
            <SecondaryCard temp="15" time="9pm" />
          </div>
        </main>
      </div>
    </>
  );
  // }
}
