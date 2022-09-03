// const names = "Frontend Deverloper";
// const job = "deverloper";
// const authStr = `my name is ${names} i am ${job}`;
// console.log(authStr);
// console.log(authStr.length);
// console.log(names.split(" "));
// console.log(names.split(""));
//console.log(authStr.startsWith("my"));
// console.log(names.includes("end"));
// console.log(names.indexOf("D"));
// console.log(names.replace("Deverloper","Designer"));
// console.log(names.repeat(5));
// console.log(names.slice(0,7));
// console.log(names.trim());
// console.log(names.charAt(5));
// console.log(names.substr(1,10));
// console.log(names.substring(1,9));
/* cho một chuỗi ,
1 - hãy loại bỏ khoảng trống hai bên 
2 - đưa tất cả về in hoa 
3 - thay thế chữ Deverloper -> Designer
4 - lặp lại hai lần */
const myStr = "    Frontend Deverloper D   ";
// let varOne = myStr.trim();
// let varTwo = varOne.toUpperCase();
// let varThree = varTwo.replace("Deverloper","Designer");
// let varFor = varThree.repeat(5);
// console.log(varFor);
// c2 
console.log(
  `Result of myStr : ${myStr.trim()
    .replace("Deverloper","Designer")
    .toUpperCase()
    .toUpperCase()
    .repeat(2)}`
  );