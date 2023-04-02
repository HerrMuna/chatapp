import React from "react";
import "./Header.scss";

export default function Header(props) {
  const handleLogout = () => {
    props.handleLogout();
  };

  return (
    <div className={"Header"}>
      <h1>Chat App</h1>
      {props.isUserLoggedIn && (
        <button className="Header-Button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
}
