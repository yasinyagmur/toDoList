const input = document.querySelector('.user--input');
const add = document.querySelector('.add');
const task = document.querySelector('.toDoApp');



const mission = ()=>{
    if(input.value === ''){
        alert('please enter')
    }
    else{
        const appendli = task.appendChild(document.createElement("li"));
        const done = appendli.appendChild(document.createElement('i'));
        const trash = appendli.appendChild(document.createElement('i'));
        done.className = "fas fa-check";
        trash.className = "fas fa-trash-alt";
        appendli.className = "appendli";
        appendli.innerHTML = input.value
        input.value=''

        trash.addEventListener("click", trashli);
        done.addEventListener("click", doneli);
        function doneli(e) {
            e.target.previousSibling.style.textDecoration = "line-through"
        }
        function trashli(e) {
            e.target.parentElement.remove()
        }

    }
}

add.addEventListener('click',mission);