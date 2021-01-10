let monthes=[
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
   "December"];

let daynemes=[
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
   "Sunday"];

let d=new Date();
let dayName=daynames[d.getDate()];
let monthName=months[d.getMonth()];
let year=d.getFullYear();
let fulldate=dayName+", "+monthName+", "+d.getDate()+", "+year;

   document.getElementById("currentdate").textContent=fulldate;