// socketio-chat/client/src/context/SocketContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useAuth } from './AuthContext';

const SocketContext = createContext(null);

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const { user, token } = useAuth();

  useEffect(() => {
    if (user && token) {
      const newSocket = io('http://localhost:5000', {
        auth: {
          token: token
        }
      });

      newSocket.on('connect', () => {
        console.log('Connected to server');
      });

      newSocket.on('users_online', (users) => {
        setOnlineUsers(users);
      });

      newSocket.on('user_offline', (userData) => {
        setOnlineUsers(prev => prev.filter(u => u.userId !== userData.userId));
      });

      newSocket.on('new_notification', (notification) => {
        setNotifications(prev => [...prev, { ...notification, id: Date.now() }]);
      });

      setSocket(newSocket);

      return () => {
        newSocket.close();
      };
    }
  }, [user, token]);

  const clearNotifications = () => setNotifications([]);

  const value = {
    socket,
    onlineUsers,
    notifications,
    clearNotifications
  };

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  );
};