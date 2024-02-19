// Define HTML elements for easy manipulation
const inputBox = document.getElementById("input-box")
const warningMessage = document.getElementById("warning-message");
const listContainer = document.getElementById("list-container")

// Function to add a task to the list
function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        warningMessage.style.display = "block"; // Show the warning message
        setTimeout(function () {
            warningMessage.style.display = "none"; // Hide the warning message after 2 seconds
        }, 2000);
    } else {
        // Create new list item (li) and add it to the list container
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Create a delete button (span) and add it to the list item
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        warningMessage.style.display = "none"; // Hide the warning message
    }
    // Clear the input box after adding the task
    inputBox.value = '';

    // Save the updated data to the local storage
    saveData();
}

// Add event listener to the list container for user interaction
listContainer.addEventListener("click", function (e) {
    // Check if the clicked element is a list item (li)
    if (e.target.tagName === "LI") {
        // Toggle the "checked" class for the clicked list item
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


// Add event listener to the input box for the Enter key
inputBox.addEventListener("keypress", function (e) {
    // Check if the key pressed was the Enter key
    if (e.keyCode === 13) {
        // Prevent the default action to avoid form submission
        e.preventDefault();
        // Call the addTask function
        addTask();
    }
});


// Function to save the data to local storage
function saveData() {
    localStorage.setItem("listContainer", listContainer.innerHTML);
}

// Function to load the data from local storage
function loadData() {
    listContainer.innerHTML = localStorage.getItem("listContainer");
}

// Call the loadData function to load the saved data when the page is loaded
loadData()