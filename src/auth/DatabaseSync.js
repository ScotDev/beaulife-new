import axios from "axios";

export const addUserToDB = async (source, userData, nickName) => {
  const newUser = {
    userName: nickName ? nickName : userData.displayName,
    email: userData.email,
    googleUid: userData.uid,
    photoUrl: userData.photoURL,
    signUpSource: source,
  };
  console.log(newUser);
  try {
    await axios.post("http://localhost:3333/api/register", newUser);
  } catch (error) {
    console.log(error);
  }
};
