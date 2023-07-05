import { useEffect, useState } from "react";
import { useAuthContext } from "../auth/useAuthContext";
import { BsCreditCard } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { signOutOfFireBaseAuth } from "../firebase";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

export default function Profile() {
  const [subStatus, setSubStatus] = useState("");
  const navigate = useNavigate();
  const user = useAuthContext();

  useEffect(() => {
    console.log("useeff");

    const getUserDetails = async () => {
      //   const token = await getToken();
      //   console.log(user.user.stsTokenManager);
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.user.stsTokenManager.accessToken,
      };

      const data = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/user/${user?.user?.uid}`,
        // {},
        {
          headers: headers,
        }
      );
      return data;
    };

    getUserDetails().then((data) => setSubStatus(data.data.subscription));
  }, []);

  const handleSignOut = () => {
    signOutOfFireBaseAuth().then(() => {
      navigate(0);
    });
  };

  return (
    <>
      <Navbar />
      <main className="container">
        <div className="flex items-center flex-col mx-auto pt-4">
          <div className="flex items-center mb-6 min-w-fit w-full">
            <img
              className="rounded-full ring-offset-2 ring-2 h-12 w-12"
              src={user?.user?.photoURL || ""}
            />
            <div className="pl-4">
              <h3 className="font-medium text-lg">
                {user?.user?.displayName || "Username"}
              </h3>
              <p className="text-gray-700 mt-2">
                {user?.user?.email || "email@test.com"}
              </p>
            </div>
          </div>
          <div className="flex items-center mb-6 min-w-fit w-full">
            <BsCreditCard className="h-12 w-10 mr-2" />
            <div className="pl-4">
              <h3 className="font-medium text-lg">Subscription status</h3>
              <p className="text-gray-700 mt-2 capitalize">
                {subStatus || "Inactive"}
              </p>
            </div>
          </div>
          <Button type="button" onClick={handleSignOut}>
            Sign out
          </Button>
        </div>
      </main>
    </>
  );
}
