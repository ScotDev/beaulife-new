import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
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
import useLocation from "../hooks/useLocation";
// import useWeatherData from "../hooks/useWeatherData";
import {
  getCurrentWeatherData,
  getDailyWeatherData,
} from "../utils/getWeatherData";

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
  const [dailyData, setDailyData] = useState([]);
  const user = useAuthContext();
  // const name = user?.user?.displayName?.split(" ")[0];
  const daily = dailyData?.data?.map((item, index) => {
    return <MiniCard key={index} data={item} />;
  });

  const [locationData] = useLocation();

  console.log(locationData);

  // const [weatherData] = useWeatherData(locationData);
  // // // const testAPI = (passedData) => {
  // console.log(weatherData);
  // };

  useEffect(() => {
    (async () => {
      // await getCurrentWeatherData(locationData);
      const res = await getDailyWeatherData(locationData);
      console.log(res);
      setDailyData(res);
    })();
  }, [locationData]);

  return (
    <>
      <div className="background">
        <div className="background-color"></div>
      </div>
      <div className="flex flex-col items-center h-screen">
        <Navbar></Navbar>
        <main className="container">
          <div className="flex flex-col lg:flex-row gap-10 py-4">
            <PrimaryCard
              location={dailyData?.location}
              data={dailyData?.current}
            />
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
