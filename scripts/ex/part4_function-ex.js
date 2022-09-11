// viết hàm so sánh hai số a , b và in ra số lớn hơn 
function compare(a,b) {
  if (a > b ){
    console.log(a);  
  }else if(a == b ){
    console.log("bang nhau");
  }else{
    console.log(b);
  }
}
compare(1,5);
function compare1(a = 0,b = 0) {
  if( typeof a !== "number" || typeof n !== "number"){
    return 0 ;
  }
  return Math.max(a,b);
}
let output2 = compare1(100,"string");
console.log(output2);

// bài 2 : viết hàm in hoa chữ cái đầu tiên của tên .. vd nam -> Nam
function lowerCase(a = ""){
  if( typeof a !== "string" || a.length === 0){
    return null ;
  }
  return a.toLocaleLowerCase().charAt(0).toUpperCase() + a.slice(1).toLocaleLowerCase();
}
console.log(lowerCase("NAM HI HI HI"));

// bài 3 : viết hàm có sử dụng callback (function là parameter của function khác ) in ra kết quả của hàm compare đã viết ở trên 
// function add(a = 0,b = 0) {
//   if(typeof a == "string" || typeof b == "string"){
//     return 0 ;
//   }
//   return a + b;
// }
// function useCallback(a= 0,b = 0,fn) {
//   let voker = add(a + b);
//   fn(voker);
// }
// function printNumber(number){
//   console.log("sum number " + number);
// }

// console.log(useCallback(40,10,printNumber));
let voker = (a , b , fn) =>{
  let outpt = add(a,b);
  fn(outpt);
}
function add(a,b) {
  if(typeof a !== "number" || typeof b !== "number"){
    return 0 ;
  }
  return a + b;
}
function prints(number) {
  console.log("sum "+number);
  
}
console.log(voker(3,1,prints));