// localStorage helper functions
function getFromLocalStorage(){
    const students = localStorage.getItem("students");
    return students? JSON.parse(students) : [];
};

function setInLocalStorage(value) {
    localStorage.setItem("students", JSON.stringify(value));
};


// function to add student to localStorage
function addStudent(name, age, studentClass, imageUrl, mathScore, englishScore, scienceScore, averageScore, performanceCategory) {
    const studentForm = document.querySelector(".add-student-form");
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
        averageScore: averageScore,
        performanceCategory: performanceCategory
    }
    
    students.push(newStudent);
    setInLocalStorage(students);
    studentForm.classList.add("hide");
    display();

}

// display function
function display(filter="") {
    let students = filter? search(filter) : getFromLocalStorage();
    let studentList = document.getElementById("js-table-display");
    studentList.innerHTML = "";
    students.forEach(student => {
        let rows = `
        <tr>
            <td><img src ="${student.imageUrl}" alt="image of ${student.name}" width= "50" height="50"></td>
            <td>${student.name}</td>
            <td>${student.studentClass}</td>
            <td>${student.averageScore}</td>
            <td style="color: ${student.performanceCategory === "Excellent"? "green": student.performanceCategory === "Good"?"yellow": "red"}"> ${student.performanceCategory}</td>
            <td> <button class="delete" onclick="deleteBtn(${student.id})">Delete</button> </td>
        </tr>`;

        studentList.innerHTML += rows
    });
    
}
  
// search function
function search(sch) {
    let students = getFromLocalStorage();
    return students.filter(student => student.name.toLowerCase().includes(sch))
}

// delete function
function deleteBtn(id) {
    let students = getFromLocalStorage();
    students = students.filter(student => student.id !== id)
    setInLocalStorage(students)
    display()
}

// this function is to hide the form persistently
function hideForm() {
    const studentForm = document.querySelector(".add-student-form")
    studentForm.classList.add("hide")
}
// hides the form on pageload
hideForm()

// displays the add-student form
function displayAddStudent() {
    const studentForm = document.querySelector(".add-student-form");
    studentForm.classList.remove("hide")
}

// this function uses the addStudent function and inputs real data as arguments. it is attached to the submit button located in the add student form
function add(e) {
    // e.preventDefault();
    let name = document.querySelector("#add-form-name").value;
    let age = document.getElementById("add-form-name").value;
    let studentClass = document.getElementById("add-form-class").value;
    let imageUrl = document.getElementById("image-url").value;
    let mathScore = document.getElementById("maths-score").value;
    let englishScore = document.getElementById("english-score").value;
    let scienceScore = document.getElementById("science-score").value
    age = Number(age);
    mathScore = Number(mathScore);
    englishScore = Number(englishScore);
    scienceScore =Number(scienceScore);
    let averageScore = (mathScore+englishScore+scienceScore)/3;
    let performanceCategory;
    if (averageScore >= 75) {
        performanceCategory = "Excellent"
    } else if (averageScore >= 50 && averageScore < 75) {
        performanceCategory = "Good"
    } else {
        performanceCategory = "Needs Help"
    };
    

    addStudent(name, age, studentClass, imageUrl, mathScore, englishScore, scienceScore, averageScore, performanceCategory);

    document.querySelector(".add-student-form").reset()

}

display()