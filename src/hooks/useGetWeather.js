import { useState, useEffect } from "react";
import axios from "axios";
import { getUserLocation } from "../utils/getUserLocation";

const promiseWrapper = (promise) => {
  let status = "pending";
  let result;

  const s = promise.then(
    (value) => {
      status = "success";
      result = value;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return () => {
    switch (status) {
      case "pending":
        throw s;
      case "success":
        return result;
      case "error":
        throw result;
      default:
        throw new Error("Unknown status");
    }
  };
};

function useGetWeather(url) {
  const [resource, setResource] = useState(null);

  const location = getUserLocation();

  useEffect(() => {
    const getData = async () => {
      if (location) {
        const promise = axios
          .get(`${import.meta.env.VITE_API_URL}/weather/daily`, { location })
          .then((response) => response.data)
          .catch((error) => console.log(error));
        setResource(promiseWrapper(promise));
      }
      if (location === "") {
        setResource(promiseWrapper(null));
      }
    };
    getData();
  }, [location]);

  return resource;
}

export default useGetWeather;
