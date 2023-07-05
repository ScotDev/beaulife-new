import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signOutOfFireBaseAuth, firebaseAuth } from "../firebase";
// import axios from "axios";
import { useAuthContext } from "../auth/useAuthContext";
// import { getLocalAuthData } from "../auth/LocalStorage";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../components/Button";
import { PrimaryCard, HourlyCard, DailyCard } from "../components/Card";
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
        <Navbar></Navbar>{" "}
        <main className="container">
          <div className="flex flex-col lg:flex-row gap-4 py-4">
            <PrimaryCard location="Edinburgh, UK" temp="19" />
            {/* <div className="flex flex-row lg:items-end gap-4 py-4">
              <HourlyCard temp="22" time="6pm" />
              <HourlyCard temp="18" time="7pm" />
              <HourlyCard temp="17" time="8pm" />
              <HourlyCard temp="15" time="9pm" />
              <HourlyCard temp="15" time="9pm" />
              <HourlyCard temp="15" time="9pm" />
              <HourlyCard temp="15" time="9pm" />
              <HourlyCard temp="15" time="9pm" />
            </div> */}
            <div id="scrollable" className="scroller">
              <div className="scroll-item">
                <HourlyCard temp="22" time="6pm" />
              </div>
              <div className="scroll-item">
                <HourlyCard temp="18" time="7pm" />
              </div>
              <div className="scroll-item">
                <HourlyCard temp="22" time="6pm" />
              </div>
              <div className="scroll-item">
                <HourlyCard temp="18" time="7pm" />
              </div>
              <div className="scroll-item">
                <HourlyCard temp="22" time="6pm" />
              </div>
              <div className="scroll-item">
                <HourlyCard temp="18" time="7pm" />
              </div>
            </div>
          </div>
          <div className="grid gap-6 py-6 w-full lg:w-2/5">
            <DailyCard />
            <DailyCard />
            <DailyCard />
          </div>
        </main>
      </div>
    </>
  );
  // }
}
