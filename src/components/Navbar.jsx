import { useAuthContext } from "../auth/useAuthContext";

import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

export default function Navbar() {
  const user = useAuthContext();
  return (
    <div className="flex items-center justify-between w-full h-fit px-12 bg-slate-100 backdrop-blur-4xl">
      <Link to="../home">
        <div>Brand Logo</div>
      </Link>
      <div className="flex flex-row items-center justify-between w-48 ">
        <Link to="../settings">
          <p className="font-semibold text-gray-900">Settings</p>
        </Link>
        <Link to="../profile">
          <div className="rounded-full ring-offset-2 ring-2 m-4 h-8 w-8 overflow-hidden">
            <img src={user?.user?.photoURL} />
          </div>
        </Link>
      </div>
    </div>
  );
}
