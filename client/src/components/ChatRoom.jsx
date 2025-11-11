// socketio-chat/client/src/components/ChatRoom.jsx
import React, { useState } from 'react';
import { useChat } from '../hooks/useChat';
import { useAuth } from '../context/AuthContext';
import MessageList from './MessageList';
import MessageInput from '../components/MessageInput';
import TypingIndicator from '../components/TypingIndicator';

const ChatRoom = ({ roomId }) => {
  const [message, setMessage] = useState('');
  const { user } = useAuth();
  const { 
    messages, 
    sendMessage, 
    typingUsers, 
    startTyping, 
    stopTyping,
    isConnected 
  } = useChat(roomId);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
      stopTyping();
    }
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
    if (e.target.value.trim()) {
      startTyping();
    } else {
      stopTyping();
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Chat Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">#{roomId}</h2>
            <p className="text-sm text-gray-600">
              {roomId === 'general' ? 'General discussion room' : 
               roomId === 'random' ? 'Casual conversations' : 
               'Technology discussions'}
            </p>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            isConnected 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {isConnected ? 'Connected' : 'Disconnected'}
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-hidden">
        <MessageList messages={messages} currentUser={user} />
      </div>

      {/* Typing Indicator */}
      <TypingIndicator typingUsers={typingUsers} />

      {/* Message Input */}
      <MessageInput
        message={message}
        onMessageChange={handleInputChange}
        onSendMessage={handleSendMessage}
        disabled={!isConnected}
      />
    </div>
  );
};

export default ChatRoom;