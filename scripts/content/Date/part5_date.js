const now = new Date();
// built-in object 
// console.log(now);
// console.log(now.getTime());
// console.log(new Date(1662713862894));
console.log(new Date("Fri Sep 09 2022 15:59:13 GMT+0700 (Giờ Đông Dương)"));
console.log(new Date(2000,5,13,23,23,23));
const birthday = new Date(2000,5,28);
// in ra năm
console.log(birthday.getFullYear());
// in ra tháng 
console.log(birthday.getMonth());
// in ra ngày 
console.log(birthday.getDay());
// in ra số giờ 
console.log(birthday.getHours());
// in ra số phút
console.log(birthday.getMinutes());
// in ra số giây 
console.log(birthday.getSeconds());
// in ra số mili giây 
console.log(birthday.getMilliseconds());
// in ra timestamp
console.log(birthday.getTime());
console.log(birthday);
birthday.setFullYear(2000);
birthday.setMonth(10);
birthday.setDate(10);
birthday.setHours(10);
birthday.setMinutes(10);
birthday.setSeconds(10);
console.log(`my birthday after update : ${birthday}`);
/* date string */
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleDateString("vi-VI"));
console.log(now.toISOString());

// in ra năm
console.log(birthday.getUTCFullYear());
// in ra tháng 
console.log(birthday.getUTCMonth());
// in ra ngày 
console.log(birthday.getUTCDay());
// in ra số giờ 
console.log(birthday.getUTCHours());
// in ra số phút
console.log(birthday.getUTCMinutes());
// in ra số giây 
console.log(birthday.getUTCSeconds());
// in ra số mili giây 
console.log(birthday.getUTCMilliseconds());
/* bai tập */
const myTime = new Date("Fri Sep 09 2022 15:59:13 GMT+0700 (Giờ Đông Dương");
console.log(myTime);
const myYear = myTime.getFullYear();
const myMoth = myTime.getMonth() + 1;
const myDate = myTime.getDate();
const fixMoth = myMoth < 10 ? "0" : "";
console.log(`${myDate} / ${fixMoth}${myMoth} / ${myYear}`);
/** setimeot */
// const timeout1 = setTimeout(function () {
//   alert("call a affer 3 senconds");
// }, 3000);
// clearTimeout(timeout1);
/** setInterval */
const timer = setInterval(function () {
  console.log("call me");
},1000);
clearInterval(timer);