console.log(.....variable ) ==> in ra giá trị console trong trình duyệt
# variable : biến 
- đặt tên : kiểu viết hoa chữ cái thứ hai 
khai báo : gồm 3 kiểu 
- const : hằng số không thể thay đổi giá trị 
- let  : biến có thể thay đổi được giá trị
- var  : là một biến có thể thay đổi được giá trị (ít khi sử dụng )
# kiểu dữ liệu hay dùng 
  data : number ,string ,boolean , null
# hoistring : khai báo biến được đặt lên trên cùng rồi mới gọi
  const , let => không có  
  var : có hoistring ==> các biến khai báo sẽ đặt lên trên cùng 
# kiểu dữ liệu string : chuỗi 
- String : những đoạn chữ, số nằm trong dấu nháy đơn , đôi , dấu nháp kép ("",'',``).
 (double quotes , single quotes , backticks(template literal)).
 console.log(typeof + tên biến ) : kiểm tra kiểu dl của biến.
 nối chuỗi dùng dấu + (ít dùng)
    vd const name = "hong" 
    "my name " + name +"abc..."
  cách thường dùng backticks `${}`
    const name = "hong" 
    `my name ${name} + abc...`
# length and index 
const name = "Fontend Deverloper"
length : độ dài kí tự 
  ex : console.log($name .length) `38` 
index : vị trí của kí tự bao gồm cả khoảng trắng
# split 
  split : tách kí tự thành mảng 
  ex : console.log($name.split(" ")); `["Fontend","Deverloper"]`
# toLowerCase , toUpperCase
  toLowerCase : chuyển tất cả thành chữ in thường
  toUpperCase : chuyển tất cả thành chữ in hoa
  ex : console.log($name.toLowerCase()); `["fontend deverloper"]`
# startsWith , endsWitch
  startsWith : kiểm tra chuỗi có bắt đầu bằng chữ cho trước hay không (phân biệt hoa thường)
  endsWith :  kiểm tra chuỗi có kết thúc bằng chữ cho trước hay không (phân biệt hoa thường)
  ex: console.log(authStr.startsWith("Fontend")); `true`
# includes 
  includes : kiểm tra chuỗi có chứa hay không ?
  ex : console.log(names.includes("end")); `true`
# indexOf , lastIndexOf
  indexOf : kiểm tra vị trí của từng kí tự 
  lastIndexOf : kiểm tra vị trí của từng kí tự tồn tại cuối cùng trong chuỗi
  ex : console.log(names.indexOf("D")); `8`
# replace , repeat
  replace : thay thế chữ trong chuỗi
  repeat : lặp lãi với sl được cho trước
  ex : console.log(names.replace("Deverloper","Designer")); `["Fontend Designer"]`
  ex : console.log(names.repeat(5)); `["Fontend Designer * 5"]`
# slice 
  slice : cắt chuỗi từ vị trí start -> end - 1
  ex : console.log(names.slice(0,7)); `["Frontend"]`
# trim , trimStart , trimEnd
  trim : loại bỏ khoảng trống hai bên
  trimStart : bỏ khoảng trống ở bên trái
  trimEnd : bỏ khoảng trống ở bên phải 
  ex : console.log(names.trim());
# charAt 
  charAt :lấy kí tự trong chuỗi 
  ex : console.log(names.charAt(5)); `e`
# substr , substring
  subStr : lấy ra 1 phần của chuỗi (index, length)
  subsrtring : lấy ra kí tự (start , end - 1 )
  ex : console.log(names.substr(1,5)); `ronte` 
  ex : console.log(names.substring(1,5)); `ront`