const input = document.querySelector(".user--input");
const add = document.querySelector(".add");
const task = document.querySelector(".toDoApp");

const mission = () => {
  if (input.value === "") {
    alert("Please Enter An Event");
  } else {
    const appendli = task.appendChild(document.createElement("li"));
    appendli.innerHTML = input.value;

    const done = appendli.appendChild(document.createElement("i"));
    // console.log(done)
    const trash = appendli.appendChild(document.createElement("i"));
    // console.log(trash)

    appendli.className = "appendli";
    done.className = "fas fa-check";
    trash.className = "fas fa-trash-alt";
    input.value = "";

    trash.addEventListener("click", trashli);
    done.addEventListener("click", doneli);
    function doneli(e) { 
      appendli.style.textDecoration = "line-through";
      input.focus();
      done.addEventListener("click", redoneli);
      function redoneli(e) {
        appendli.style.textDecoration = "none";
      }
      
    }

    function trashli(e) {
      e.target.parentElement.remove();
      input.focus();
    }

    input.focus();
  }
};

add.addEventListener("click", mission);

window.onload = () => {
  input.focus();
};

input.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    add.click();
  }
});
