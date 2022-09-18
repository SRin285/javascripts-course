// const objectLiteral = {};
// const objectContructor = new Object();
const student = {
  name : "vh",
  age : 20,
  male : true,
  hi : function(){ // method
    console.log("hi VH");
  },
}
// console.log(student.name);
// console.log(student["age"]);
//  thay đổi giá trị
// student.age = 23 ;
// thêm giá trị
student.lastname = "unstoppale";
// xóa giá trị
// delete student["lastname"];
// console.log(student);
// for in
// for(let key in student){
//   if(key ==="name"){
//     console.log("chào name");
//   }
//   const value = student[key];
//   console.log(`${key} : ${value}`);
// }
/** object.keys */
const objectArr  = Object.keys(student);
console.log(objectArr);
/** object.values */
const valueArr = Object.values(student);
console.log(valueArr);
/** object.entries */
const entriesArr = Object.entries(student);
console.log(entriesArr);
/** object.assign */
const school = {
  name : "THCS",
}
// let assignArr = Object.assign(student,school);
// console.log(assignArr);

// let assignArr2 = {...student ,...school}
// console.log(assignArr2);
// Object.freeze
// const newCar = Object.freeze(school);
// console.log();
// Object.seal
// const newSchool = Object.seal(school);
/** copy object */
const clone = {...school};
clone.name = "MNSC";
console.log(school);
console.log(clone);