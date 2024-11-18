const toDoInput = document.querySelector('.todo-input')
const addBtn = document.querySelector('.add')

addBtn.addEventListener('click' ,() =>{
    const inputText = toDoInput.value.trim()
    if (inputText === '') {
        Swal.fire("Doldur".);
    }
    const toDoListDiv = document.createElement('div')
    toDoListDiv.innerHTML = `
    <div class="todo-list-input">
                    <input type="checkbox" class="list-input">
                    <p>${inputText}, <em>18.11.2024 , 05:55:05</em></p>
                </div>
                <div class="todo-list-btn">
                    <button class="edit list-btn"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="delete list-btn"><i class="fa-solid fa-trash-can"></i></button>
                </div>
    `

})



