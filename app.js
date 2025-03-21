const inpbox = document.querySelector('#inpbox');
const list = document.querySelector('#list');

//for pressing enter
inpbox.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask(); 
    }
});

//for adding task
function addTask() {
    const taskText = inpbox.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
//create new li
const li = document.createElement("li");
li.classList.add("taskItem");
li.textContent = taskText;

//create delete btn
const deleteBtn = document.createElement('button');
deleteBtn.classList.add('delete-btn');
deleteBtn.textContent = 'Delete';

//delbtn event listner
deleteBtn.addEventListener('click', function() {
    li.remove();
});
li.appendChild(deleteBtn);
list.appendChild(li);
inpbox.value = '';
}


