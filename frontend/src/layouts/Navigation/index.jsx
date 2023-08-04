import ProfileButton from "./ProfileButton.js";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navigation.css";
import { useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min.js";
import SearchBar from "../../components/SearchBar/SearchBar.js";

const Navigation = () => {
  const sessionUser = useSelector((state) => state.session.user); // bu get post ile ayni sey mi
  const location = useLocation();

  const path = location.pathname;

  const [isSignUpPage, setIsSignUpPage] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [isShopPage, setIsShopPage] = useState(false);

  const handlePageChange = (page) => {
    setIsSignUpPage(page === "signup");
    setIsLoginPage(page === "login");
  };

  useEffect(() => {
    setIsShopPage(location.pathname.includes("/shops"));
  }, [location]);

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <>
        <div id="left-nav">
          <div className="logo">
            <a href="/">
              <p
                className={
                  path === "/" ? "navbar-text" : "navbar-text-onchange"
                }
              >
                melt
              </p>
              <i className="fab fa-yelp fa-3x" style={{ color: "red" }}></i>
            </a>
          </div>
        </div>

        <div className="middle nav search-items">
          <SearchBar></SearchBar>
        </div>
        <div id="right-nav">
          <div id="user">
            <ProfileButton user={sessionUser} />
          </div>
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div id="left-nav">
          <div className="logo">
            <a href="/">
              <p
                className={
                  path === "/login" || path === "/signup" || isShopPage
                    ? "navbar-text-onchange"
                    : "navbar-text"
                }
              >
                melt
              </p>
              <i className="fab fa-yelp fa-3x" style={{ color: "red" }}></i>
            </a>
          </div>
        </div>

        <div className="middle nav search-items">
          <SearchBar></SearchBar>
        </div>

        <div
          id="right-nav"
          style={{
            display: path === "/login" || path === "/signup" ? "none" : "flex",
          }}
        >
          <NavLink className="login" to="/login">
            Log In
          </NavLink>
          <NavLink className="signup" to="/signup">
            Sign Up
          </NavLink>
        </div>
      </>
    );
  }

  return <header>{sessionLinks}</header>;
};

export default Navigation;
