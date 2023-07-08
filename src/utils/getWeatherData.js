import axios from "axios";

// TODO: Add authentication check
// TODO: Add improved error handling
// TODO: Change POST to GET + query params

const getCurrentWeatherData = async (coords) => {
  if (coords) {
    try {
      // Should include authentication check
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/weather/now`,
        coords
      );
      return res.data;
    } catch (error) {
      console.log(error);
      return { errorMsg: "Error fetching weather" };
    }
  }
  return { errorMsg: "No coords provided" };
};
const getDailyWeatherData = async (coords) => {
  const { lat, long } = coords;
  const params = { lat, long };
  if (coords) {
    try {
      // Should include authentication check
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/weather/daily`,
        { params }
      );
      return res.data;
    } catch (error) {
      console.log(error);
      return { errorMsg: "Error fetching weather" };
    }
  }
  return { errorMsg: "No coords provided" };
};
// const getDailyWeatherData = async (coords) => {
//   if (coords) {
//     try {
//       // Should include authentication check
//       const res = await axios.post(
//         `${import.meta.env.VITE_API_URL}/weather/daily`,
//         coords
//       );
//       return res.data;
//     } catch (error) {
//       console.log(error);
//       return { errorMsg: "Error fetching weather" };
//     }
//   }
//   return { errorMsg: "No coords provided" };
// };
const getHourlyWeatherData = async (coords) => {
  if (coords) {
    try {
      // Should include authentication check
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/weather/hourly`,
        coords
      );
      // Experimental
      if (res.status !== 200) {
        throw res.status;
      }
      return res.data;
    } catch (error) {
      console.log(error);
      return { errorMsg: "Error fetching weather" };
    }
  }
  return { errorMsg: "No coords provided" };
};

export { getCurrentWeatherData, getDailyWeatherData, getHourlyWeatherData };
