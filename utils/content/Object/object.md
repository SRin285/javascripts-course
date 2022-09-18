# Object : tập hợp các key và value 
  -object literal
    const objectLiteral = {
      key : value,
      key1 : value,
    };
  -object constructor
    const objectContructor = new Object();
    ex : 
    const student = {
    name : "vh",
    age : 20,
    male : true,
    hi : function(){ // method
      console.log("hi VH");
    }
  }
# cách truy xuất . and []
  Dot notation object.key
  ex : console.log(student.name);
  Bracket notation ["key"] => hay dùng
  ex : console.log(student["age"]);
# thay đổi giá trị của object
  thay đổi giá trị 
  ex : student.age = 20;
# thêm  giá trị 
  ex : student.isDeverloper = value ;
# xóa giá trị trong object - delete
  delete student["age"];
# loop (for in) trong object 
  ex : 
  for(let key in student){
  if(key ==="name"){
    console.log("chào name");
  }
  const value = student[key];
  console.log(`${key} : ${value}`);
  }
# phương thức thao tác với Object
# object.keys(object) : trả về một mảng chứa tất cả các keys của object
  ex : const objectArr  = Object.keys(student);
  `['name', 'age', 'male', 'hi', 'lastname']`
# object.values(object) :trả về một mảng chứa các giá trị (value) của object
  ex : const valueArr = Object.values(student);
  `['vh', 20, true, ƒ, 'unstoppale']`
# object.entries(object) : trả về một mảng nested(mảng trong mảng) gồm có key và value [["name","Vh"],["age","24"]...]
  ex : const entriesArr = Object.entries(student);
  `[['name', 'vh'],['age', 20],['male', true],['male', true],['hi', ƒ],['lastname', 'unstoppale']]`
# object.assign(object1 , object2) : copy value (gộp object) hoặc {...object1 ,...object2}
  ex : 
  const school = {
  name : "THCS",
  }
  let assignArr = Object.assign(student,school);
  console.log(assignArr);

  let assignArr2 = {...student ,...school}
  console.log(assignArr2);
# object.freeze(object) : đóng băng object ngăn chặn chỉnh sửa key và value của object
  ex : 
  const newCar = Object.freeze(school);
# Object.seal(object) : cho phép chỉnh sửa nhưng không cho phép thêm key mới
  ex : const newSchool = Object.seal(school);
# cách sap chép một Object {...object}
  ex : const clone = {...school};