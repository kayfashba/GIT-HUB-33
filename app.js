let form = document.querySelector('.form-validator');
let passwordInput = document.querySelector('.password');
let confirmPasswordInput = document.querySelector('.confirm-password');
let username = document.querySelector('.username');
let surname = document.querySelector('.surname');
let email = document.querySelector('.email');

let usernameError = document.createElement('p');
let surnameError = document.createElement('p');
let emailError = document.createElement('p');
let passwordError = document.querySelector('.input-text');

username.insertAdjacentElement("afterend", usernameError);
surname.insertAdjacentElement("afterend", surnameError);
email.insertAdjacentElement("afterend", emailError);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let password = passwordInput.value;
    let confirmPassword = confirmPasswordInput.value;
    let usernames = username.value.trim();
    let surnames = surname.value.trim();
    let emails = email.value.trim();

    console.log(usernames);
    console.log(surnames);
    console.log(emails);

    if (usernames === "") {
        usernameError.textContent = "Foydalanuvchi ismi kiritilmadi.";
        usernameError.style.color = "red";
        usernameError.style.marginLeft = "40px"
    } else {
        usernameError.textContent = "";
    }
    if (surnames === "") {
        surnameError.textContent = "Familiya kiritilmadi.";
        surnameError.style.color = "red";
        surnameError.style.marginLeft = "-40px";
    } else {
        surnameError.textContent = "";
    }
    if (emails === "") {
        emailError.textContent = "Email kiritilmadi.";
        emailError.style.color = "red";
        emailError.style.marginLeft = "-60px"
    } 
    if (password.length < 8) {
        passwordError.textContent = "Parolda kamida 8ta son bo'lish kerak.";
        passwordError.style.color = "red";
        passwordError.style.marginLeft = "85px";
    } else if (password !== confirmPassword) {
        passwordError.textContent = "Parollar bir-biriga mos kelmaydi.";
        passwordError.style.color = "red";
        passwordError.style.marginLeft = "50px";
    } else {
        passwordError.textContent = "Parol to'g'ri kiritildi!";
        passwordError.style.color = "green";
        passwordError.style.marginLeft = "-40px";
    }
});