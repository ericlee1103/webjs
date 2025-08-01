// 6번 : async / await

// async 함수는 내부에서 return한 값을 자동으로 Promise.resolve(value)로 변환함
async function getName(){
  return "짱구"; // 자동으로 Promise로 감싸짐
}

// function getName(){
//   return Promise.resolve("짱구");
// }

async function printName(){
  const name = await getName(); // await getName()은 getName()함수의 Promise가 이행(resolve) 될때까지 기다림
  console.log(name);
}

printName();