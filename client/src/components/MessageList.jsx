// socketio-chat/client/src/components/MessageList.jsx
import React, { useEffect, useRef } from 'react';
import Message from './Message.jsx';

const MessageList = ({ messages, currentUser }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="h-full overflow-y-auto p-4 bg-gray-50">
      {messages.length === 0 ? (
        <div className="h-full flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="text-6xl mb-4">💬</div>
            <p className="text-lg font-medium">No messages yet</p>
            <p className="text-sm">Start the conversation!</p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((message) => (
            <Message
              key={message._id || message.id}
              message={message}
              isOwn={message.user?._id === currentUser?.id || message.user === currentUser?.id}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      )}
    </div>
  );
};

export default MessageList;