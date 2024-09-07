import "../Styles/HeaderComponent.css";
import { useState } from "react";
import { Button } from "@/Components/ui/button";
import {Link} from "react-router-dom"
import { LogoImgURL } from "@/utils/constants";
import useIsOnline from "@/utils/useIsOnline";
import { AlertOffline } from ".";

const Title = () => (
  <Link href="/">
    <img
      className="logo"
      src= {LogoImgURL}
      alt="logo"
    />
  </Link>
);
export default function HeaderComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const online = useIsOnline()

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/'>Cart</Link></li>
          <li><Link to='/instamart'>Instamart</Link></li>
          <li>
            {online ? null : <AlertOffline />}
          </li>
          <li>
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
