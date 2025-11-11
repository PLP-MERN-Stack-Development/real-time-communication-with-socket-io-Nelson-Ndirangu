// socketio-chat/client/src/components/Message.jsx
import React from 'react';

const Message = ({ message, isOwn }) => {
  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const getUsername = () => {
    if (typeof message.user === 'object') {
      return message.user.username;
    }
    return message.username || 'Unknown User';
  };

  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xs lg:max-w-md xl:max-w-lg 2xl:max-w-xl ${
        isOwn ? 'ml-auto' : 'mr-auto'
      }`}>
        {!isOwn && (
          <div className="flex items-center space-x-2 mb-1">
            <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
              {getUsername().charAt(0).toUpperCase()}
            </div>
            <span className="text-sm font-medium text-gray-700">
              {getUsername()}
            </span>
          </div>
        )}
        
        <div className={`rounded-2xl px-4 py-2 ${
          isOwn
            ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-br-md'
            : 'bg-white border border-gray-200 text-gray-900 rounded-bl-md shadow-sm'
        }`}>
          <p className="text-sm break-words">{message.content}</p>
          <div className={`flex items-center justify-end space-x-2 mt-1 text-xs ${
            isOwn ? 'text-primary-100' : 'text-gray-500'
          }`}>
            <span>{formatTime(message.createdAt)}</span>
            {isOwn && message.readBy && message.readBy.length > 1 && (
              <span className="font-medium">✓ Read</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;