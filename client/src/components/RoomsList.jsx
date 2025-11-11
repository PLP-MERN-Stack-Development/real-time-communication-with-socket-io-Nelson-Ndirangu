// socketio-chat/client/src/components/RoomsList.jsx
import React, { useState } from 'react';

const RoomsList = ({ activeRoom, onRoomChange }) => {
  const [rooms] = useState([
    { id: 'general', name: 'General Chat', description: 'Main public room', icon: '💬' },
    { id: 'random', name: 'Random', description: 'Casual conversations', icon: '🎲' },
    { id: 'tech', name: 'Technology', description: 'Tech discussions', icon: '💻' }
  ]);

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Chat Rooms</h3>
      
      <div className="space-y-2">
        {rooms.map(room => (
          <button
            key={room.id}
            onClick={() => onRoomChange(room.id)}
            className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
              activeRoom === room.id
                ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg transform scale-105'
                : 'bg-white border border-gray-200 text-gray-700 hover:border-primary-300 hover:shadow-md'
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{room.icon}</span>
              <div className="flex-1 min-w-0">
                <h4 className={`font-semibold truncate ${
                  activeRoom === room.id ? 'text-white' : 'text-gray-900'
                }`}>
                  {room.name}
                </h4>
                <p className={`text-sm truncate ${
                  activeRoom === room.id ? 'text-primary-100' : 'text-gray-600'
                }`}>
                  {room.description}
                </p>
              </div>
              {activeRoom === room.id && (
                <div className="w-2 h-2 bg-white rounded-full"></div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoomsList;