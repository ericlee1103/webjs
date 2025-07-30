//1. 학생의 정보를 저장하는 객체를 만들고 그 학생의 정보를 출력하기
//학생정보 : 이름, 나이, 성적(1과목)
//1) 객체에 최소 3명의 데이터를 추가하고 이름과 성적 출력하기
function Student(name, score, age) {
  this.name = name;
  this.age = age;
  this.score = score;
}

student1 = new Student('이정훈', 50);
student2 = new Student('호식이', 2);
student3 = new Student('단비', 80);

console.log(student1);
console.log(student2);
console.log(student3);
//2) 객체에서 이름 키에 해당하는 값들만 출력하기
console.log(student1.name);
console.log(student2.name);
console.log(student3.name);
//3) 객체에 새로운 속성(학년)을 추가하고 객체 전체 출력하기(for문 사용)
let stuInfo = [student1, student2, student3];
for(let i = 0; i < stuInfo.length; i++){
  stuInfo[i].grade = undefined;
  console.log(stuInfo[i]);
}
//2. 배열의 모든 요소를 2배로 증가시켜 새로운 배열을 만들어 출력하기
//1) 2배 증가시켜 새로운 배열로 출력하기
//2) 배열의 길이를 구하고 출력하기

//3) 배열에서 특정요소를 삭제하기(3) 메소드 사용
//4) 배열에서 특정 값(cat)을 검색하고 그 값의 인덱스 출력하기
const animals = ['dog', 'cat', 'rabbit'];
for(let i = 0; i < animals.length; i++){
  if(animals[i] === 'cat'){
    console.log(i);
  }
}

//5) 배열의 첫번째와 마지막요소를 제거한 뒤 남은 배열 출력하기
const colors = ['red', 'blue', 'green', 'yellow'];
colors.pop();
colors.shift();
console.log(colors);
//3. 혼합문제
//1) 배열의 요소를 객체로 변환하여 새로운 배열을 만들기
//  주어진 배열의 값을 객체의 value 속성으로 저장할것
const data = [10, 20, 30];

//출력결과 : [{value: 10}, {value: 20}, {value: 30}]

//2) 배열을 활용하여 특정값을 기준으로 객체 업데이트하기
const users = [
  {id : 1, name : "짱구", age : 5, subject : 'javascript'},
  {id : 2, name : "철수", age : 5, subject : 'javascript'},
  {id : 3, name : "맹구", age : 5, subject : 'javascript'}, 
];
//id가 2인 객체의 나이를 6으로 변경, subject를 'web표준'으로 변경
users.forEach(user => {
  if (user.id === 2) {
    user.age = 6;
    user.subject = "web표준";
  }
});

console.log(users);
//3) 배열의 요소를 모두 더하여 총합 출력하기
const numbers2 = [2, 5, 20, 10];
let result = 0;
for(let i = 0; i < numbers2.length; i++){
    result += numbers2[i];
}
console.log(result);