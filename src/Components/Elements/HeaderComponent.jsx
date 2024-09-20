import { useState, useContext } from "react";
import { Button } from "@/Components/ui/button";
import { Link } from "react-router-dom";
import { LogoImgURL } from "@/utils/constants";
import useIsOnline from "@/utils/useIsOnline";
import { AlertOffline } from ".";
import userContext from "@/utils/userContext";

const Title = () => (
  <Link href="/">
    <img className="w-[80px] rounded-full" src={LogoImgURL} alt="logo" />
  </Link>
);
export default function HeaderComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const online = useIsOnline();
  const { user } = useContext(userContext);

  return (
    <div className="border-[3px] lg:flex lg:justify-between lg:items-center   p-[15px] rounded-[20px] m-[50px] items-center ">
      <div className="flex justify-between lg:block ">
        <Title />
        <button
          className="text-3xl md:hidden p-2"
          onClick={() => setisOpen(!isOpen)}
        >
          {isOpen ? "X" : "☰"}
        </button>{" "}
      </div>

      <div
        className={`my-2 nav-items md:[ ${
          isOpen ? "block" : "hidden"
        } ] md:flex`}
      >
        <ul className="   md:flex ">
          <li className="px-[20px] text-xl font-semibold py-1 text-center hover:bg-orange-400  w-full rounded bg-orange-200 m-1">
            <Link to="/">Home</Link>
          </li>
          <li className="px-[20px] text-xl font-semibold py-1 text-center  w-full  hover:bg-orange-400 rounded bg-orange-200 m-1 ">
            <Link to="/about">About</Link>
          </li>
          <li className="px-[20px] text-xl font-semibold py-1 text-center  w-full  hover:bg-orange-400 rounded bg-orange-200 m-1 ">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-[20px] text-xl font-semibold py-1 text-center  w-full  hover:bg-orange-400 rounded bg-orange-200 m-1 ">
            <Link to="/">Cart</Link>
          </li>
          <li className="px-[20px] text-xl font-semibold py-1 text-center  w-full  hover:bg-orange-400 rounded bg-orange-200 m-1 ">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-[20px] text-xl font-semibold py-1 text-center  w-full  ">
            {online ? null : <AlertOffline />}
          </li>
          <li>{user.name}</li>
          <li className="px-[20px] text-xl font-semibold py-1 text-center  w-full   ">
            {isLoggedIn ? (
              <Button
                className="rounded-3xl w-50"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </Button>
            ) : (
              <Button
                className="rounded-3xl w-50"
                onClick={() => setIsLoggedIn(true)}
              >
                Login
              </Button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
