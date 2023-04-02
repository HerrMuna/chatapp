import React, { useEffect, useRef, useState } from "react";
import "./App.scss";
import Login from "./components/Login/Login";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import Header from "./components/Header/Header";

function App() {
  const [user, setUser] = useState();

  const logUserIn = (name) => {
    setUser({ name: name, color: "red" });
  };

  const logUserOut = () => {
    setUser(null);
  };

  return (
    <div className={"App"}>
      <Header handleLogout={logUserOut} isUserLoggedIn={user ? true : false} />

      <div className={"Main"}>
        {user ? (
          <ChatRoom user={user} />
        ) : (
          <Login onLoginButtonPress={logUserIn} />
        )}
      </div>
    </div>
  );
}

export default App;
