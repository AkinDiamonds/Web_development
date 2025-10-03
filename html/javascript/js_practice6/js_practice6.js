// PRACTICE 1

function saveNote() {
    localStorage.clear()
    const Note = document.getElementById("note-area").value
    localStorage.setItem("SavedNote", `Saved At: ${Date()}. ${Note}`)
    document.getElementById("display").textContent = "Saved!"
}

function loadNote() {
    const Note = localStorage.getItem("SavedNote")
    if (Note) {
        document.getElementById("display").textContent = Note
    } else {document.getElementById("display").textContent = `No Note in localStorage!`}
}


// PRACTICE 2
addEventListener("DOMContentLoaded", function () {
    let visitCount = localStorage.getItem("visitCount")
    const display = document.getElementById("display2")
    if (visitCount) {
        visitCount = Number(visitCount)
        visitCount++
        display.textContent = `You have visited ${visitCount} times`
    } else visitCount = 0
    this.localStorage.setItem("visitCount", visitCount)
})

function resetCount () {
    localStorage.clear()
    document.getElementById("display2").textContent = ""
}

// PRACTICE 3
let mode;
