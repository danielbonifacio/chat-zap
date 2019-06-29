import React from 'react';
import './ChatWrapper.css';
import ChatTrigger from '../ChatTrigger/ChatTrigger';

const ChatWrapper = () => (
  <div className="chat-wrapper">
    <div className="left-side">
      <ChatTrigger/>
    </div>
    <div className="right-side">
      conversa ativa
    </div>
  </div>
);

export default ChatWrapper;