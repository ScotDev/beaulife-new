import { useState, useEffect } from "react";
import axios from "axios";

const useWeatherData = (coords) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (coords) {
      console.log("useWeather", coords);

      const getWeatherData = async () => {
        try {
          // Should include authentication check
          const res = await axios.get(
            `${import.meta.env.VITE_API_URL}/weather/all`,
            coords
          );
          setWeatherData(res);
        } catch (error) {
          console.log(error);
        }
      };

      // Should this be await/.then?
      getWeatherData();
    }
  }, []);

  return [weatherData];
};

export default useWeatherData;
