// require
const { exec } = require("child_process");
// get time
const now = new Date();
const currentMonth = now.getMonth();
const currentYear = now.getFullYear();
const currentDay = now.getDay();

// execute npm version
exec(`npm version ${currentYear}.${currentMonth}.${currentDay}-beta`)
