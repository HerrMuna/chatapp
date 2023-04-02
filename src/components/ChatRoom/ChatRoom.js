import React, { useEffect, useState, useRef } from "react";
import "./ChatRoom.scss";
import NewMessage from "../NewMessage/NewMessage";

const ROOM_NAME = "group_chat";

export default function ChatRoom(props) {
  const [messages, setMessages] = useState([]);

  const droneRef = useRef(null);

  useEffect(() => {
    //component showed on screen

    droneRef.current = new window.Scaledrone("if2Ih722DtrxjP2F");

    const room = droneRef.current.subscribe(ROOM_NAME);

    room.on("message", (message) => {
      // Received a message sent to the room

      setMessages((messages) => {
        if (!messages.some((item) => item.id === message.id)) {
          return [...messages, message];
        } else {
          return messages;
        }
      });
    });
  }, []);

  const handleSendMessage = (message) => {
    //connect to  scaledrone and send message

    if (!droneRef.current) {
      return;
    }

    droneRef.current.publish({
      room: ROOM_NAME,
      message: {
        user: props.user,
        text: message,
      },
    });
  };

  return (
    <div className="ChatRoom">
      <div className="ChatRoom-Messages">
        {messages.map((item, index) => (
          <div key={item.id} className="ChatRoom-Messages-Item">
            <div>SENDER: {item.data.user.name}</div>
            <p>CONTENT: {item.data.text}</p>
            <div>DATE : {new Date(item.timestamp).toLocaleDateString()}</div>
          </div>
        ))}
      </div>
      <div className="ChatRoom-ActionBox">
        <NewMessage handleSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
