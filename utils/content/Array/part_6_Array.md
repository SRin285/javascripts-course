# array

array : mảng là danh sách chứa các phần tử
2 cách tạo mảng liternal và constructor
liternal : `const student = [];`
constructor : `const student2 = new Array();`
`[0,Number, false, underfined,string,null,arr[],]`
empty array => mảng rộng

# index , length

index : vị trí pt của mảng bắt đầu của mảng bắt đầu từ 0
ex : `console.log(student3[3]);`
length : độ dài của mảng bắt đầu từ mảng
ex : `console.log(student3[student3.length-1]); `

# phương thức hay dùng - Method

length : trả về độ dài của mảng

# revrerse : đảo ngược giá trị trong mảng

ex : `console.log(student.reverse());`

# join : nối các pt của mảng thành chuỗi

ex : `console.log(student.join()); `
` console.log(student.join(" "))`; bỏ dấu liên kết mảng (,);

# includes : kiểm tra phần tử có nằm trong mảng không giá trị trả về boolean

ex `student.includes("hong");`

# indexOf -> trả về vị trí pt (xh đầu tiên) trong mảng

ex : `student.indexOf("hưng");`

# lastIndexOf -> trả về vị trí pt (xh cuối cùngg) trong mảng

ex : `student.lastIndexOf("hưng");`

# push : thêm pt vào cuối mảng

ex :`student.push("huy");`

# unshift : thêm pt vào đầu mảng

ex : `student.unshift("An");`

# pop : xóa phần tử cuối cùng trong mảng

ex : `student.pop();`

# shift : xóa pt đầu tiên

ex :` student.shift();`

# slice(start,end) : tạo một mảng mới sao chép từ mảng ban đầu

start : chọn vị trí chạy để sao chép đến cuối mảng nếu để trống thì sao chép toàn bộ
end : vị trí cuối # 1
`const animals2 = animals.slice();`

# splice(start,deleteCount,item1,item2,item3) : xóa một phần tử trong mảng hoặc thay thế nó

ex : `const pest2 = pest.splice(0);`
start : vị trí pt xóa đầu tiên để xóa đến các pt khác
deleteCount : là số lượng phần tử muốn xóa hoặc thay thế
ex : `const pest3 = pest.splice(0,2);`
item : số pt thay thế pt khác khi bị xóa đi
ex `const pest4 = pest.splice(0,1,"monkkey","dinasoure");`

# sort : sắp xếp các phần tử trong mảng theo chuẩn unicode-16

ex : `const ramdom = [1,5,100,20,50,"vhcity","An"];`
/_hay dùng_/
`const ramdom3 = ramdom.sort((a,b) =>{ if(a > b){ return 1 ; // sắp xếp tăng dần }return -1 ; // sắp xếp giảm dần }) `

# find : trả về phần tử nhìn thấy đầu tiên trong mảng thỏa mãn điều kiện nào đó

ex : `const findYour = ramdom.find((element) => element > 10); `
nếu không tìm thấy nó sẽ trả về undefined

# findIndex : trả về vị trí nhìn thấy đầu tiên trong mảng thỏa mãn điều kiện nào đó

ex : `const findYour = ramdom.findIndex((element) => element > 10);`
nếu không tìm thấy thì nó sẽ trả về -1

# map : duyệt từng pt trong array, và trả về một mảng mới mà không thay đổi mảng ban đầu

- .map(callback(value,index,array));
  ex : trả ra một mảng mới mà các (giá trị) trong mảng cũ nhân 2
  `const listArrr = listNumber.map((value,index,array) =>{ return value * 2 ; })`

# forEach : duyệt từng pt trong array, không có trả về , dùng nhiều trong DOM

-.forEach(callback(value,index,array));
ex : `const listOut = listNumber.forEach((value,index,array)=>{ })`

# filter : loại bỏ , sàng lọc các pt trong mảng thoải mãn một điều kiệu nào đó

-.filter(callback(value,index,array));
ex :` const listNumber = list.filter((element)=> element > 3);`

# some , every => boolean

- ...(callback(value,index,array));
  some : trả về true khi thỏa mãn 1 điều kiện,trả về false khi không thỏa mãn điều kiện nào cả
  ex :`const sumeNumber = list.some((element)=>element > 10);`
  every : chỉ trả về true khi tất cả điều kiện đều đúng nếu không trả về false
  ex : `const everyNumber = list.some((element)=>element > 1);`

# reduce : gom các pt trong mảng lại thành một

-.(callback(value,index,array));
ex : const reduceNumber = list.reduce((a,b)=>{
return a +b ;
},0);

# By value and By referrences

by value : giá trị được lưu trong vùng bộ nhớ
ex :
const number1 = 1;
const number2 = 1 ;
console.log(number1 === number2); `true`
By referrences : tác động lên mảng và object
giá trị được lưu khác vùng bộ nhớ (nói tới bộ nhớ)
ex :
const array1 = [1,2,3];
const array2 = [1,2,3];
console.log(array1 === array2); `false`

# so sánh trong mảng JSON , JSON.stringify , JSON.parse

JSON : javascripts Object Notation là một kiểu dl tuân theo một quy tắc nhất định sd nhiều khi tương tác database
/_
{
"key" : value,
}
_/
JSON.stiingify(value) => convert giá trị sang dưới dạng JSON string
tại sao lại dùng stringify thay vì toString
[1,2,3].toString => "1,2,3";
JSON.stringify([1,2,3]) => "[1,2,3]"
JSON.parse(value) : lấy dl trong database convert từ chuỗi sang số
JSON.parse("[1,2,3]") = [1,2,3]

# sao chép mảng clone

slice();
ex : const std1 = std.slice();
spread operator [...array_name];
ex : const spreadStd = [...std];

# gộp mảng

.concat(array_name1,array_name2,array_name3);
ex : const arrStd = ["H","V","k"];
const arrStd2 = ["O","n"];
const arrStd3 = ["z","L",1,2,3];
const output = arrStd.concat(arrStd2,arrStd3);
.spread operator
ex :
const spreadOut = [...arrStd,...arrStd2,...arrStd3];

# Destructuring (clear code ) lấy các giá trị trong mảng

const [index_name,index_name1] = array_name;
ex :
const [x,y,z] = arrStd;
console.log(x,y,z);

# ret parameter : lấy phần tử còn lại trong mảng cũng được dùng trong function

const [destructuring, ...rest] = array_name;
array :
const [x,...rest] = arrStd;
function :
const restFn = (a,...rest) =>{
console.log(a,rest);
}
restFn(1,2,3,4);

# flat : loại bỏ dấu của mảng con

ex : let outpust = arr2.flat(1);

# isArray(arr) : kiểm tra nó có phải là mảng hay không trả về true and false
