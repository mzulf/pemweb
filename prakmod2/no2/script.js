let taskList = document.getElementById('task-list');
let newTaskInput = document.getElementById('new-task');

// Fungsi untuk menambahkan tugas
function addTask() {
    let taskText = newTaskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement('li');
    
    // Membuat elemen teks untuk tugas
    let span = document.createElement('span');
    span.classList.add('task-text');
    span.textContent = taskText;

    // Tombol edit
    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.onclick = function() {
        editTask(span);
    };

    // Tombol delete
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.onclick = function() {
        deleteTask(li);
    };

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    
    taskList.appendChild(li);
    newTaskInput.value = "";
}

// Fungsi untuk menghapus tugas
function deleteTask(taskItem) {
    taskList.removeChild(taskItem);
}

// Fungsi untuk mengedit tugas
function editTask(taskSpan) {
    let newTaskText = prompt("Edit your task:", taskSpan.textContent);
    if (newTaskText !== null && newTaskText.trim() !== "") {
        taskSpan.textContent = newTaskText;
    } else if (newTaskText.trim() === "") {
        alert("Task cannot be empty!");
    }
}
