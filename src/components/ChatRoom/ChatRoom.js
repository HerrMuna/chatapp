import React, { useEffect, useState, useRef } from 'react';
import './ChatRoom.scss';
import MessageInput from './MessageInput/MessageInput';
import Message from './Message/Message';

const ROOM_NAME = 'group_chat';

export default function ChatRoom(props) {
  const [messages, setMessages] = useState([]);

  const droneRef = useRef(null);
  const roomRef = useRef(null);

  useEffect(() => {
    //component showed on screen (mount)

    //connecting to Scaledrone chat channel
    droneRef.current = new window.Scaledrone('if2Ih722DtrxjP2F');

    //subscribing to room with id ROOM_NAME
    roomRef.current = droneRef.current.subscribe(ROOM_NAME);

    roomRef.current.on('open', onConnection);
  }, []);

  const onConnection = (error) => {
    if (error) {
      //show connection error alert on screen and logout user
      window.alert('There was an error connecting to Scaledrone!');
      props.handleLogout();
    } else {
      //after sucessfull connection
      //we have to subscribe to message event in our chat room
      //when there is new message in room call function(callback) onNewMessage
      roomRef.current.on('message', onNewMessage);
    }
  };

  const onNewMessage = (newMessageObject) => {
    //function that accept argument newMessageObject which is object received from Scaledrone

    //after receiving new message we have to set it to state of this component
    //to be able to update ui and show new message on screen

    setMessages((currentMessages) => {
      //currentMessages represent messages that were visible on screen before new newMessageObject
      //
      // [
      //   {id: "lakjsdlkjak", data: {user: {name: "ivan", color: "red"}, text: "message text"}},
      //   {id: "asdasddadad", data: {user: {name: "ivan", color: "red"}, text: "message text"}},
      //   {id: "asdadadddsa", data: {user: {name: "ivan", color: "red"}, text: "message text"}}
      // ]

      return [...currentMessages, newMessageObject];
    });
  };

  const handleSendMessage = (message) => {
    //function recives arugment message which is string

    //we cannot send message if we are not connected to Scaledrone
    if (!droneRef.current) {
      return;
    }

    //we call publish function of Scaledrone reference to send new message to Scaledrone
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
        {messages.map((item) => (
          <Message
            key={item.id}
            sender={item.data.user}
            isMyMessage={
              item.data.user.name === props.user.name &&
              item.data.user.color === props.user.color
            }
            text={item.data.text}
          />
        ))}
      </div>
      <div className="ChatRoom-ActionBox">
        <MessageInput handleSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
