const menuBar = document.querySelector(".menu-bar");
const nav = document.querySelector("header nav");
const links = document.querySelectorAll("header nav ul li a");

const updateTime = () => {
  const now = new Date();
  const utcTime = now.toUTCString().split(" ")[4];
  document.getElementById("current-time-utc").innerText = utcTime;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDay = days[now.getUTCDay()];
  const currentMonth = months[now.getUTCMonth()];
  const currenYear = now.getUTCFullYear();
  document.getElementById("current-day").innerText = currentDay;
  document.getElementById("current-month").innerText = currentMonth;
  document.getElementById("current-year").innerText = currenYear;
};

updateTime();
setInterval(updateTime, 1000);

const toggleNav = () => {
  menuBar.classList.toggle("opened");

  if (menuBar.classList.contains("opened")) {
    nav.classList.add("show");
    document.body.style.overflowY = "hidden";
  } else {
    nav.classList.remove("show");
    document.body.style.overflowY = "auto";
  }
};

links.forEach((link) => {
  link.addEventListener("click", toggleNav);
});

menuBar.addEventListener("click", toggleNav);
