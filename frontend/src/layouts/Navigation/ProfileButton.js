import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./profileButton.css";

const ProfileButton = ({ user }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };
    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <div className="dropdown">
        <button onClick={openMenu} className="profile-button">
          Profile
        </button>

        {showMenu && (
          <div className="dropdown-content">
            <ul className="profile-dropdown">
              <li>
                <a href="#">
                  <i className="fa-solid fa-ice-cream" style={{ color: "red" }}>
                    {" "}
                    About Me
                  </i>
                </a>
              </li>
              <li>
                <button onClick={logout}>
                  <i className="fa-sharp fa-regular fa-arrow-right-from-bracket"></i>
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileButton;
