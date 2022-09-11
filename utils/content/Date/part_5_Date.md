# hàm date
  cho xem ngày tháng năm hiện tại 
  ex : 
  const now = new Date();
  Fri Sep 09 2022 15:42:01 GMT+0700 (Giờ Đông Dương)
  timezone : GMT+0700 (Giờ Đông Dương)
  second : 01
  minute : 42
  hour : 15
  year : 2022
  month : sep
  day : 13 
  day of the week : Fri
# timestamp & Epoch time
  unix time : tính ra kết quả dựa trên múi giờ đơn vị milisenconds dựa trên timestamp và epock time 
  console.log(now.getTime());
# khởi tạo Date Object 
  có 4 cách sử dụng 
  new Date() ==> in ra ngày giờ hiện tại
  console.log(now);

  new Date (timestamp) ==> dựa vào timestamp để in ra ngày và giờ
  console.log(new Date(1662713862894));

  `new Date(date string)` ==> những chuỗi hợp lệ vào 
  console.log(new Date("Fri Sep 09 2022 15:59:13 GMT+0700 (Giờ Đông Dương)"));
  console.log(now.toDateString());`Fri Sep 09 2022`
  console.log(now.toTimeString());`21:16:19 GMT+0700 (Giờ Đông Dương)`
  console.log(now.toLocaleDateString());`9/28/2022`
  console.log(now.toLocaleDateString("vi-VI")); ngày trước tháng sau  `28/9/2022`
  console.log(now.toISOString());`2022-09-09T14:15:51.792Z`


  new Date(year, month , day ,hours, minutes,senconds, milisecond)
  console.log(new Date(2000,5,13,23,23,23));
# get trong Date 
  get : truy xuất - lấy thông tin của thời gian 
  ex : 
  getFullyear();
  const birthday = new Date(2000,5,28);
  // in ra năm
  console.log(birthday.getFullYear());
  // in ra tháng (0-11)
  console.log(birthday.getMonth());
  // in ra ngày của tháng(1-31)
  console.log(birthday.getDate());
  // in ra thứ của tuần 0 - 6
  console.log(birthday.getDay());
  // in ra số giờ 
  console.log(birthday.getHours());
  // in ra số phút
  console.log(birthday.getMinutes());
  // in ra số giây 
  console.log(birthday.getMilliseconds());
  // in ra timestamp
  console.log(birthday.getTime());
# set trong Date
  set : thiết lập thông tin cho ...tương tự get 
  birthday.setFullYear(2000);
  birthday.setMonth(10);
  birthday.setDate(10);
  birthday.setHours(10);
  birthday.setMinutes(10);
  birthday.setSeconds(10);
  console.log(`my birthday after update : ${birthday}`);
# utc 
  utc giống với get nhưng chạy theo múi giờ thế giới
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
// in ra timestamp
console.log(birthday.getUTCTime());


/* bài tap */
  // input : Fri Sep 09 2022 15:59:13 GMT+0700 (Giờ Đông Dương)
  output : 9/09/2022;
  ex : 
  const myTime = new Date("Fri Sep 09 2022 15:59:13 GMT+0700 (Giờ Đông Dương");
  console.log(myTime);
  const myYear = myTime.getFullYear();
  const myMoth = myTime.getMonth() + 1;
  const myDate = myTime.getDate();
  const fixMoth = myMoth < 10 ? "0" : "";
  console.log(`${myDate} / ${fixMoth}${myMoth} / ${myYear}`);
# setTimeout , setInterval
  setimeout : xét khoảng thời gian nhất định 
  ex : 
  const timeout = setTimeout(function () {
  alert("call a affer 3 senconds");
  }, 3000);
  clearTimeout(timeout);
  setInterval : xét khoảng thời gian liên tục 
  ex : 
  const timer = setInterval(function () {
  console.log("call me");
  },1000);
  clearInterval(timer);