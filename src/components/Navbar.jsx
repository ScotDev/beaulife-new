import { useAuthContext } from "../auth/useAuthContext";

import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Search from "./Search";

export default function Navbar() {
  const user = useAuthContext();
  return (
    <div className="bg-transparent w-screen">
      <div className="flex items-center justify-between w-full h-fit lg:pt-4 px-6 lg:pl-4 lg:pr-0 mx-auto max-w-screen-xl text-gray-800 ">
        <Link to="../home">
          <div>
            <p className="font-bold text-xl underline underline-offset-2 decoration-purple-600 font-display">
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
              <img src={user?.user?.photoURL} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
