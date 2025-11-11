# 🚀 Real-Time Communication with Socket.io

A full-stack, real-time chat application built with **Node.js + Express** backend and **React + Vite** frontend, powered by **Socket.io** for bidirectional communication.

![Status](https://img.shields.io/badge/status-active-success.svg)
![Node](https://img.shields.io/badge/node-v18+-brightgreen)
![React](https://img.shields.io/badge/react-19.2.0-blue)
![Socket.io](https://img.shields.io/badge/socket.io-4.8.1-red)
![License](https://img.shields.io/badge/license-ISC-blue.svg)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API & Socket Events](#api--socket-events)
- [Architecture](#architecture)
- [Components](#components)
- [Usage Guide](#usage-guide)
- [Advanced Features](#advanced-features)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 Overview

This project demonstrates a complete real-time communication platform with:
- **Instant messaging** between multiple users
- **Multiple chat rooms** with dynamic room management
- **User authentication** with JWT tokens
- **Real-time notifications** for events and messages
- **Typing indicators** to show when users are composing messages
- **Online/Offline status** tracking
- **Responsive design** that works on desktop and mobile devices

The application uses **Socket.io** to establish a persistent, bidirectional connection between clients and server, enabling real-time data synchronization without polling.

---

## ✨ Features

### Core Features
- ✅ **Real-Time Messaging**: Instant message delivery using WebSockets
- ✅ **User Authentication**: Username/password authentication with JWT
- ✅ **Multiple Chat Rooms**: Create and join different chat rooms
- ✅ **User Presence**: See who's online/offline in real-time
- ✅ **Typing Indicators**: Know when other users are typing
- ✅ **Message Timestamps**: All messages include sender info and timestamps
- ✅ **User List**: View all connected users in current room

### Advanced Features
- ✅ **Notifications System**: Real-time notifications for events
- ✅ **Reconnection Logic**: Automatic reconnection with exponential backoff
- ✅ **Message Persistence**: Messages stored in MongoDB
- ✅ **Room Management**: Create, join, and leave rooms dynamically
- ✅ **Error Handling**: Comprehensive error handling and user feedback
- ✅ **Responsive UI**: Mobile-friendly interface with Tailwind CSS

---

## 🛠 Tech Stack

### Frontend
- **React 19.2.0** - UI library with hooks
- **Vite 5.x** - Fast build tool and dev server
- **Socket.io Client 4.8.1** - Real-time communication client
- **React Router DOM 7.9.5** - Client-side routing
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Axios 1.13.2** - HTTP client for API calls

### Backend
- **Node.js 18+** - JavaScript runtime
- **Express 5.1.0** - Web application framework
- **Socket.io 4.8.1** - Real-time communication server
- **MongoDB & Mongoose 8.19.3** - NoSQL database
- **JWT & bcryptjs** - Authentication & password hashing
- **CORS 2.8.5** - Cross-Origin Resource Sharing
- **Dotenv 17.2.3** - Environment variable management

---

## 📁 Project Structure

```
real-time-communication-with-socket-io/
├── client/                          # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatRoom.jsx        # Main chat interface
│   │   │   ├── Message.jsx         # Individual message component
│   │   │   ├── MessageInput.jsx    # Message composition input
│   │   │   ├── MessageList.jsx     # List of messages
│   │   │   ├── Notifications.jsx   # Notification display
│   │   │   ├── RoomsList.jsx       # Available rooms
│   │   │   ├── TypingIndicator.jsx # Typing status indicator
│   │   │   └── UserList.jsx        # Connected users display
│   │   ├── context/
│   │   │   ├── AuthContext.jsx     # Authentication state
│   │   │   └── SocketContext.jsx   # Socket.io state
│   │   ├── hooks/
│   │   │   └── useChat.jsx         # Custom chat hook
│   │   ├── pages/
│   │   │   ├── Login.jsx           # Login page
│   │   │   ├── Register.jsx        # Registration page
│   │   │   └── Chat.jsx            # Main chat page
│   │   ├── socket/
│   │   │   └── socket.js           # Socket.io client setup
│   │   ├── App.jsx                 # Main application component
│   │   ├── main.jsx                # Entry point
│   │   └── index.css               # Global styles
│   ├── public/                      # Static files
│   ├── package.json                # Dependencies
│   ├── vite.config.js              # Vite configuration
│   └── index.html                  # HTML template
│
├── server/                          # Node.js Backend
│   ├── controllers/
│   │   └── authController.js       # Authentication logic
│   ├── models/
│   │   ├── User.js                 # User schema
│   │   ├── Message.js              # Message schema
│   │   └── Room.js                 # Room schema
│   ├── socket/
│   │   └── socketHandlers.js       # Socket event handlers
│   ├── server.js                   # Main server file
│   ├── package.json                # Dependencies
│   └── .env                        # Environment variables
│
├── README.md                        # Original README
├── Week5-Assignment.md              # Assignment details
└── COMPREHENSIVE_README.md          # This file
```

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18 or higher ([Download](https://nodejs.org/))
- **npm** or **yarn**: Package manager (comes with Node.js)
- **MongoDB**: v4.4+ ([Local Installation](https://docs.mongodb.com/manual/installation/) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **Git**: For version control ([Download](https://git-scm.com/))
- **Code Editor**: VS Code recommended ([Download](https://code.visualstudio.com/))

### Verify Installation
```bash
node --version    # Should be v18+
npm --version     # Should be v8+
mongod --version  # Should be v4.4+
git --version     # Should be v2+
```

---

## 🔧 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/real-time-communication-with-socket-io-Nelson-Ndirangu.git
cd real-time-communication-with-socket-io-Nelson-Ndirangu
```

### Step 2: Backend Setup

```bash
cd server
npm install
```

**Installed Dependencies:**
- `express`: Web framework
- `socket.io`: Real-time communication
- `mongoose`: MongoDB ODM
- `jsonwebtoken`: JWT authentication
- `bcryptjs`: Password hashing
- `cors`: Cross-origin resource sharing
- `dotenv`: Environment variables
- `nodemon`: Development auto-reload

### Step 3: Frontend Setup

```bash
cd ../client
npm install
```

**Installed Dependencies:**
- `react`: UI library
- `react-router-dom`: Routing
- `socket.io-client`: Socket.io client
- `axios`: HTTP requests
- `tailwindcss`: CSS framework

### Step 4: Environment Setup

Create a `.env` file in the `server` directory:

```bash
cd server
touch .env
```

Add the following environment variables:

```env
# Server Configuration
PORT=8000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/chat-app

# JWT
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d

# CORS
CORS_ORIGIN=http://localhost:5173

# Socket.io
SOCKET_PORT=8000
```

Create a `.env` file in the `client` directory:

```bash
cd ../client
touch .env.local
```

Add the following environment variables:

```env
VITE_API_URL=http://localhost:8000
VITE_SOCKET_URL=http://localhost:8000
```

---

## 🚀 Running the Application

### Prerequisites Check

Make sure MongoDB is running:

```bash
# If using local MongoDB
mongod

# Or check if MongoDB is running
mongo --eval "db.adminCommand('ping')"
```

### Start the Backend Server

```bash
cd server
npm run dev
```

Expected output:
```
[nodemon] watching extensions: js,json
[nodemon] starting `node server.js`
Server running on http://localhost:8000
Connected to MongoDB
```

### Start the Frontend Development Server

In a new terminal:

```bash
cd client
npm run dev
```

Expected output:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### Access the Application

Open your browser and navigate to:

```
http://localhost:5173/
```

---

## 📡 API & Socket Events

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "secure_password_123"
}

Response:
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "user_id",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "secure_password_123"
}

Response:
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "user_id",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

### Socket Events

#### Client → Server Events

| Event | Data | Description |
|-------|------|-------------|
| `user_join` | `{username: string, room: string}` | User joins a room |
| `send_message` | `{text: string, room: string}` | Send message to room |
| `start_typing` | `{room: string}` | Notify user is typing |
| `stop_typing` | `{room: string}` | Notify user stopped typing |
| `user_leave` | `{room: string}` | User leaves room |
| `get_users` | `{room: string}` | Request users in room |
| `disconnect` | - | User disconnects |

#### Server → Client Events

| Event | Data | Description |
|-------|------|-------------|
| `user_joined` | `{username: string, userCount: number}` | User joined notification |
| `receive_message` | `{username: string, text: string, timestamp: string}` | New message received |
| `user_typing` | `{username: string}` | User is typing notification |
| `user_stopped_typing` | `{username: string}` | User stopped typing |
| `users_list` | `[{username: string, id: string}]` | List of users in room |
| `user_left` | `{username: string, userCount: number}` | User left notification |
| `error` | `{message: string}` | Error occurred |

### Example Socket Usage

```javascript
import { socket } from './socket/socket.js';

// Connect to server
socket.connect();

// Emit: User joins a room
socket.emit('user_join', {
  username: 'john_doe',
  room: 'general'
});

// Listen: User joined
socket.on('user_joined', (data) => {
  console.log(`${data.username} joined the room`);
});

// Emit: Send message
socket.emit('send_message', {
  text: 'Hello everyone!',
  room: 'general'
});

// Listen: Receive message
socket.on('receive_message', (data) => {
  console.log(`${data.username}: ${data.text}`);
});

// Emit: User is typing
socket.emit('start_typing', { room: 'general' });

// Listen: User typing
socket.on('user_typing', (data) => {
  console.log(`${data.username} is typing...`);
});
```

---

## 🏗 Architecture

### Client-Server Communication Flow

```
┌─────────────┐                           ┌─────────────┐
│   React     │                           │   Express   │
│   Frontend  │ ─ HTTP/WebSocket (Socket.io) → Backend   │
│             │                           │   Server    │
└─────────────┘                           └─────────────┘
      ↓                                          ↓
  Components                              Socket Handlers
  Hooks                                   Controllers
  Context                                 Models
```

### Data Flow

1. **User Authentication**
   - User registers/logs in via REST API
   - Server validates credentials and returns JWT token
   - Client stores token in localStorage

2. **Real-Time Communication**
   - Client connects via Socket.io
   - User joins a room
   - Messages are broadcast to all users in the room
   - Events are emitted and listened to in real-time

3. **Notification System**
   - Events trigger notifications
   - Notifications are displayed to relevant users
   - Notifications are cleared after being viewed

---

## 🧩 Components

### Frontend Components

#### `App.jsx`
Main application wrapper handling routes and authentication context.

#### `pages/Login.jsx`
Login page with email and password fields. Authenticates user and stores JWT token.

#### `pages/Register.jsx`
Registration page for new users. Creates account and returns JWT token.

#### `pages/Chat.jsx`
Main chat page container combining all chat components.

#### `components/ChatRoom.jsx`
Main chat interface displaying current room, messages, and input.

**Props:**
```javascript
{
  room: String,           // Current room name
  messages: Array,        // Array of message objects
  onSendMessage: Function // Callback for sending messages
}
```

#### `components/MessageList.jsx`
Displays scrollable list of messages with auto-scroll to latest.

**Props:**
```javascript
{
  messages: Array,    // Array of message objects
  currentUser: String // Current logged-in user
}
```

#### `components/Message.jsx`
Individual message component with sender name, content, and timestamp.

**Props:**
```javascript
{
  username: String,   // Message sender
  text: String,       // Message content
  timestamp: String,  // Message send time
  isCurrentUser: Boolean // Is message from current user
}
```

#### `components/MessageInput.jsx`
Input field for composing messages with send button.

**Props:**
```javascript
{
  onSendMessage: Function,  // Send message callback
  onTyping: Function,       // Typing indicator callback
  disabled: Boolean         // Disable input
}
```

#### `components/UserList.jsx`
Displays list of connected users in current room.

**Props:**
```javascript
{
  users: Array,           // Array of connected users
  currentUser: String     // Current user name
}
```

#### `components/TypingIndicator.jsx`
Shows which users are currently typing.

**Props:**
```javascript
{
  typingUsers: Array  // Array of users who are typing
}
```

#### `components/RoomsList.jsx`
Shows available chat rooms with join/create options.

**Props:**
```javascript
{
  rooms: Array,
  currentRoom: String,
  onSelectRoom: Function
}
```

#### `components/Notifications.jsx`
Toast notification display for system events.

**Props:**
```javascript
{
  notifications: Array,     // Array of notification objects
  onDismiss: Function      // Dismiss notification callback
}
```

---

## 📚 Usage Guide

### For End Users

#### 1. Register New Account

- Click "Register" on the login page
- Enter username, email, and password
- Click "Sign Up"
- You'll be automatically logged in

#### 2. Join a Chat Room

- Select a room from the "Rooms" list
- Or create a new room
- You'll see all connected users and message history

#### 3. Send a Message

- Type message in the input field at the bottom
- Press Enter or click Send button
- Message appears for all users in that room

#### 4. See Who's Typing

- When other users type, you'll see "User is typing..." indicator
- Indicator disappears when they stop typing or send message

#### 5. View Online Users

- See user list on the right side
- Green dot indicates user is online
- Gray dot indicates user is offline

#### 6. Switch Rooms

- Click room name in the left sidebar
- You'll leave current room and join new room
- Message history is preserved per room

### For Developers

#### Adding a New Component

1. Create component file in `client/src/components/`
2. Import required hooks and context
3. Export component as default
4. Use in relevant pages or parent components

Example:
```javascript
// components/CustomComponent.jsx
import React from 'react';

export default function CustomComponent({ data }) {
  return (
    <div className="p-4">
      {/* Component JSX */}
    </div>
  );
}
```

#### Adding a New Socket Event

1. Define event in `server/socket/socketHandlers.js`
2. Add listener in `client/src/socket/socket.js` or component
3. Emit event from client component
4. Handle event response

Example Server:
```javascript
io.on('connection', (socket) => {
  socket.on('custom_event', (data) => {
    // Handle event
    socket.broadcast.emit('custom_response', { ...data });
  });
});
```

Example Client:
```javascript
socket.emit('custom_event', { data: 'value' });
socket.on('custom_response', (data) => {
  console.log(data);
});
```

---

## 🚀 Advanced Features

### 1. Message Persistence

Messages are stored in MongoDB and loaded when joining a room:

```javascript
// Load message history
socket.on('load_messages', (messages) => {
  setMessages(messages);
});
```

### 2. Automatic Reconnection

The client automatically reconnects with exponential backoff:

```javascript
const socket = io(SOCKET_URL, {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionAttempts: 5
});
```

### 3. JWT Authentication

Secure authentication with JWT tokens:

```javascript
// Token stored in localStorage after login
const token = localStorage.getItem('token');
// Include in API requests
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
```

### 4. Custom Hooks

Reusable logic with custom React hooks:

```javascript
// useChat.jsx
export const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  
  // Socket event listeners
  useEffect(() => {
    socket.on('receive_message', (msg) => {
      setMessages(prev => [...prev, msg]);
    });
  }, []);
  
  return { messages, users };
};
```

---

## 🐛 Troubleshooting

### Issue: Connection Refused

**Problem:** "Cannot reach server" error

**Solution:**
1. Ensure backend is running: `npm run dev` in server directory
2. Check MongoDB is running: `mongod`
3. Verify port 8000 is not in use
4. Check firewall settings

```bash
# Kill process on port 8000 (Windows)
netstat -ano | findstr :8000
taskkill /PID <PID> /F
```

### Issue: CORS Errors

**Problem:** "Cross-Origin Request Blocked" error

**Solution:**
1. Check CORS configuration in `server.js`:
```javascript
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});
```

2. Ensure client URL matches CORS origin

### Issue: Messages Not Updating

**Problem:** Messages don't appear in real-time

**Solution:**
1. Check browser console for errors
2. Verify Socket.io connection: `socket.connected`
3. Check server socket handlers for event listeners
4. Verify room name matches between client and server

```javascript
// Debug connection
if (!socket.connected) {
  console.error('Socket not connected');
  socket.connect();
}
```

### Issue: MongoDB Connection Error

**Problem:** "Cannot connect to MongoDB" error

**Solution:**
1. Ensure MongoDB is running:
```bash
# Windows
mongod

# Mac
brew services start mongodb-community
```

2. Check connection string in `.env`:
```env
MONGODB_URI=mongodb://localhost:27017/chat-app
```

3. Verify MongoDB service is running:
```bash
mongo --eval "db.adminCommand('ping')"
```

### Issue: Authentication Failed

**Problem:** Cannot login or register

**Solution:**
1. Check user exists in MongoDB:
```javascript
db.users.find()
```

2. Verify password hashing with bcryptjs
3. Check JWT_SECRET in `.env` file
4. Clear localStorage and try again:
```javascript
localStorage.clear();
```

---

## 🔐 Security Best Practices

### Implemented Features
- ✅ Password hashing with bcryptjs
- ✅ JWT token-based authentication
- ✅ CORS enabled for specific origins
- ✅ Environment variables for sensitive data
- ✅ Input validation on server side

### Recommendations for Production

1. **Use HTTPS/WSS in Production**
```javascript
// Production Socket.io configuration
const socket = io(SOCKET_URL, {
  secure: true,
  rejectUnauthorized: false
});
```

2. **Add Rate Limiting**
```bash
npm install express-rate-limit
```

3. **Implement Message Validation**
```javascript
function validateMessage(message) {
  return message && message.trim().length > 0 && message.length <= 1000;
}
```

4. **Use Strong JWT Secret**
```bash
# Generate strong secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

5. **Add Database Indexing**
```javascript
messageSchema.index({ room: 1, createdAt: -1 });
```

---

## 🚢 Deployment

### Deploy Backend (Render/Railway)

1. Push code to GitHub
2. Connect repository to Render/Railway
3. Set environment variables
4. Deploy

### Deploy Frontend (Vercel/Netlify)

1. Build frontend:
```bash
cd client
npm run build
```

2. Connect to Vercel/Netlify
3. Update API URL to production
4. Deploy

### Docker Deployment

Create `Dockerfile` for backend:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "start"]
```

---

## 📝 Testing

### Manual Testing Checklist

- [ ] User can register with unique email
- [ ] User can login with correct credentials
- [ ] User can send message to room
- [ ] All users in room receive message
- [ ] Typing indicator shows when user types
- [ ] User list updates when users join/leave
- [ ] Reconnection works after disconnect
- [ ] Messages load from history
- [ ] Notifications appear for events

### Unit Testing

```bash
# Install testing libraries
npm install --save-dev @testing-library/react vitest @vitest/ui

# Run tests
npm run test
```

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature/feature-name`
5. Open Pull Request

### Code Style

- Use ES6+ syntax
- Follow React best practices
- Use functional components with hooks
- Keep components small and reusable
- Add meaningful comments

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 📞 Support

For issues, questions, or suggestions:

- Open an issue on GitHub
- Check existing issues for solutions
- Review troubleshooting section above
- Contact the development team

---

## 🎉 Acknowledgments

- [Socket.io Documentation](https://socket.io/docs/)
- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 📊 Performance Metrics

### Optimization Techniques

1. **Message Pagination**: Load messages in batches
2. **Socket.io Rooms**: Efficient message broadcasting
3. **React Memo**: Prevent unnecessary re-renders
4. **Lazy Loading**: Load components on demand
5. **Database Indexing**: Fast queries

### Benchmark Targets

- **Message delivery**: < 100ms latency
- **Page load**: < 2 seconds
- **Typing indicator**: < 50ms response
- **User list update**: < 200ms

---

**Last Updated**: November 2025  
**Version**: 1.0.0  
**Author**: Nelson Ndirangu  
**Repository**: [GitHub](https://github.com/PLP-MERN-Stack-Development/real-time-communication-with-socket-io-Nelson-Ndirangu)

---

## Quick Start Summary

```bash
# 1. Clone repository
git clone <repo-url>
cd real-time-communication-with-socket-io-Nelson-Ndirangu

# 2. Backend setup
cd server
npm install
# Create .env file with configuration

# 3. Frontend setup
cd ../client
npm install
# Create .env.local file with configuration

# 4. Start MongoDB
mongod

# 5. Terminal 1 - Start backend
cd server && npm run dev

# 6. Terminal 2 - Start frontend
cd client && npm run dev

# 7. Open browser
# Navigate to http://localhost:5173
```

Enjoy real-time chatting! 🎉
