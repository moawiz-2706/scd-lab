const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description: String,
  date: { type: Date, required: true },
  category: {
    type: String,
    enum: ['Meetings', 'Birthdays', 'Appointments'],
    required: true
  },
  reminderTime: { type: Date, required: true },
  reminderSent: { type: Boolean, default: false }
});

module.exports = mongoose.model('Event', eventSchema);