import { useAuthContext } from "../auth/useAuthContext";

import { Link } from "react-router-dom";
import { BsSearch, BsGear } from "react-icons/bs";

export default function Navbar() {
  const user = useAuthContext();
  return (
    <div className="flex items-center justify-between w-full h-fit px-12 lg:pt-4 text-gray-800 backdrop-blur-4xl">
      <Link to="../home">
        <div>
          <p className="font-semibold">Brand</p>
        </div>
      </Link>
      <div className="flex flex-row items-center justify-between w-48 ">
        <div className="h-6 w-6">
          <BsSearch className="w-full h-full" />
        </div>
        <Link to="../settings">
          <div className="h-6 w-6">
            <BsGear className="w-full h-full" />
          </div>
        </Link>
        <Link to="../profile">
          <div className="rounded-full ring-offset-2 ring-purple-300 ring-2 m-4 h-8 w-8 overflow-hidden">
            <img src={user?.user?.photoURL} />
          </div>
        </Link>
      </div>
    </div>
  );
}
