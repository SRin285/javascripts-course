/*(bài 1 : viết chương trình nhập vào năm sinh và in ra số tuổi)*/
  function newAger(age) {
  const now =  new Date();
  const getAger = now.getFullYear();
  if(typeof age !=="number"){
    return 0 ;
  }
  const myAger = (getAger - age) + 1 ;
  return myAger;
  }
  console.log(newAger(2000));


/*(bài 2 : viết chương trình đếm ngược thời gian theo từng giây(countdown) dựa vào thời gian ban đầu . ví dụ thời gian làm bài là 30p nếu chạy về 0 thì thông báo là hết thời gian )*/
  function countDown(minutes = 1) {
      let senconds = minutes * 60;
      let count = 0 ;
      const timer = setInterval(function () {
        count += 1 ;
        console.log(count);
        if (count === senconds){
          alert("thời gian đã hết");
          clearInterval(timer);
        }
      },1000);
    }
  countDown(1);
/*( bài 3 : viết chương trình có tên là timeSince , đầu vào là thời gian và tính thời gian đầu ra so với thời gian hiện tại, vd : bạn đang chat với bạn A, sau đó bạn A offline và sau đó vài phút thì hiện thị bạn A vừa online `3 phút trước`,`3 ngày trước`,`3 tháng trước`,`3 năm trước`)*/

  