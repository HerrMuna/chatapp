import React, { useEffect, useState } from 'react';
import './Login.scss';

export default function Login(props) {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleLogin = () => {
    if (name.length === 0) {
      window.alert('Please enter your name.');
      return;
    }

    props.onLoginButtonPress(name);
  };

  return (
    <div className={'Login'}>
      <div className="Login-Content">
        <input
          type="text"
          className={'Login-Content-Input'}
          value={name}
          placeholder="Enter your name here..."
          onChange={handleNameChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && name.length > 0) {
              handleLogin();
            }
          }}
        />
        <button
          className={'Login-Content-Button'}
          disabled={name.length === 0 ? true : false}
          onClick={handleLogin}
        >
          Enter chat room
        </button>
      </div>
    </div>
  );
}
