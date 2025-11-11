// socketio-chat/client/src/components/MessageInput.jsx
import React from 'react';

const MessageInput = ({ message, onMessageChange, onSendMessage, disabled }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSendMessage(e);
    }
  };

  return (
    <div className="border-t border-gray-200 bg-white p-4">
      <form onSubmit={onSendMessage} className="flex space-x-4">
        <input
          type="text"
          value={message}
          onChange={onMessageChange}
          onKeyPress={handleKeyPress}
          placeholder={disabled ? "Connecting..." : "Type a message..."}
          disabled={disabled}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-500 focus:border-transparent transition disabled:bg-gray-50 disabled:cursor-not-allowed"
        />
        <button 
          type="submit" 
          disabled={!message.trim() || disabled}
          className="px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-semibold hover:from-primary-600 hover:to-purple-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          <span>Send</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default MessageInput;