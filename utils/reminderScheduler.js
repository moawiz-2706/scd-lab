const cron = require('node-cron');
const Event = require('../models/Event');

const checkAndSendReminders = async () => {
  const now = new Date();
  const events = await Event.find({
    reminderTime: { $lte: now },
    reminderSent: false
  }).populate('user');

  events.forEach(async (event) => {
    // Implement notification logic (email/console.log/etc.)
    console.log(`Reminder for event: ${event.name}`);
    event.reminderSent = true;
    await event.save();
  });
};

const scheduleReminders = () => {
  cron.schedule('* * * * *', checkAndSendReminders); // Runs every minute
};

module.exports = { scheduleReminders };