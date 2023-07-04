import { useAuthContext } from "../auth/useAuthContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const user = useAuthContext();

  if (!user.user) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {children}
      {/* <p>PrivateRoute</p> */}
      {/* <p>{user.user.displayName || "hello"}</p> */}
    </>
  );
}
