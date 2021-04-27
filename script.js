var button = document.getElementById("enter");
var input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");
var deleteButton = document.getElementsByClassName("gg-trash");
var clearButton = document.getElementById("deleteAll");

function strikeThrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

function inputLength() {
    return input.value.length;
}


function createListElement() {
    var divClassWrapper = document.createElement("div");
    var li = document.createElement("li");
    var trash =document.createElement("div")
    
    divClassWrapper.classList.add("li-wrapper");

    li.appendChild(document.createTextNode(input.value));
    divClassWrapper.appendChild(li);
    ul.appendChild(divClassWrapper);

    trash.classList.add("gg-trash");
    divClassWrapper.appendChild(trash);
    ul.appendChild(divClassWrapper);
    deleteParentNodeOnClick();

    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function deleteNodeOnClick(e) {
    var trash = document.querySelectorAll("gg-trash");
    for (var i = 0; i < li.length; i++) {
        console.log(e);
        this.parentNode.remove();
    }
}

function deleteParentNodeOnClick() {
    for (var i = 0; i < li.length; i++) {
        deleteButton[i].addEventListener("click", deleteNodeOnClick);
    }
}


function clearList() {
    ul.innerHTML = "";
}

clearButton.addEventListener("click", clearList);
ul.addEventListener("click", strikeThrough);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
deleteParentNodeOnClick();
