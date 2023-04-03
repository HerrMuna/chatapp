import React, { useState } from 'react';
import './App.scss';
import Login from './components/Login/Login';
import ChatRoom from './components/ChatRoom/ChatRoom';
import Header from './components/Header/Header';

const generateRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function App() {
  const [user, setUser] = useState(null);

  const logUserIn = (name) => {
    setUser({ name: name, color: generateRandomColor() });
  };

  const logUserOut = () => {
    setUser(null);
  };

  return (
    <div className={'App'}>
      <Header handleLogout={logUserOut} user={user} />

      <div className={'Main'}>
        {user ? (
          <ChatRoom user={user} handleLogout={logUserOut} />
        ) : (
          <Login onLoginButtonPress={logUserIn} />
        )}
      </div>
    </div>
  );
}

export default App;
