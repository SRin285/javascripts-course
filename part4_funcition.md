# function : 
# function declaration : 
  funtion declaration: hàm - (bị hoisting) hàm có tên được khai báo
  parameters : ` tham số `
  khai báo : function Name-function(parameters, parameters){
    .....your code here.....
    return and (not return = undefined)
  } 
  `phải gán giá trị cho tham số nếu không gọi thiếu sẽ bị lỗi `
  funcuion Name(paramters = defaulValue){

  }
  gọi hàm : invoke function sum(arguments) : ` đối số `
  ex : 
  function sum(a = 0,b = 0) {
  let isSum = a + b ;
  return isSum ;
  } 
  console.log(sum(10,12));

  ` lưu hàm thành một biến rồi gọi `
  ex :
  function add(a = 0 , b = 0 ) {
  console.log(a + b);
  return a + b ;
  }
  const sum2 = add; // gán hàm cho biến nhưng chưa gọi
  sum2(100,200);
  
 ` tham số là function `
  ex :  
  tính trung bình của a + b / 2
  function add(a = 0 , b = 0 ) {
  console.log(a + b);
  return a + b ;
  }
  function average(a,b,fn) {
  const aver = fn(a,b);
  return aver / 2 ;
  }
  let result = average(200,300,sum2)
  console.log(result);
# Anonymous function (function expression) 
  anonymous function : hàm vô danh => không bị hoisting 
  có thể hiểu là sẽ lưu trực tiếp vào biến
  ex : 
  const logName = function () {
  console.log("your name");
  }
  logName();
# IIFE 
  IIFR : hàm thực thi tức thì 
  ex : 
  (function (){
  console.log("run");
  })();
# Scope Global scope ,function scope , 
  Global scope : biến toàn cục - có thể truy xuất được mọi nơi
  nếu khai báo bằng `var` thì bị hoisting 
  function scope : biến cục bộ  - chỉ có thể truy xuất trong hàm 
# Block scope 
  block scope : nằm trong dấu { } những biến nằm trong dấu { } không thể gọi ở ngoài dấu {}
#  Closure , lexical scope 
  lexical scope : định nghĩa vị trí ở trong code 
  ex : 
  let newName = "hong toc xu"; // bien toan cuc
  function sayhi() {
    let mesage = "hi"; // bien cuc bo
    console.log(`${mesage} : ${newName}`);
  }
  sayhi();
  
  Closure : là tập hợp nhiều hàm được lồng vào nhau cho phép hàm con có thể truy xuất biến từ hàm cha 
  - đối với hàm bình thường thì biến cục bộ ở mỗi khi hàm chạy xong thì không truy xuất được nữa 
  còn đối với closure thì vẫn có thể truy xuất được
  ex : 
  function sayhi2() { // parent function
  let mesage = "hi"; 
  function sayhi() { // inner function
    console.log(mesage);
  }
  return sayhi;
  }
  let voker = sayhi2();
  voker();
  ex2 :
  function sayhi3(massage) {
  return function sayhi(name) {
    console.log(`${massage} ${name}`);
  };
  }
  let hello = sayhi3(" welcome to js : ");
  hello(" coca cola ");
