let data1 = "1";
let data2 = 1;
console.log(data1, typeof data1, data2, typeof data2);

console.log(data1 == data2); // 값만 비교
console.log(data1 === data2); // 값과 타입 비교

// false로 취급되는 값 => Falsy
// console.log(Boolean(""), Boolean(''), Boolean(``), Boolean(0), Boolean(0.0), Boolean(-0));
console.log(Boolean(1), Boolean(null), Boolean(undefined));

let data;
console.log(data, typeof data); // undefined undefined

if(data){
  console.log("true의 값");
}else{
  console.log("false의 값");
}