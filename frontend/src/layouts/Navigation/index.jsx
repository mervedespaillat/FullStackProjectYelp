import ProfileButton from "./ProfileButton.js";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navigation.css";
import { useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min.js";

const Navigation = () => {
  const sessionUser = useSelector((state) => state.session.user); // bu get post ile ayni sey mi

  const [isSignUpPage, setIsSignUpPage] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [isShopPage, setIsShopPage] = useState(false);

  const handlePageChange = (page) => {
    setIsSignUpPage(page === "signup");
    setIsLoginPage(page === "login");
  };


  const location = useLocation();

  useEffect(() => {
    // Check if the current location matches the shop page
    setIsShopPage(location.pathname.includes("/shops"));
  }, [location]);
  //   const handleClick =

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink
          className="login"
          to="/login"
          onClick={() => handlePageChange("login")}
        >
          Log In
        </NavLink>
        <NavLink
          className="signup"
          to="/signup"
          onClick={() => handlePageChange("signup")}
        >
          Sign Up
        </NavLink>
      </>
    );
  }
  // <div className="search-bar">{/* <SearchBar></SearchBar> */}</div>

  return (
    <>
      <nav className={`navbar ${isShopPage ? "navbar-white" : ""}`}>
        <div className="logo">
          <a href="/" exact>
            <p
              className={
                isSignUpPage || isLoginPage || isShopPage
                  ? "navbar-text-onchange"
                  : "navbar-text"
              }
            >
              melt
            </p>
            <i className="fab fa-yelp fa-3x" style={{ color: "red" }}></i>
          </a>
        </div>
        <div className="links">
          <ul>
            <li className={isSignUpPage || isLoginPage ? "hidden" : ""}>
              {sessionLinks}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
