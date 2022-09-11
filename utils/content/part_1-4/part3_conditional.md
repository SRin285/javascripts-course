# câu điều kiện if , if-else
 cấu trúc : 
  if(condition){
    you code here ;
  }else( phủ định của if )
  {
  }
  ex : 
    const isRick  = false;
  if(!isRick){
    console.log("i will buy a new car");
  } else{
    console.log("i will save my mony");
  }
  ==========
  else if()
  {
  }
  ex :
  const isRick  = false;
  const myMony = 10 ;
  if(!isRick){
    console.log("a");
  }else if(myMony !== 10){
    console.log("b");
  }else{
    console.log("c");
  }
# hàm thông báo :  aleft , prompt , confirm 
  aleft : hiện thông báo trên trang web `data : string`
  ex :   alert("You website has been hacker");
  prompt : nhập một giá trị vào `data : string`
  ex : prompt("vui lòng nhập vào tên :","");
  confirm : xác nhận `data :string , boolean`
  ex : confirm("đay co phai la tien cua ban khong ");

# switch case : 
  ex : 
  const number = "10" ;
  switch (Number(number)) {
    case 11:
      alert(`đây là ${number}`);
      break;
  
    default:
      alert("không tồn tại");
      break;
  }
# ternary operator 
 ternary operator : cách viết if else rút gọn 
 