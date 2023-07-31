import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./profileButton.css";
import { useHistory } from "react-router-dom";

const ProfileButton = ({ user }) => {
  const nav = useHistory()
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  // const openMenu = () => {
  //   console.log("openMenu called. showMenu:", showMenu);
  //       if (showMenu) return;
  //   setShowMenu(true);
  // };
  const openMenu = (e) => {
    e.stopPropagation(); // Prevent the event from bubbling up
    setShowMenu((prevShowMenu) => !prevShowMenu); // Toggle the showMenu state
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
    nav.push('/')
  };

  return (
    <>
      <div className="dropdown">
        <button onClick={openMenu} className="profile-button">
          Profile
        </button>

        {showMenu && (
            <ul className="profile-dropdown">
              <li>{user.firstName}</li>
              <li className="logout">
                <button onClick={logout} className="logout-btn">
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  Log Out
                </button>
              </li>
            </ul>
        
        )}
      </div>
    </>
  );
};

export default ProfileButton;
