// require
const { exec } = require("child_process");
const fetch = require("cross-fetch");
// get time
fetch("https://worldtimeapi.org/api/timezone/America/Vancouver").then((res) => res.json()).then((data) => {
  const now = new Date(data.datetime);
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();
  const currentDay = now.getDay() + 1;

  // execute npm version
  exec(`npm version ${currentYear}.${currentMonth}.${currentDay}-beta`)
  exec(`git checkout ${currentYear}.${currentMonth}.${currentDay}-beta`)
})

