/*( bài 1 : đảo ngược chuỗi :my nam is hong => hong is nam my )*/
// const reverse = (str) =>{
//   if( !str ){
//     return null ;
//   }
//   const newString = str.split(" "); 
//   const  reverString = newString.reverse();
//   return reverString.join(" ");
// }
// console.log(reverse("my name is hong"));
/*( bài 2 : đảo ngược chuỗi bao gồm các kí tự :my nam is hong => hong is nam my )*/
// c1
// const reverseword = (str) =>{
//   if( !str ){
//     return null ;
//   }
//   const newString = str.split(""); 
//   console.log(newString);
//   const  reverString = newString.reverse();
//   return reverString.join("");
// }
// console.log(reverseword("i love"));
// c2
/**   */
// const reverseword = (str) =>{
//   if( !str ){
//     return null ;
//   }
//   const newString = str.split(" ").map((item) => {
//     return item.split("").reverse().join("");
//   }); 
//   console.log(newString);
//   const output = newString.reverse().join(" ");
//   console.log(output);
//   return output;
// }
// console.log(reverseword("i love"));
/*( bài 3 : in hoa chữ cái đầu => input hong is nam my output => Hong Is Name My)*/
// function captitalizeWord(word ="") {
//   if(word.length === 0) return null;
//   const newStr = word.toLocaleLowerCase().charAt(0).toUpperCase();
//   const outher = word.toLocaleLowerCase().slice(1);
//   return `${newStr}${outher}`
// };
// const capitalizeStr = (str)=>{
//   if(!str){
//     return null ;
//   }
//   const yourStr = str.split(" ").map((item)=> captitalizeWord(item)).join(" ") ;
//   return yourStr;
// }
// console.log(capitalizeStr("hong sieu cap vip pro"));