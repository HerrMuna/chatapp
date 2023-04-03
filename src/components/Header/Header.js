import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

export default function Header(props) {
  const handleLogout = () => {
    props.handleLogout();
  };

  return (
    <div className={'Header'}>
      <div className="Header-Content">
        <h1 className="Header-Content-Title">Chat App</h1>
        {props.user && (
          <div className="Header-Content-User">
            <div style={{ color: props.user.color }}>{props.user.name}</div>
            <button
              className="Header-Content-User-Button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.object,
  handleLogout: PropTypes.func,
};
