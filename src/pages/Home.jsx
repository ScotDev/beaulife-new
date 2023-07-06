import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signOutOfFireBaseAuth, firebaseAuth } from "../firebase";
// import axios from "axios";
import { useAuthContext } from "../auth/useAuthContext";
// import { getLocalAuthData } from "../auth/LocalStorage";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../components/Button";
import {
  PrimaryCard,
  HourlyCard,
  DailyCard,
  MiniCard,
} from "../components/Card";
import Navbar from "../components/Navbar";
import { getUserLocation } from "../utils/Location";

const dummyDailyData = [
  {
    day: "thursday",
    condition: "Mostly Cloudy",
    maxtemp_c: "18.4",
    mintemp_c: "10.1",
    maxwind_mph: "24.6",
    avgvis_miles: "4.2",
    uv: "3.3",
  },
  {
    day: "friday",
    condition: "Mostly Cloudy",
    maxtemp_c: "18.4",
    mintemp_c: "10.1",
    maxwind_mph: "24.6",
    avgvis_miles: "4.2",
    uv: "3.3",
  },
];

export default function Home() {
  const user = useAuthContext();
  const name = user?.user?.displayName?.split(" ")[0];
  const daily = dummyDailyData.map((item, index) => {
    return <MiniCard key={index} data={item} />;
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Available");
      // getUserLocation();
      const logPosition = (position) => {
        console.log(position);
      };
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
      });
    } else {
      console.log("Not Available");
    }
  }, []);

  return (
    <>
      <div className="background">
        <div className="background-color"></div>
      </div>
      <div className="flex flex-col items-center h-screen">
        <Navbar></Navbar>{" "}
        <main className="container">
          <div className="flex flex-col lg:flex-row gap-10 py-4">
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
            {daily}
            {/* <DailyCard />
            <DailyCard />
            <DailyCard />
            <DailyCard />
            <DailyCard />
            <DailyCard /> */}
          </div>
        </main>
      </div>
    </>
  );
  // }
}
