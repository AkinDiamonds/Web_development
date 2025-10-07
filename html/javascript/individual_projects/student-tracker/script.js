// localStorage helper functions
function getFromLocalStorage(key){
    const students = localStorage.getItem(key);
    return value? JSON.parse(value) : [];
};

function setInLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};


// function to submit form
function submitForm() {
    const studentForm = document.querySelector(".add-student-form")
    studentForm.classList.add("hide");
    let name = document.querySelector("#add-form-name").value;
    let age = document.getElementById("add-form-name").value;
    let studentClass = document.getElementById("add-form-class").value;
    let imageUrl = document.getElementById("image-url").value;
    let mathScore = document.getElementById("maths-score").value;
    let englishScore = document.getElementById("english-score").value;
    let scienceScore = document.getElementById("science-score").value
    let students = getFromLocalStorage()
    let newStudent = {
        id: Date.now(),
        name: name,
        age: age,
        studentClass: studentClass,
        imageUrl: imageUrl,
        mathScore: mathScore,
        englishScore: englishScore,
        scienceScore: scienceScore,
    }
    students.push(newStudent);
    setInLocalStorage(students);
    display();

}

// display function
function display() {
    getFromLocalStorage();
    // let rows = 
}

// this function is to hide the form persistently
function hideForm() {
    const studentForm = document.querySelector(".add-student-form")
    studentForm.classList.add("hide")
}

hideForm()

function addStudent() {
    const studentForm = document.querySelector(".add-student-form");
    studentForm.classList.remove("hide")
}