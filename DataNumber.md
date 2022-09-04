# number 
  số nguyên : 1 2 3 4 5 999
  số thập phân : 1.2 2.2 5.8
# parseInt , parseFloat 
  parseInt($number) : chuyển chuỗi thành kiểu số int
  ex : console.log(parseInt(numberOne));
  parseFloat($number) : chuyển chuỗi thành số thập phân 
  ex : console.log(parseFloat(numberTwo));
# Math.abs ,.floor ,.ceil , round ,.toFixd, ramdom , min , max , pow
  Math.abs : lấy giá trị tuyệt đối
  ex : console.log(Math.abs(numberOne));
  Math.floor : làm tròn xuống 4.3 => 4
  ex : console.log(Math.floor(numberTwo));
  Math.ceil : làm tròn lên 4.3 => 5
  ex :
  Math.round : làm tròn gần nhất 4.3 => 4 , 4.5 => 5
  ex : console.log(Math.round(numberTwo));
  .toFixd(value) : lấy giá trị dư  4.33333 =>4.33 (value = 2 )
  ex : console.log(parseFloat((1/3).toFixed(2)));
  Math.ramdom : chọn số ngẫu nhiên
  ex : console.log(parseFloat((Math.random() * 100).toFixed
  Math.max : trả về số lớn nhất
  ex : console.log(`Max : ${Math.max(1 , 8,7,12)}`);
  Math.min : trả về số bé nhất
  ex : console.log(`Min : ${Math.min(1 , 8,7,12)}`);
  Math.pow : số mũ
  ex : console.log(Math.pow(3,2));
# isNaN , Number.isNaN
  isNaN : Not a Number (value) : không phải số gồm a->z : `true` "1-9" `fales`
  ex : console.log(isNaN(myString));
  Number.isNaN : value bắt buộc phải NaN = `true` , còn mỗi dl không phải NaN = `fales`
  ex : console.log(Number.isNaN(NaN));

# Undefined , null , boolean
  undefined : khai báo biến chưa gắn giá trị thì được hiểu là undefined.
  null : khai báo nhưng để ("") trống rỗng - không có gì 
  boolean : đúng hoặc sai (true and fales)
  falesy values and truethy values 
  falesy values : "", 0, fales, undefined, null
  truethy values : "abc", 1, true, 100 (khác những giá trị falesy thì sẽ là truethy)