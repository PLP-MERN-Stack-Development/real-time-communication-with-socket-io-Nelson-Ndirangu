// socketio-chat/client/src/pages/Chat.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useSocket } from '../context/SocketContext';
import ChatRoom from '../components/ChatRoom';
import UsersList from '../components/UserList';
import RoomsList from '../components/RoomsList';
import Notifications from '../components/Notifications';

const Chat = () => {
  const { user, logout } = useAuth();
  const { notifications, clearNotifications } = useSocket();
  const [activeRoom, setActiveRoom] = useState('general');
  const [showNotifications, setShowNotifications] = useState(false);

  if (!user) {
    return null;
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">Socket.io Chat</h1>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-600 font-medium">Live</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowNotifications(true)}
              className="relative px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition font-medium"
            >
              Notifications
              {notifications.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications.length}
                </span>
              )}
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                {user.username.charAt(0).toUpperCase()}
              </div>
              <span className="text-gray-700 font-medium">Welcome, {user.username}</span>
            </div>
            
            <button 
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          <RoomsList 
            activeRoom={activeRoom} 
            onRoomChange={setActiveRoom} 
          />
          <UsersList />
        </div>

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col">
          <ChatRoom roomId={activeRoom} />
        </main>
      </div>

      {/* Notifications Panel */}
      {showNotifications && (
        <Notifications 
          notifications={notifications}
          onClose={() => {
            setShowNotifications(false);
            clearNotifications();
          }}
        />
      )}
    </div>
  );
};

export default Chat;