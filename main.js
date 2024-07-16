// JavaScript code
let form = document.querySelector("form");
let inputHeading = document.querySelector("input[placeholder='Heading']");
let inputDescription = document.querySelector("input[placeholder='Description']");
let ul = document.querySelector("ul");
let themeBtn = document.querySelector("#themeBtn");
let body = document.querySelector("body");

// Theme toggle logic
let theme = 0;
themeBtn.addEventListener("click", () => {
    if (theme === 0) {
        body.style.backgroundColor = "red";
        themeBtn.innerText = "Dark";
        theme = 1;
    } else {
        body.style.backgroundColor = "transparent";
        themeBtn.innerText = "Light";
        theme = 0;
    }
});

// Save todo function
const saveTodo = (e) => {
    e.preventDefault();
    let heading = inputHeading.value;
    let description = inputDescription.value;

    if (heading === '' || description === '') {
        alert('Please fill out both heading and description fields.');
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `<strong>${heading}</strong>: ${description} <button class="delete-btn btn btn-sm btn-danger float-end">Delete</button>`;
    li.className = "list-group-item rounded-0";
    ul.appendChild(li);
    form.reset();
};

// Remove todo function
const removeTodo = (e) => {
    if (e.target.classList.contains("delete-btn")) {
        let li = e.target.parentElement;
        if (confirm("Are you sure?")) {
            ul.removeChild(li);
        }
    }
};

// Event listeners
form.addEventListener("submit", saveTodo);
ul.addEventListener("click", removeTodo);
