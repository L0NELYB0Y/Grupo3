//Seleção de Elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldInputvalue;

//Funções
const saveTodo = (text) =>{

    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button")
    doneBtn.ClassList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.ClassList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.ClassList.add("remove-todo")
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)

    todoInput.value = ""; 
    todoInput.focus();
};

const toggleforms=()=> {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    editList.classList.toggle("hide");
};

const updateTodo = (text) =>{

    const todos = document.querySelectorAll(".todo")

    todos.forEach((todo) => {

        let todoTitle = todo.querySelector("h3")

        if(todoTitle.innerText === oldInputvalue) {
            todoTitle.innerText = text;
        }



    })


}





//Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if (iniputValue) {
saveTodo(inputValue)
 }
});

document.addEventListener("click", (e) => {

 const targetEl = e.target;
 const parentEl = targetEl.closest("div");
 let todoTitle;
 
 if(parentEl && parentEl.querySelector("h3")){
  todoTitle = parentEl.querySelector("h3").innerText;
 }
if(targetEl.classList.constains("finish-todo")){
    parentEl.classList.toggle("done"); 
}

 if(targetEl.classList.constains("remove-todo")){
    parentEl.remove();
 }
 if (targetE.classiclist.contains("edit-todo")){
    toggleforms();
    editInput.value=todoTitle
    oldinputvalue=todoTitle
}
});

canceleditbtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleforms();
});

editform.addEventListener("submit", (e) => {
    e.preventDefault();
    const editinputvalue = editInput.value; 

    if(editinputvalue){
       update(editinputvalue);

    }

    toggleforms();
 });