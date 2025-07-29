//8번 : 연산자
//2) 논리연산자

//논리합 or(||) : 두 값 중 하나라도 Truthy라면 결과는 true
//단축평가 : 앞의 값이 truthy면 뒤의 값은 평가되지 않고 앞의 값을 반환한다(주로 기본값 설정에 사용됨)
let data1 = undefined || "기본값";
let data2 = "값 있음" || "기본값";
console.log(data1);
console.log(data2);

let data = 10;
console.log(data, typeof data);
data = data || 1; //data는 10, truthy한 값이므로 기존값 유지
console.log(undefined || 1);
console.log(undefined || undefined); // undefined로 출력(true나 false로 출력되지않음)
console.log(1 || undefined);
console.log(data >= 10 || 0); //앞에가 truthy이므로 오른쪽값은 보지 않는다

// && : 선행 조건식이 false면 뒤로 넘어가지 않고 선행조건식이 true일 때만 뒤에 있는 값으로 대체된다
let data3 = true && "실행됨";
console.log(data3);
console.log(1 && undefined);
console.log(null && undefined);

//! 논리부정연산자
console.log(!null);
console.log(!true);

//병합연산자 ?? : 왼쪽 값이 null 또는 undefined인 경우에만 오른쪽 값을 반환한다
let user = null;
let value = "default value";

console.log(user, typeof user, value, typeof value);
//          null    object      default value   string
console.log(null ?? value); //default value
console.log(undefined ?? null);
console.log(value ?? null);

//옵셔널 체이닝 ?.
let users = {
  profile : { name : null, age :5 },
};
console.log(users);
let userName = users?.profile?.name;
console.log(userName);

let data10 = users?.profile.name ?? value;
console.log(data10);

//삼항연산자 ?:
let age = 20;
let isAdult = age >= 19 ? "성인" : "미성년자";
console.log(isAdult);
