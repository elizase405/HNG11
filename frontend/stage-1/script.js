const day = document.querySelectorAll("p")[0];
const time = document.querySelectorAll("p")[1];

const new_day = new Date().toLocaleDateString("en-GB", {weekday: "long"});
const new_time = new Date().toISOString();

day.textContent = new_day;
time.textContent = new_time;