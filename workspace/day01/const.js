// 2번 : const 상수(var.js, let.js랑 같이보기)

// console.log(data); // 호이스팅은 되지만 초기화전에는 접근 불가능 ReferenceError 발생
// 선언 자체는 위로 끌어올려지지만 일시적 사각지대(TDZ Temporal Dead Zone)에 갇혀있어서 초기화 전에는 접근하면 안됨!
const data1 = 10;
console.log(data1, typeof data1);
data1 = 20; // data1은 const로 선언되어 있어 값 변경 불가
console.log(data1, typeof data1);