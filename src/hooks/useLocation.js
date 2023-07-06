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
  const [locationServicesDisabled, setLocationServicesDisabled] =
    useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      return setLocationServicesDisabled(false);
    }
    if ("geolocation" in navigator) {
      setLocationServicesDisabled(true);
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
      console.log("Not available");
      setLocationData(null);
    }
  }, []);

  return [locationData, locationServicesDisabled];
};

export default useLocation;
