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

/_(cho mảng gồm nhiều giá trị . viết chương trình loại bỏ các giá trị falsy ra khỏi mảng và chỉ dữ lại giá trị truthy )_/
ex :
const arr = [
1,
100,
false,
null,
"evondev",
"",
undefined,
"javascrrip",
[1, 2, 3],
NaN,
];
let out = arr.filter((item) => Boolean(item));
console.log(out);
/_( đảo ngược số nguyên. ví dụ 1234 - > 4321 )_/
math.sign(123) -> 1
math.sign(-1234) -> -1
ex :
let reverseNumber = (number) => {
const value = parseInt(
number.toString().split("").reverse().join("") \_ Math.sign(number)
);
console.log(value);
};
reverseNumber(1234);
/_(4. viết chương trình có tên fizzbuzz với đầu vào là một số nguyên , và cho chạy từ 1 -> số đó rồi kiểm tra nếu chia hết cho 2 thì in ra chứ "fizz",nếu chia hết cho 3 thì in ra chữ "buzz",nếu chia hết cho 2 và 3 thì in ra fizzbuzz)_/
ex :
const fizzbuzz = (number) => {
for (let i = 1; i <= number; i++) {
if (i % 2 === 0 && i % 3 === 0) {
console.log("fizzbuzz" + i);
} else if (i % 2 === 0) {
console.log("fizz" + i);
} else if (i % 3 === 0) {
console.log("buzz" + i);
}
}
};
fizzbuzz(15);
/_(cho một chuỗi bất kì, đếm số lượng kí tự 'vowels' = u e o a i có trong chuỗi. )_/
ex :
const wowels = (str) => {
let coutn = 0;
let check = "ueoai";
for (let i of str.toLowerCase()) {
if (check.includes(i)) {
coutn += 1;
}
}
console.log(coutn);
};
wowels("evondev");
/_(6 input [1,2,2,1,3,4,2,4,3,2,1,4,5,5,5,5,5,5] output : [1,2,3,4,5])_/
ex :
const reverseArr = (arr) => {
let result = [];
for (let i = 0; i < arr.length; i++) {
if (!result.includes(arr[i])) {
result.push(arr[i]);
}
}
return result;
};
console.log(reverseArr(arr));
/_(8 : input [1,2,2,3,4] output [[1,2],[2,3],[4]])_/
ex :
const splitArr = (arr, number) => {
let result = [];
for (let i = 0; i < arr.length; i += number) {
result.push(arr.slice(i, i + number));
}
return result;
};
console.log(splitArr([1, 2, 3, 4, 5], 2));
