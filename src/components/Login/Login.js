import React, { useState } from "react";
import "./Login.scss";

export default function Login(props) {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleLogin = () => {
    if (name.length === 0) {
      window.alert("Please enter your name.");
      return;
    }

    props.onLoginButtonPress(name);
  };

  return (
    <div className={"Login"}>
      <input
        type="text"
        className={"Login-Input"}
        value={name}
        placeholder="Enter your name here..."
        onChange={handleNameChange}
      />
      <button
        className={"Login-Button"}
        disabled={name.length === 0 ? true : false}
        onClick={handleLogin}
      >
        Enter chat room
      </button>
    </div>
  );
}
