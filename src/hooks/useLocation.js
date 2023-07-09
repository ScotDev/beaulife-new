import { useState, useEffect } from "react";

// export const getUserLocation = () => {
//   console.log("ran");
//   let data;
//   navigator.geolocation.getCurrentPosition((position) => {
//     console.log("logged");
//     console.log(position);
//   });
// };

const useLocation = () => {
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      return setLocationData({
        coords: null,
        error: "Geolocation is not supported by your browser",
      });
    }
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition((position) => {
        setLocationData({
          coords: {
            lat: position.coords.latitude,
            long: position.coords.longitude,
          },
          error: null,
        });
      });
    } else {
      console.log("Not available");
      setLocationData({
        coords: null,
        error: "Location services are not enabled",
      });
    }
  }, []);

  return [locationData];
};

export default useLocation;
