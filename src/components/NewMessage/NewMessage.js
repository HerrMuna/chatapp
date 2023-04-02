import React, { useState } from "react";

export default function NewMessage(props) {
  const [message, setMessage] = useState("");

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    props.handleSendMessage(message);
    setMessage("");
  };

  return (
    <div className="NewMessage">
      <input
        type="text"
        value={message}
        placeholder="Enter your message here..."
        onChange={handleChangeMessage}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSendMessage();
          }
        }}
      ></input>
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}
