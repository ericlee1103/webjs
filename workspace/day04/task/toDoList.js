const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', function(){
  const taskStr = prompt('할 일을 추가해주세요', " ");
  const newTask = document.createElement('li');


  const CKBox = document.createElement('input');
  const textBox = document.createTextNode(taskStr);
  const deleteButton = document.createElement('input');
  newTask.appendChild(CKBox);
  newTask.appendChild(textBox);
  newTask.appendChild(deleteButton);
  newTask.style.color = "black";

  CKBox.setAttribute('type', 'checkbox');
  deleteButton.setAttribute('type','button');
  deleteButton.setAttribute('value', '삭제');
  deleteButton.addEventListener('click', function(){
    newTask.remove();
  });
  taskList.appendChild(newTask);
});
