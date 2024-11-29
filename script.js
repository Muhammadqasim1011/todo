let submit = document.getElementById('button-submit');
let todoContainer = document.getElementById('todo-item');
let input = document.getElementById('input-text');

let todoArray = [];

function addTodo() {
    let inputValue = input.value;
    if (inputValue.trim() === '') {
        alert("Empty Input")
    } else{
        todoArray.unshift(inputValue)
        render();
    }
    input.value = '';
}
function render(){
    todoContainer.innerHTML = '';  
    todoArray.forEach(element => {
        let li = document.createElement('li');
        li.textContent = element;
        li.classList.add('todo')
        todoContainer.appendChild(li);
    });
}
submit.addEventListener('click', ()=> {
    addTodo()
});
input.addEventListener('change', ()=> {
    addTodo()
});

render();