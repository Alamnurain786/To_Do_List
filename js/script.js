const inputBox = document.getElementById("input-box")
const warningMessage = document.getElementById("warning-message");
const listContainer = document.getElementById("list-container")

function addTask() {
    if (inputBox.value === '') {
        warningMessage.style.display = "block"; // Show the warning message
        setTimeout(function () {
            warningMessage.style.display = "none"; // Hide the warning message after 2 seconds
        }, 2000);
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        warningMessage.style.display = "none"; // Hide the warning message
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("listContainer", listContainer.innerHTML);
}

function loadData() {
    listContainer.innerHTML = localStorage.getItem("listContainer");
}
loadData()