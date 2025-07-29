// 3번 : 데이터 타입

// number, boolean, string, undefined, symbol, null

// // number
// console.log("number타입");
// console.log(3.14, -50, typeof(-50));
// console.log(-Infinity, typeof(-Infinity)); // infinity 양수, 음수
// console.log(NaN, typeof(NaN));

// // number 타입으로 형변환
// let str1 = "123";
// let str2 = "abc";
// let num1 = number(str1);
// let num2 = numbrt(str2);
// console.log(str1, typeof str1, num1, typeof num1); // 123 string 123 number
// console.log(str2, typeof (str2), num2, typeof (num2)); // abc strng NaN number

// string 타입
// console.log("string 타입");
// console.log("hello", typeof "hello");
// console.log('hello', typeof 'hello');
// console.log(`hello`, typeof `hello`);

// let numStr = String(Infinity);
// console.log(numStr, typeof(numStr));

// boolean
console.log(true, typeof true);
console.log(false, typeof(false));
console.log(Boolean(""), typeof Boolean("")); // 빈문자열이므로 false
console.log(Boolean(" "), typeof Boolean(" ")); // 띄어쓰기도 값이므로 true
console.log(Boolean(undefined), typeof(Boolean(undefined))); // false

// Falsy : 자바스크립트에서 논리적으로 거짓으로 평가되는 값
//      ex) false, 0, -0(음수 0), 0n(BigInt 형식의 0), ""(반문자열), null, undefined, NaN
// Truthy : 자바스크립트에서 논리적으로 참으로 평가되는 값
//      ex) true, 1, -1, " ", ..

// true와 false는 boolean타입의 명확한 값으로 참과 거짓을 나타낸다
// Falsy와 Truthy : 특정 값들이 논리적 평가에서 어떻게 처리되는지를 설명하는 개념
// Falsy는 false처럼 동작하고 Truthy는 tru처럼 동작하는 값 들이다.

// Symbol
console.log(Symbol(), typeof(Symbol())); // Symbol() symbol
console.log(Symbol("description"), typeof(Symbol("description")));
// 심볼은 고유함을 보장하며 객체의 키로 심볼을 사용할 수 있다
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1, sym2);

// Object
// 객체 : 키-값 쌍의 집합
let person = {name : "이정훈", age : 20, isStudent : false};
console.log(person, typeof(person)); // { name: '이정훈', age: 20, isStudent: false } object
console.log(person.name, typeof(person.name)); // 이정훈 string
// 객체.key로 해당 value에 접근할 수 있다

// array 배열
let arr = [1, 2, 3];
console.log(arr, typeof arr); // [ 1, 2, 3 ] object

// function 함수
function printNum(){
  console.log(1, typeof 1);
}

console.log(printNum, typeof printNum); // [Function: printNum] function
// function 반환되지만 특별한 객체로 취급된다