document.getElementById("changeColorBtn").addEventListener("click", function () {
    const paragraph = document.getElementById("text");
    paragraph.style.color = RandomColor();
    document.body.style.backgroundColor = RandomColor();
});

function RandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Practice 2: Word Counter
function updateCount() {
    const textarea = document.getElementById('textInput');
    const text = textarea.value;

    const charLength = text.length;

    let wordCount = 0;
    if (text.trim() !== "") {
        const words = text.trim().split(/\s+/);
        wordCount = words.length;
    }

    document.getElementById('charCount').textContent = charLength;
    document.getElementById('wordCount').textContent = wordCount;

    const counterElement = document.querySelector('div');

    if (charLength > 200) {
        counterElement.style.color = 'red';
        counterElement.style.fontWeight = 'bold';
    } else {
        counterElement.style.color = 'initial';
        counterElement.style.fontWeight = 'normal';
    }
}

updateCount();

function login(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    const messageElement = document.getElementById('message');
    let message = "";

    if (username === "admin" && password === "1234") {
        message = "Admin login successful!";
    }
    else if (username === "" || password === "") {
        message = "Please fill in all fields";
    }
    else {
        message = `Welcome, ${username}!`;
    }

    messageElement.textContent = message;

    passwordInput.value = '';
}
