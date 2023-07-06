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
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log("logged");
        // console.log(position);
        setLocationData({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    } else {
      console.log("Not Available");
      setLocationData({});
    }
  }, []);

  return [locationData];
};

export default useLocation;
