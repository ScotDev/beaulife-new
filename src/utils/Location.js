export const getUserLocation = () => {
  console.log("ran");
  //   const returnPosition = (position) => {
  //     console.log(position.coords);
  //   };
  //   if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log("logged");
    console.log(position);
  });
  //   }
};
