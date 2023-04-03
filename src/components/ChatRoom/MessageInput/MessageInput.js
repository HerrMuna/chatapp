import React, { useState } from 'react';
import './MessageInput.scss';

export default function MessageInput(props) {
  const [message, setMessage] = useState('');

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    props.handleSendMessage(message);
    setMessage('');
  };

  return (
    <div className="MessageInput">
      <input
        className="MessageInput-Input"
        type="text"
        value={message}
        onChange={handleChangeMessage}
        placeholder="Enter your message here..."
        onKeyDown={(e) => {
          if (e.key === 'Enter' && message.length > 0) {
            handleSendMessage();
          }
        }}
      />
      <button
        className={'MessageInput-Button'}
        onClick={handleSendMessage}
        disabled={message.length === 0}
      >
        Send
      </button>
    </div>
  );
}
