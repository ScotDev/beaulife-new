import axios from "axios";

// TODO: Add authentication check
// TODO: Add improved error handling
// TODO: Change POST to GET + query params

const getWeatherData = async (coords) => {
  const { lat, long } = coords;
  const params = { lat, long };

  if (location) {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/weather/all`,
        { params }
      );
      return res.data;
    } catch (error) {
      console.log(error);
      return {
        error: "Error fetching weather data",
        axiosError: error.message,
      };
    }
  }
  return {
    error: "No coords provided",
    axiosError: error.message,
  };
};

export { getWeatherData };
