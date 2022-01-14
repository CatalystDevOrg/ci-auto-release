// require
const { exec } = require("child_process");
// get time
const now = new Date();
const currentMonth = now.getMonth() + 1;
const currentYear = now.getFullYear();
const currentDay = now.getDay() + 1;

// execute npm version
exec(`npm version ${currentYear}.${currentMonth}.${currentDay}-beta`)
exec(`git checkout ${currentYear}.${currentMonth}.${currentDay}-beta`)
