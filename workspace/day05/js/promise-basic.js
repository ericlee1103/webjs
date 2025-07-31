//3번 : 프로미스 기초

const promise = new Promise(function (resolve, reject){
  check = true;
  if(check){
    resolve("성공");
  }else{
    reject("실패");
  }
});

// console.log(promise);
// Promise 객체는 출력되지 않는다
// 비동기 작업의 결과를 다루는 객체이므로 객체 자체의 상태를 출력하는 것이 아닌
// Promise 객체가 이행되거나 거부되었을 때의 결과가 출력된다

promise.then(console.log).catch(console.log);
//Promise 객체의 then 메소드 호출
// then 메소드는 성공적으로 이행된 경우를 처리함
// catch 메소드는 거부된 경우를 처리함