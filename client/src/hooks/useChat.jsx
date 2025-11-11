// socketio-chat/client/src/hooks/useChat.js
import { useState, useEffect, useRef } from 'react';
import { useSocket } from '../context/SocketContext';

export const useChat = (roomId) => {
  const { socket } = useSocket();
  const [messages, setMessages] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    if (!socket) return;

    const onConnect = () => setIsConnected(true);
    const onDisconnect = () => setIsConnected(false);
    const onReceiveMessage = (message) => {
      setMessages(prev => [...prev, message]);
    };
    const onRoomHistory = (data) => {
      if (data.roomId === roomId) {
        setMessages(data.messages);
      }
    };
    const onUserTyping = (data) => {
      setTypingUsers(prev => {
        if (!prev.includes(data.username)) {
          return [...prev, data.username];
        }
        return prev;
      });
    };
    const onUserStopTyping = (data) => {
      setTypingUsers(prev => prev.filter(user => user !== data.username));
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('receive_message', onReceiveMessage);
    socket.on('room_history', onRoomHistory);
    socket.on('user_typing', onUserTyping);
    socket.on('user_stop_typing', onUserStopTyping);

    // Join room when roomId changes
    if (roomId) {
      socket.emit('join_room', roomId);
    }

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('receive_message', onReceiveMessage);
      socket.off('room_history', onRoomHistory);
      socket.off('user_typing', onUserTyping);
      socket.off('user_stop_typing', onUserStopTyping);
    };
  }, [socket, roomId]);

  const sendMessage = (content) => {
    if (socket && roomId && content.trim()) {
      socket.emit('send_message', {
        roomId,
        content: content.trim()
      });
    }
  };

  const startTyping = () => {
    if (socket && roomId) {
      socket.emit('typing_start', roomId);
      
      clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = setTimeout(() => {
        stopTyping();
      }, 3000);
    }
  };

  const stopTyping = () => {
    if (socket && roomId) {
      socket.emit('typing_stop', roomId);
    }
  };

  const markAsRead = (messageId) => {
    if (socket) {
      socket.emit('mark_read', messageId);
    }
  };

  return {
    messages,
    sendMessage,
    typingUsers,
    startTyping,
    stopTyping,
    markAsRead,
    isConnected
  };
};