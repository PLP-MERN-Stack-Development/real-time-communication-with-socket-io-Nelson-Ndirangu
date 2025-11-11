// socketio-chat/server/models/Room.js
import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String,
    enum: ['public', 'private'],
    default: 'public'
  },
  description: String,
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

export default mongoose.model('Room', roomSchema);