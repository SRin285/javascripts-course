// const student = [];
// const student2 = new Array();
/** ex :  */
// const student3 = ["hong","hưng","huy","thắng","sang"];
// console.log(student3[3]);
// console.log(student3[student3.length-1]);

// const student = ["hong","hưng","huy","hưng","sang"];
// console.log(student.reverse());
// console.log(student.join());
// console.log(student.join(" "));
// console.log(student.includes("hong"));
// console.log(student.indexOf("hưng"));
// console.log(student.lastIndexOf("hưng"));
// console.log(student.push("huy"));
// console.log(student.unshift("An"));
// console.log(student);
// console.log(student.pop());
// console.log(student.shift());
// console.log(student);
// const animals = ["tiger","lion","horse","elephant" ];
// console.log(animals);
/** slice */
// const animals2 = animals.slice();
// console.log(animals2);
// const pest = ["dog","cat","mickky","dragon"];
// const pest2 = pest.splice(0);
// console.log(pest2);
// const pest3 = pest.splice(0,2);
// const pest4 = pest.splice(0,1,"monkkey","dinasoure");
// console.log(pest);
/** sort  */
// const ramdom = [1,5,100,20,50,"vhcity","An"];
//   ramdom.sort();
// const ramdom2 = ramdom.sort(function (a,b){
//   if(a > b){
//     return 1 ;
//   }return -1 ;
// })
//   console.log(ramdom2);
// const ramdom3 = ramdom.sort((a,b) =>{
//   if(a > b){
//     return 1 ;
//   }return -1 ;
// }) 
// console.log(ramdom3);
/**find */
// const ramdom = [1,5,100,20,50,"vhcity","An"];
// const findYour = ramdom.find((element) => element > 10); 
// console.log(findYour);
/** findIndex */
//   const ramdom = [1,5,100,20,50,"vhcity","An"];
//   const findYour = ramdom.findIndex((element) => element > 10);
// console.log(findYour);
/** map */
// const listNumber = [1,3,9,8,7,3,4,1];
// const listArrr = listNumber.map((value,index,array) =>{
//   return value * 2 ;
// })
// console.log(listArrr);
/** forEach */
// const listNumber = [1,9,3,6,5,7,8,0,3];
// const listOut = listNumber.forEach((value,index,array)=>{
  
// })
// console.log(listOut);
/** filter */
// const list = [1,2,5,9,4,2,3];
// const listNumber = list.filter((element)=> {
//   if (element > 3)
//   return element;
// });
// console.log(listNumber);
/**some , every */
// const list = [1,2,5,9,4,2,3];
// const sumeNumber = list.some((element)=>element > 10);
// const everyNumber = list.some((element)=>element > 1);
// console.log(everyNumber);
/** Reduce */
// const list = [1,2,5,9,4,2,3];
// const reduceNumber = list.reduce((a,b)=>{
//   return a +b ;
// },0);
// console.log(reduceNumber);
/** By value  */
// const number1 = 1;
// const number2 = 1 ; 
// console.log(number1 === number2); `true`

/** by referrences */
// const array1 = [1,2,3];
// const array2 = [1,2,3];
// console.log(array1 === array2); `false`
/* clone */
// const std = ["s","k","T","V"]; 
// std.pop(); 
// console.log(std);
// const std1 = std.slice();
// console.log(std1);
// const spreadStd = [...std];
// console.log(spreadStd);
/** gộp mảng */
const arrStd = ["H","V","k"];
const arrStd2 = ["O","n"];
const arrStd3 = ["z","L",1,2,3];
const output = arrStd.concat(arrStd2,arrStd3);
// const spreadOut = [...arrStd,...arrStd2,...arrStd3];
// console.log(spreadOut);
/** Destructuring */
//const [x,y,z] = arrStd;
// const [x,...rest] = arrStd;
// console.log(rest);
/* rest Function */
// const restFn = (a,...rest) =>{
//   console.log(a,rest);
// }
// restFn(1,2,3,4);