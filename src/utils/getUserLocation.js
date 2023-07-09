// const getUserLocation = () => {
//   if (!navigator.geolocation) {
//     return {
//       lat: null,
//       long: null,
//       error: "Geolocation is not supported by your browser",
//     };
//   }

//   if ("geolocation" in navigator) {
//     console.log("Available");
//     navigator.geolocation.getCurrentPosition((position) => {
//       console.log(position);
//       return {
//         lat: position.coords.latitude,
//         long: position.coords.longitude,
//         error: null,
//       };
//     });
//   } else {
//     return {
//       lat: null,
//       long: null,
//       error: "Location services are not enabled",
//     };
//   }
// };

// const getUserLocation = async () => {
//   const handlePostion = (position) => {
//     return {
//       lat: position.coords.latitude,
//       long: position.coords.longitude,
//     };
//   };
//   const handleError = () => {
//     return {
//       lat: 0,
//       long: 0,
//     };
//   };
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(handlePostion, handleError);
//   }
// };

// Write a function that returns the user's location
const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};

function showPosition(position) {
  const latLong = {
    lat: position.coords.latitude,
    long: position.coords.longitude,
  };
  return latLong;
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      "An unknown error occurred.";
      break;
  }
}
export { getLocation };
