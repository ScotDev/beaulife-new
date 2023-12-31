import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Landing() {
  return (
    <>
      <div className="background dark:background__dark"></div>
      <main className="flex flex-col items-center pt-24 h-screen dark:text-gray-100">
        <h1 className="text-5xl font-bold font-display">beaulife.</h1>
        <h3 className="text-lg font-medium pt-4 ">Weather made simple</h3>

        <div className="rounded-t-[32px] h-full w-screen mt-14 flex flex-col items-center bg-gradient-to-b from-gray-600 to-gray-800 ">
          <div className="flex flex-col mt-36 w-[315px] min-h-[116px] justify-between items-center">
            <Link className="w-full" to="login">
              <Button primary type="button">
                Log in
              </Button>
            </Link>
            <Link className="w-full" to="signup">
              <Button secondary type="button">
                Sign up
              </Button>
            </Link>

            {/* <a href='#' className='text-center max-w-fit mt-10 px-4 text-md hover:cursor-pointer underline decoration-sky-500'>Forgot password?</a> */}
          </div>
        </div>
      </main>
    </>
  );
}
