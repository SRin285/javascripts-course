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
length : độ dài kí tự 
  ex : console.log($name .length)
index : vị trí của kí tự bao gồm cả khoảng trắng
# split 
 split : tách kí tự thành mảng 
 ex : console.log($name.split(" "));
# toLowerCase , toUpperCase
 toLowerCase : chuyển tất cả thành chữ in thường
 toUpperCase : chuyển tất cả thành chữ in hoa
 ex : console.log($name.toLowerCase());