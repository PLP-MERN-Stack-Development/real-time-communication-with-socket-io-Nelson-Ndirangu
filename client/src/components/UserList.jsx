// socketio-chat/client/src/components/UsersList.jsx
import React from 'react';
import { useSocket } from '../context/SocketContext';

const UsersList = () => {
  const { onlineUsers } = useSocket();

  return (
    <div className="flex-1 border-t border-gray-200 p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
        Online Users ({onlineUsers.length})
      </h3>
      
      <div className="space-y-3">
        {onlineUsers.map(user => (
          <div key={user.userId} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                {user.username?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user.username || 'Unknown User'}
              </p>
              <p className="text-xs text-green-600 font-medium">Online</p>
            </div>
          </div>
        ))}
        
        {onlineUsers.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <div className="text-4xl mb-2">👥</div>
            <p className="text-sm">No users online</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersList;