// Here’s the full list of tasks all together for your **To-Do List** project:

// ---

// ### **To-Do List Project Tasks**

// 1. **HTML Structure**: Create a basic HTML layout with an input field, an "Add" button, and an empty list container.

// 2. **JavaScript Setup**: Link your JavaScript file to your HTML.

// 3. **Add Task Functionality**:
//    - When the "Add" button is clicked, create a new list item (`li`) element with the task's text.
//    - Append this new list item to the task list (`ul` element).
//    - Clear the input field after adding the task.

// 4. **Delete Task Functionality**:
//    - Add a "Delete" button to each task item when it’s created.
//    - Set up an event listener to remove the task item from the list when the "Delete" button is clicked.

// 5. **Edit Task Functionality**:
//    - Add an "Edit" button next to each task item.
//    - When the "Edit" button is clicked, replace the task text with an input field containing the current task text.
//    - Add a "Save" button to confirm the changes.
//    - When the "Save" button is clicked, update the task item with the edited text and remove the input field.

// 6. **Clear All Tasks** (Optional):
//    - Add a button to clear all tasks from the list at once.

// 7. **Styling** (Optional):
//    - Style your task list, buttons, and input field for a polished look.

// ---

// With these steps, you’ll get hands-on practice with `createElement`, `appendChild`, `removeChild`, and updating elements in the DOM.


const form1 = document.querySelector(".form2")

const ol = document.querySelector("ol")

const todo = form1.todo

let counter = 0

function deleteItem(id) {
    const item = document.getElementById(id)
    ol.removeChild(item)
}

form1.addEventListener("submit", function (e) {
    e.preventDefault()
    
    if (todo.value != "") {
        const deleteBtn1 = document.createElement("button")
        const editButton = document.createElement("button")

        deleteBtn1.textContent = "Delete"
        editButton.textContent = "Edit"

        const li = document.createElement("li")

        const div = document.createElement("div")
       
        li.textContent = todo.value
       
        div.id = counter

        todo.value = ""
        div.appendChild(li)
        div.appendChild(deleteBtn1)
        div.appendChild(editButton)
        div.style.display = "flex"
        div.style.gap = "20px"
        deleteBtn1.style.marginBottom = "10px"
        editButton.style.marginBottom = "10px"
        ol.appendChild(div)
        
        deleteBtn1.onclick = function () {
            deleteItem(div.id)
        }
        
        editButton.onclick = function(){
            const input = document.createElement("input")
            const saveBtn = document.createElement("button")
            saveBtn.textContent = "Save"
            saveBtn.style.marginBottom = "10px"
            if (div.children.length < 4){
                div.appendChild(saveBtn)
            }
            if (div.children.length < 3){
                div.appendChild(input) 
                console.log(div.children.length)
            }
            div.insertBefore(input, li)
            input.value = li.textContent
            div.removeChild(li)
            saveBtn.onclick = function(){
                let editedText = input.value
                div.removeChild(input)
                div.removeChild(saveBtn)
                li.textContent = editedText
                div.appendChild(li)
                div.removeChild(deleteBtn1)
                div.removeChild(editButton)
                div.appendChild(deleteBtn1)
                div.appendChild(editButton)
            }
        }


        counter++
    }
})