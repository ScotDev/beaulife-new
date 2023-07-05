import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCreditCard } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuthContext } from "../auth/useAuthContext";

import axios from "axios";

export default function Settings() {
  // const [subStatus, setSubStatus] = useState("");
  const user = useAuthContext();

  //   const getToken = async () => {
  //     return await user?.user?.getIdToken(true);
  //   };

  // useEffect(() => {
  //   console.log("useeff");

  //   const getUserDetails = async () => {
  //     //   const token = await getToken();
  //     //   console.log(user.user.stsTokenManager);
  //     const headers = {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + user.user.stsTokenManager.accessToken,
  //     };

  //     const data = await axios.get(
  //       `${import.meta.env.VITE_API_URL}/api/user/${user?.user?.uid}`,
  //       // {},
  //       {
  //         headers: headers,
  //       }
  //     );
  //     return data;
  //   };

  //   getUserDetails().then((data) => setSubStatus(data.data.subscription));
  // }, []);

  return (
    <div className="flex items-center flex-col mx-auto pt-4 w-[315px]">
      <nav className="flex items-center justify-between w-full">
        <Link to="../home">
          <GiHamburgerMenu className="h-12 w-8" />
        </Link>
        <p>{user?.user?.displayName || "Username"}</p>
      </nav>

      <main className="container">
        <div>Language</div>
        <div>Temperature units</div>
        <div>Speed units</div>
        <div>Time format</div>
      </main>
    </div>
  );
}
