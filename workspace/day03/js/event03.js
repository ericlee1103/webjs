const input = document.querySelector("input[type='button']");
const p = document.querySelector("p");

console.log(input);
console.log(p);

input.addEventListener('ckick', function(){
  with(p.style){
    // javascript에서 객체의 프로퍼티를 더 간단하게 접근할 수 있게 해주는 구문
    // 특정 객체를 지정하여 그 객체의 프로퍼티를 코드 블록안에서 직접 참조할 수 있다
    // 카멜표기법 사용
    fontSize = "30px";
    border = "2px dashed blue";
    width = "100px";
    backgroundColor = "skyblue";
  }
})