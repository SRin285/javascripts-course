# vòng lặp for

/_
for(let i = 0 ; i <=number.length ;i++)
_/
ex :
const loopNumber = [1, 2, 3, 4, 5];
for (let i = 0; i <= loopNumber.length; i++) {
console.log(`vòng lặp thứ : ${i}`);
}

# break : dừng vòng lặp tại thời điểm đó

ex :
const loopNumber = [1, 2, 3, 4, 5];
for (let i = 0; i < loopNumber.length; i++) {
if ( loopNumber[i] === 3){
break;
}
console.log(`vòng lặp đến : ${loopNumber[i]}`);
}

# continue : bỏ qua giá trị tại thời điểm check điều kiện đó

ex :
const loopNumber = [1, 2, 3, 4, 5];
for (let i = 0; i < loopNumber.length; i++) {
if ( loopNumber[i] === 3){
continue ;
}
console.log(`vòng lặp đến : ${loopNumber[i]}`);
}
ex : lặp từ phải sang trái
for (let i = loopNumber.length - 1; i >= 0; i--) {
console.log(`vòng lặp đến : ${i}`);
}

# vòng lặp chứa vòng lặp (nested loop)

ex :
for (let i = loopNumber.length - 1; i >= 0; i--) {
console.log(`vòng lặp thứ: ${loopNumber[i]}`);
for (let i = loopNumber.length ; i >= 0; i--) {
console.log(`giá trị : ${i}`);
}
}
/_(sao chép mảng bằng vòng lặp for)_/
let output = [];
const converArr = [1,45,3,65,1,1];
for( let i = 0 ; i < converArr.length; i++){
output.push(converArr[i]);
}
console.log(output);
/_(đảo ngược i love = evol i)_/
let str = " i love";
let out = "";
for(let i = str.length - 1; i >= 0 ; i--){
out += str[i];
}
console.log(out);

# vòng lặp While và do while

while(điều kiện){
body code
điều kiện dừng
condition = conditin+ 1
condition += 1;
condition++ ;
}
check điều kiện nếu đúng thì chạy còn không thì không chạy nếu không có điều kiện dừng thì chạy vô hạn
do{
điều kiện dừng
}while(điều kiện đúng)
làm một việc gì đó trước sau đó mới check điều kiện
ex :
let number2 = 1;
do {
console.log(number2);
number2++;
} while (number2 < 10);

# vòng lặp for of thường được dùng trong arr , object , str

for ( variable of arr){}
ex :
let a = [];
const number = [1, 2, 3, 4];
for (let value of number) {
a.push(value);
}
console.log(a);

let str = "i love";
let output = "";
for (let value of str) {
output += value;
}
console.log(output);
