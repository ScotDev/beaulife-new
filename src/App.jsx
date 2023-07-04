import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Callback from "./pages/Callback";
import { useAuthContext } from "./auth/useAuthContext";
// import { AuthContextProvider } from './auth/AuthContext'
import { onAuthStateChanged } from "firebase/auth";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { firebaseAuth } from "./firebase";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        index
        element={
          <PublicRoute>
            <Landing />
          </PublicRoute>
        }
      />
      <Route
        path="signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />
      <Route
        path="login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="callback"
        element={
          <PublicRoute>
            <Callback />
          </PublicRoute>
        }
      />
      <Route
        path="resetpassword"
        element={
          <PublicRoute>
            <ResetPassword />
          </PublicRoute>
        }
      />
      <Route
        path="home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="settings"
        element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        }
      />
    </Route>
  )
);

function App() {
  const auth = firebaseAuth();
  const { dispatch } = useAuthContext();
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/firebase.User
  //       console.log(user.uid)
  //       dispatch({ type: "UPDATE", payload: user })
  //       // ...
  //     } else {
  //       // User is signed out
  //       // ...
  //       dispatch({ type: "SIGNOUT", payload: user })
  //       console.log("no user")
  //     }
  //   });

  // }, [])

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, user => {

  //     // This fires several times it seems
  //     dispatch({ type: "UPDATE", payload: user })
  //   })

  //   return () => unsubscribe();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // const { dispatch } = useAuthContext()

  // useEffect(() => {
  //   const unsubscribe = firebaseAuth().onAuthStateChanged(user => {

  //     // This fires several times it seems
  //     dispatch({ type: "UPDATE", payload: user })
  //   })

  //   return () => unsubscribe();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <>
      {/* <AuthContextProvider /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
