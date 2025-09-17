let aboutmebtn = document.getElementById("aboutmebtn")
let contactbtn = document.getElementById("contactbtn")
let skillsbtn = document.getElementById("skillsbtn")
let aboutme = document.getElementById("aboutme")
let contact = document.getElementById("contact")
let skills = document.getElementById("skills")

aboutmebtn.onclick =() => {
    aboutme.style.display = 'block'
    contact.style.display = 'none'
    skills.style.display = 'none'
    aboutmebtn.style.backgroundColor = 'blue'
    aboutmebtn.style.color = 'white'
    contactbtn.style.backgroundColor = 'white'
    contactbtn.style.color = 'black'
    skillsbtn.style.backgroundColor = 'white'
    skillsbtn.style.color = 'black'
}

contactbtn.onclick =() => {
    aboutme.style.display = 'none'
    contact.style.display = 'block'
    skills.style.display = 'none'
    contactbtn.style.backgroundColor = 'blue'
    contactbtn.style.color = 'white'
    aboutmebtn.style.backgroundColor = 'white'
    aboutmebtn.style.color = 'black'
    skillsbtn.style.backgroundColor = 'white'
    skillsbtn.style.color = 'black'
}

skillsbtn.onclick =() => {
    aboutme.style.display = 'none'
    contact.style.display = 'none'
    skills.style.display = 'block'
    contactbtn.style.backgroundColor = 'white'
    contactbtn.style.color = 'black'
    aboutmebtn.style.backgroundColor = 'white'
    aboutmebtn.style.color = 'black'
    skillsbtn.style.backgroundColor = 'blue'
    skillsbtn.style.color = 'white'
}