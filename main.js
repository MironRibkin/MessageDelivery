const addbutton = document.querySelector(".addButton")
const input = document.querySelector(".mesage")
const content = document.querySelector(".content")
const noMessWindow = document.querySelector(".no-mess-window")

function validateMessageInput() {
    if (input.value === "") {
        noMessWindow.style.display = "block";
        setTimeout(function () {
            noMessWindow.style.display = "none"
        }, 2000)
    }
}

function createMessage() {
    const message = document.createElement("div");
    message.className = "texmes";
    message.innerHTML = input.value;
    return message;
}

addbutton.addEventListener("click", function () {
    validateMessageInput();
    content.appendChild(createMessage());
    input.value = "";
})

