import React, { useState, useEffect } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import "./Navbar.css";
import CartWidget from "../CartWidget";
import { Link, NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import UserLoggedIn from "./UserLoggedIn";

function Navbar() {
  const [clicked, setClicked] = useState(true);
  const [user, setUser] = useState(() => auth.currentUser);
  const [init, setInit] = useState(true);

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const userListener = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }

      if (init) {
        setInit(false);
      }
    });

    return userListener;
  }, [init]);

  return (
    <nav className="NavbarItems">
      <Link to="/">
        <h1 className="navbar-logo">
          Selecta
          <i className="fa fa-heart"></i>
        </h1>
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={!clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={!clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink className={item.cName} to={item.url}>
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <DropdownMenu />
      <CartWidget />
      <Button onClick={signInWithGoogle}>Sign Up</Button>
      {user ? <UserLoggedIn /> : null}
    </nav>
  );
}

export default Navbar;
