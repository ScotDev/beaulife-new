import axios from "axios";

// Add JWT check here
export const addUserToDB = async (source, userData, nickName) => {
  const newUser = {
    userName: nickName ? nickName : userData.displayName,
    email: userData.email,
    googleUid: userData.uid,
    photoUrl: userData.photoURL,
    signUpSource: source,
  };
  console.log(newUser);
  console.log(import.meta.env);
  try {
    // await axios.post("http://localhost:3333/api/register", newUser);
    await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, newUser);
  } catch (error) {
    console.log(error);
  }
};
