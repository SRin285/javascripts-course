/*(sao chép mảng bằng vòng lặp for)*/
  let output = [];
  const converArr = [1,45,3,65,1,1];
  for( let i = 0 ; i < converArr.length; i++){
    output.push(converArr[i]);
  }
  console.log(output);
/*(đảo ngược i love = evol i)*/
  let str = " i love";
  let out = "";
    for(let i = str.length - 1; i >= 0 ; i--){
      out += str[i];
    }
    console.log(out);