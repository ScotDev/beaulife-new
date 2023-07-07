import { useEffect, useState, useMemo } from "react";
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
import Loading from "../components/Loading";
import useLocation from "../hooks/useLocation";
// import useWeatherData from "../hooks/useWeatherData";
import {
  getCurrentWeatherData,
  getDailyWeatherData,
  getHourlyWeatherData,
} from "../utils/getWeatherData";

export default function Home() {
  const [dailyData, setDailyData] = useState([]);
  const [hourlyData, setHourlyData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const user = useAuthContext();
  // const name = user?.user?.displayName?.split(" ")[0];
  const daily = dailyData?.data?.map((item, index) => {
    return <MiniCard key={index} data={item} />;
  });
  const hourly = hourlyData?.data?.map((item, index) => {
    return (
      <div key={index} className="scroll-item">
        <HourlyCard data={item} />
      </div>
    );
  });

  const [locationData] = useLocation();

  // console.log(locationData);

  // const [weatherData] = useWeatherData(locationData);
  // // // const testAPI = (passedData) => {
  // console.log(weatherData);
  // };

  // Give me an example of how to use the useMemo or useCallback hook to cache data from an API call.

  const cachedDailyData = async () => {
    const data = await getDailyWeatherData(locationData);
    setDailyData(data);
  };
  const memoizedDailyData = useMemo(() => cachedDailyData, []);
  useEffect(() => {
    memoizedDailyData();
  }, [memoizedDailyData]);

  const cachedHourlyData = async () => {
    const data = await getHourlyWeatherData(locationData);
    setHourlyData(data);
  };
  const memoizedHourlyData = useMemo(() => cachedHourlyData, []);
  useEffect(() => {
    memoizedHourlyData();
  }, [memoizedHourlyData]);

  useEffect(() => {
    (async () => {
      if (locationData) {
        setIsloading(true);
        cachedDailyData();
        cachedHourlyData();
      } else {
        console.log("Location services disabled");
      }
    })();

    setTimeout(() => {
      setIsloading(false);
    }, 700);
  }, [locationData]);

  return (
    <>
      <div className="background">
        <div className="background-color"></div>
      </div>
      <div className="flex flex-col items-center h-screen">
        <Navbar></Navbar>
        {isLoading && <Loading />}
        <main className="container">
          <div className="flex flex-col lg:flex-row gap-10 py-4">
            {!isLoading && (
              <PrimaryCard
                updatedTime={dailyData?.updatedTime}
                location={dailyData?.location}
                data={dailyData?.current}
                minMax={dailyData?.data?.[0]}
              />
            )}

            {!isLoading && (
              <div id="scrollable" className="scroller">
                {hourly}
              </div>
            )}
          </div>
          <div className="grid place-items-center gap-6 py-6 w-full lg:w-2/5">
            {!isLoading && daily}
          </div>
        </main>
      </div>
    </>
  );
  // }
}
