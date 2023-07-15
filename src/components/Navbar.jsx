import { useAuthContext } from "../auth/useAuthContext";

import { Link } from "react-router-dom";
import Search from "./Search";

const extractInitials = (displayName, email) => {
  if (displayName && displayName.includes(" ")) {
    const words = displayName.split(" ");
    const firstInitial = words[0][0];
    const lastInitial = words[words.length - 1][0];
    return `${firstInitial}${lastInitial}`;
  } else {
    return email.charAt(0);
  }
};

export default function Navbar() {
  const user = useAuthContext();

  const userInitials = extractInitials(
    user?.user?.displayName,
    user?.user?.email
  );
  return (
    <div className="bg-transparent w-screen">
      <div className="flex items-center justify-between w-full h-fit lg:pt-4 pl-6 lg:pl-4 lg:pr-0 mx-auto max-w-screen-xl text-gray-800 dark:text-gray-300">
        <Link to="../home">
          <div>
            <p className="font-bold text-base lg:text-xl underline underline-offset-2 decoration-purple-600 font-display">
              beaulife
            </p>
          </div>
        </Link>

        <div className="flex flex-row items-center justify-between w-full md:w-2/5 px-4 ">
          <Search />
          {/* <div className="h-6 w-6 mr-12">
            <BsSearch className="w-full h-full" />
          </div> */}
          <Link to="../profile">
            <div className="rounded-full ring-offset-2 ring-purple-300 ring-2 m-4 h-8 w-8 overflow-hidden">
              {user?.user?.photoURL ? (
                <img src={user.user.photoURL} />
              ) : (
                <div className="w-full h-full grid place-items-center text-center">
                  <p className="text-sm text-gray-100 capitalize">
                    {userInitials}
                  </p>
                </div>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
