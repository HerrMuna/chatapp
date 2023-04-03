import React from 'react';
import './Message.scss';

export default function Message(props) {
  return (
    <div className={`Message ${props.isMyMessage ? 'Message_my' : ''}`}>
      <div className="Message-CircleContainer">
        <div
          className="Message-CircleContainer-Circle"
          style={{ backgroundColor: props.sender.color }}
        >
          <span className="Message-CircleContainer-Circle-Letter">
            {props.sender.name[0].toUpperCase()}
          </span>
        </div>
      </div>

      <div
        className={`Message-ContentContainer ${
          props.isMyMessage
            ? 'Message-ContentContainer_floatRight'
            : 'Message-ContentContainer_floatLeft'
        }`}
      >
        <div className="Message-ContentContainer-Sender">
          {props.sender.name}
        </div>
        <div className="Message-ContentContainer-Text">{props.text}</div>
      </div>
    </div>
  );
}
