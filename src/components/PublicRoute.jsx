// If a user is already logged in, they should bypass the child route and go straight to home

import { useAuthContext } from "../auth/useAuthContext";
import { Navigate } from "react-router-dom";
export default function PublicRoute({ children }) {
  const user = useAuthContext();

  if (user.user) {
    return <Navigate to="/home" replace />;
  }

  return (
    <>
      {children}
      {/* <p>Public</p> */}
    </>
  );
}
