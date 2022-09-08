
// function sum(a = 0,b = 0) {
//   let isSum = a + b ;
//   return isSum ;
// } 
// console.log(sum(10,12));

// function add(a = 0 , b = 0 ) {
//   console.log(a + b);
//   return a + b ;
// }
// const sum2 = add; // gán hàm cho biến nhưng chưa gọi
// // sum2(100,200);

// function average(a,b,fn) {
//   const aver = fn(a,b);
//   return aver / 2 ;
// }
// let result = average(200,300,sum2)
// console.log(result);

// const logName = function () {
//   console.log("your name");
// }
// logName();

// (function (){
//   console.log("run");
// })();

// if ( 2 > 1 ) {
//   let mesage = "hello ";
//   var mesage2 = " hong toc xu";
// }
// alert(mesage2);
// let newName = "hong toc xu"; // bien toan cuc
// function sayhi() {
//   let mesage = "hi"; // bien cuc bo
//   console.log(`${mesage} : ${newName}`);
// }
// // sayhi();
// function sayhi2() { // parent function
//   let mesage = "hi"; 
//   function sayhi() { // inner function
//     console.log(mesage);
//   }
//   return sayhi;
// }
// let voker = sayhi2();
// voker();
// ex 2 : 

// function sayhi3(massage) {
//   return function sayhi(name) {
//     console.log(`${massage} ${name}`);
//   };
// }
// let hello = sayhi3(" welcome to js : ");
// hello(" coca cola ");

function sayhi4() {
  let massage = " hi";
  return function sayhi(name) {
    console.log(`${massage} ${name}`);
  };
}
let hello1 = sayhi4();
hello1(" coca cola ");