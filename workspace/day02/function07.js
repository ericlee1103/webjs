//7번 : 재귀함수

// 팩토리얼 : n! 3! => 3 * 2 * 1 = 6

function factorial(n){
  //재귀함수의 종료조건
  if ( n === 0){
    return 1;
  }

  //재귀호출 : n * (n - 1) 팩토리얼
  return n * factorial(n - 1);
}

console.log(factorial(3));
console.log(factorial(5));

// 재귀함수를 이용하여 문자열 뒤집기
//hello => olleh 출력
//함수명 : reverseStr

//1) 순수 재귀와 인덱스 사용
function reverseStr(str, index = 0){
  //종료조건 : 모든 문자를 처리했을 때
  if(index === str.length){
    return "";
  }

  return reverseStr(str, index + 1) + str[index];
}

console.log(reverseStr("hello")); //olleh

//작동과정
//reverseStr("hello", 0) -> (hello, 1) + "h"
//reverseStr("hello", 1) -> (hello, 2) + "e"
//reverseStr("hello", 2) -> (hello, 3) + "l"

//2) slice 사용
function reverseStr1(str){
  //종료조건
  if(str === "" || str.length === 1){
    return str;
  }

  //문자열을 하나씩 처리
  return reverseStr1(str.slice(1)) + str[0];
}

//3) substr 사용
function reverseStr2(str){
  //종료조건
  if(str === "" || str.length === 1){
    return str;
  }

  //substring(1) : 첫번째 문자열을 제거하고 나머지 문자열을 반환
  return reverseStr2(str.substr(1)) + str[0];
}