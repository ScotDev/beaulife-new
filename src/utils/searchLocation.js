import axios from "axios";

const searchLocation = async (query) => {
  const params = { query };

  if (location) {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/weather/search`,
        { params }
      );

      // if (res.data.length === 0) return;

      return res.data;
    } catch (error) {
      console.log(error);
      return {
        error: "Error fetching location data",
        axiosError: error.message,
      };
    }
  }
  return {
    error: "No location provided",
    axiosError: error.message,
  };
};

export { searchLocation };
