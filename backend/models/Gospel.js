// backend/models/Gospel.js
const mongoose = require('mongoose');

const GospelSchema = new mongoose.Schema({
  week: { type: String, required: true },
  day: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: [
    {
      user: String,
      text: String,
    },
   
  ],
},{ timestamps: true });

module.exports = mongoose.model('Gospel', GospelSchema);
