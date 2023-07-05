import { useAuthContext } from "../auth/useAuthContext";

import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export default function Navbar() {
  const user = useAuthContext();
  return (
    <div className="flex items-center justify-between w-full h-fit px-12 text-gray-800 backdrop-blur-4xl">
      <Link to="../home">
        <div>Brand Logo</div>
      </Link>
      <div className="flex flex-row items-center justify-between w-48 ">
        <BsSearch />
        <Link to="../settings">
          <p className="font-semibold">Settings</p>
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
