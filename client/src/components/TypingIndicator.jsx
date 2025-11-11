// socketio-chat/client/src/components/TypingIndicator.jsx
import React from 'react';

const TypingIndicator = ({ typingUsers }) => {
  if (typingUsers.length === 0) {
    return null;
  }

  return (
    <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
      <div className="flex items-center space-x-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-200 max-w-fit">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
        <span className="text-sm text-gray-600 font-medium">
          {typingUsers.length === 1 
            ? `${typingUsers[0]} is typing...`
            : `${typingUsers.length} people are typing...`
          }
        </span>
      </div>
    </div>
  );
};

export default TypingIndicator;