/**bài 1 */
  /*(bài 1 : viết chương trình nhập vào năm sinh và in ra số tuổi)*/

// function newAger(age) {
//   const now =  new Date();
//   const getAger = now.getFullYear();
//   if(typeof age !=="number"){
//     return 0 ;
//   }
//   const myAger = (getAger - age) + 1 ;
//   return myAger;
// }
// console.log(newAger(2000));

  /*(bài 2 : viết chương trình đếm ngược thời gian theo từng giây(countdown) dựa vào thời gian ban đầu . ví dụ thời gian làm bài là 30p nếu chạy về 0 thì thông báo là hết thời gian )*/
//   function countDown(minutes = 1) {
//     let senconds = minutes * 60;
//     let count = 0 ;
//     const timer = setInterval(function () {
//       count += 1 ;
//       console.log(count);
//       if (count === senconds){
//         alert("thời gian đã hết");
//         clearInterval(timer);
//       }
//     },1000);
//   }
// countDown(1);
/*( bài 3 : viết chương trình có tên là timeSince , đầu vào là thời gian và tính thời gian đầu ra so với thời gian hiện tại, vd : bạn đang chat với bạn A, sau đó bạn A offline và sau đó vài phút thì hiện thị bạn A vừa online `3 phút trước`,`3 ngày trước`,`3 tháng trước`,`3 năm trước`)*/
function timeSince(date) { // current Time - time
  const now = new Date();
  const newTime = new Date(date);
  const outtime  = Math.floor((now.getTime() - newTime.getTime()) / 1000);// in ra số giây 
  let timer = outtime / 31536000;
  if(timer > 1 ){
    console.log(`${Math.floor(timer)} năm trước`);
    return;
  }
  timer = outtime /  2678400;
  if(timer > 1 ){
    console.log(`${Math.floor(timer)} tháng trước`);
    return ;
  }
  timer = outtime / 604800 ;
  if(timer > 1 ){
    console.log(`${Math.floor(timer)} tuần trước`);
    return ;
  }
  timer = outtime / 86400 ;
  if(timer > 1 ){
    console.log(`${Math.floor(timer)} ngày trước`);
    return ;
  }
  timer = outtime / 3600 ;
  if(timer > 1 ){
    console.log(`${Math.floor(timer)} giờ trước`);
    return ;
  }
  timer = outtime / 60 ;
  if(timer > 1 ){
    console.log(`${Math.floor(timer)} phút trước`);
    return;
  }
  timer = outtime ;
  if(timer > 1 ){
    console.log(`${Math.floor(timer)} giây trước`);
  }
  return;
}
// 1 năm = 365 ngày , 1 ngày 24 tiếng , 1 tiếng 60 phut , 1 phut 60 giây = 365 * 24 * 60 * 60 = 31536000
// 1 tháng : 31 * 24 * 60 * 60  = 2678400
// 1 tuần : 7 * 24 *60 * 60 = 604800
// 1 ngày : 24 * 60 * 60 = 86400
// 1 giờ : 60 * 60 : 3600
// 1 phút : 60 = 60 
timeSince("Sun Sep 11 2022 17:10:50 GMT+0700");



