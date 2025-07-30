const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', function(){
  const taskStr = prompt('할 일을 추가해주세요', " ");
  const newTask = document.createElement('li');

  const CKBox = document.createElement('checkbox');
  const planList = document.createElement('text'); 
  const deleteButton = document.createElement('input');
  newTask.appendChild(CKBox);
  newTask.appendChild(planList);
  newTask.appendChild(deleteButton);

  CKBox.setAttribute()
  taskList.appendChild(newTask);
});
