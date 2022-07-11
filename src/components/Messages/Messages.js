import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

// const chatMessages = document.querySelector('.chat-messages');
//   // Scroll down
//   chatMessages.scrollTop = chatMessages.scrollHeight;

import Message from './Message/Message';

import './Messages.css';

const Messages = ({ messages, name }) => (
    <ScrollToBottom className="messages">
       {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)} 
    </ScrollToBottom>
)

export default Messages;