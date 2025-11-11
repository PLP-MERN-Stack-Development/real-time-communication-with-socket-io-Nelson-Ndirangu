// socketio-chat/server/server.js
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import socketHandlers from './socket/socketHandlers.js';
import authRoutes from './controllers/authController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/chat-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Socket.io handlers
socketHandlers(io);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});