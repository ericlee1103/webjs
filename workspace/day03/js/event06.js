// 전체동의
NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.filter = Array.prototype.map;
const all = document.querySelector("input.all");
const terms = document.querySelectorAll("input.term");
console.log(all);
console.log(terms);

// 전체동의 체크박스를 클릭할 때 마다 실행되는 이벤트 리스너
all.addEventListener('click', () => {
  terms.forEach((term) => {
    console.log(term);
    term.checked = all.checked;
  });
});

// 약관동의 체크박스를 클릭할 때마다 실행되는 이벤트 리스너
terms.forEach((term) => {
  term.addEventListener('click', () => {
    all.checked = terms.map((term) => term.checked).filter((checked) => checked).length === 4;
  });
});