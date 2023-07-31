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
  // if (sessionUser) {
  //   sessionLinks = <ProfileButton user={sessionUser} />;
  // } else {
  //   sessionLinks = (
  //     <>
  //       <div
  //         id="right-nav"
  //         style={{
  //           display: path === "/login" || path === "/signup" ? "none" : "flex",
  //         }}
  //       >
  //         <NavLink
  //           className="login"
  //           to="/login"
  //           onClick={() => handlePageChange("login")}
  //         >
  //           Log In
  //         </NavLink>
  //         <NavLink
  //           className="signup"
  //           to="/signup"
  //           onClick={() => handlePageChange("signup")}
  //         >
  //           Sign Up
  //         </NavLink>
  //       </div>
  //     </>
  //   );
  // }

  // return (
  //   <>
  //     <nav className={`navbar ${isShopPage ? "navbar-white" : ""}`}>
  //       <div className="logo">
  //         <a href="/" exact>
  //           <p
  //             className={
  //               path === "/login" || path === "/signup" || isShopPage
  //                 ? "navbar-text-onchange"
  //                 : "navbar-text"
  //             }
  //           >
  //             melt
  //           </p>
  //           <i className="fab fa-yelp fa-3x" style={{ color: "red" }}></i>
  //         </a>
  //         <div className="search-items">
  //           <SearchBar></SearchBar>
  //         </div>
  //       </div>
  //       <div className="links">
  //         <ul>
  //           <li className={isSignUpPage || isLoginPage ? "hidden" : ""}>
  //             {sessionLinks}
  //           </li>
  //         </ul>
  //       </div>
  //     </nav>
  //   </>
  // );
  if (sessionUser) {
    sessionLinks = (  
        <>
          <div id="left-nav">
        <div className="logo">
         <a href="/" exact="true">
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
          <div id="right-nav">
            <div id="user">
              <ProfileButton user={sessionUser} />
            </div>
          </div>
      
        </>
      )
    } else {
      sessionLinks = (
        <>
         <div id="left-nav">
        <div className="logo">
         <a href="/" exact="true">
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

          <div id="right-nav" style={{ display: (path === '/login' || path === '/signup') ? 'none' : 'flex' }}>
            <NavLink className="login" to="/login">Log In</NavLink>
            <NavLink className="signup"to="/signup">Sign Up</NavLink>
          </div>
  
        </>

      );
    }

  return (
      <header>
            {sessionLinks}           
      </header>
  );
};

export default Navigation;
