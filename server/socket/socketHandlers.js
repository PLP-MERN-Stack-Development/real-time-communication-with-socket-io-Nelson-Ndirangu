// socketio-chat/server/socket/socketHandlers.js
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Message from '../models/Message.js';
import Room from '../models/Room.js';

const connectedUsers = new Map();
const userRooms = new Map();
const typingUsers = new Map();

export default function socketHandlers(io) {
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth.token;
      if (!token) {
        return next(new Error('Authentication error'));
      }
      
      const decoded = jwt.verify(token, 'your_jwt_secret');
      const user = await User.findById(decoded.userId);
      
      if (!user) {
        return next(new Error('User not found'));
      }
      
      socket.userId = user._id;
      socket.username = user.username;
      next();
    } catch (error) {
      next(new Error('Authentication error'));
    }
  });

  io.on('connection', (socket) => {
    console.log(`User ${socket.username} connected`);
    
    // Add user to connected users
    connectedUsers.set(socket.userId.toString(), {
      socketId: socket.id,
      username: socket.username,
      userId: socket.userId,
      lastSeen: new Date()
    });

    // Notify all users about online users
    io.emit('users_online', Array.from(connectedUsers.values()));

    // Join user to their personal room and general room
    socket.join(socket.userId.toString());
    socket.join('general');
    userRooms.set(socket.userId.toString(), ['general']);

    // Handle joining rooms
    socket.on('join_room', async (roomId) => {
      socket.join(roomId);
      const userRoomsList = userRooms.get(socket.userId.toString()) || [];
      if (!userRoomsList.includes(roomId)) {
        userRoomsList.push(roomId);
        userRooms.set(socket.userId.toString(), userRoomsList);
      }
      
      // Send room history
      const messages = await Message.find({ room: roomId })
        .populate('user', 'username')
        .sort({ createdAt: 1 })
        .limit(100);
      
      socket.emit('room_history', { roomId, messages });
    });

    // Handle sending messages
    socket.on('send_message', async (data) => {
      const { roomId, content, type = 'text' } = data;
      
      const message = new Message({
        user: socket.userId,
        room: roomId,
        content,
        type,
        readBy: [socket.userId]
      });
      
      await message.save();
      await message.populate('user', 'username');
      
      io.to(roomId).emit('receive_message', message);
      
      // Send notification to users in room who are not the sender
      socket.to(roomId).emit('new_notification', {
        type: 'message',
        from: socket.username,
        roomId,
        message: content.substring(0, 50) + '...'
      });
    });

    // Handle typing indicators
    socket.on('typing_start', (roomId) => {
      typingUsers.set(socket.id, { roomId, username: socket.username });
      socket.to(roomId).emit('user_typing', {
        username: socket.username,
        roomId
      });
    });

    socket.on('typing_stop', (roomId) => {
      typingUsers.delete(socket.id);
      socket.to(roomId).emit('user_stop_typing', {
        username: socket.username,
        roomId
      });
    });

    // Handle read receipts
    socket.on('mark_read', async (messageId) => {
      await Message.findByIdAndUpdate(messageId, {
        $addToSet: { readBy: socket.userId }
      });
      
      const message = await Message.findById(messageId).populate('user', 'username');
      io.to(message.room).emit('message_read', {
        messageId,
        readBy: socket.userId,
        username: socket.username
      });
    });

    // Handle private messaging
    socket.on('start_private_chat', async (targetUserId) => {
      const roomName = [socket.userId, targetUserId].sort().join('_');
      let room = await Room.findOne({ name: roomName });
      
      if (!room) {
        room = new Room({
          name: roomName,
          type: 'private',
          participants: [socket.userId, targetUserId]
        });
        await room.save();
      }
      
      socket.join(roomName);
      socket.emit('private_room_created', roomName);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log(`User ${socket.username} disconnected`);
      
      // Remove from connected users
      connectedUsers.delete(socket.userId.toString());
      
      // Remove typing indicators
      typingUsers.delete(socket.id);
      
      // Update last seen
      io.emit('user_offline', {
        userId: socket.userId,
        username: socket.username,
        lastSeen: new Date()
      });
    });
  });
}