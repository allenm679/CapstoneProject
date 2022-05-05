// // document is not defined here

// const userContainer = document.querySelector('#user-info')
// const loginForm = document.querySelector('#login-form')
// const registerForm = document.querySelector('#register-form')

// const baseURL = `http://localhost:4000`


// const login = body => axios.post(`${baseURL}/login`,body).then(res=> {
//     createUserCard(res.data)
// }).catch(err => {
//     console.log(err)
//     alert('Your request did not work.')
// })
// const register = body => axios.post(`${baseURL}/register`,body).then(res => {
//     createUserCard(res.data)
// }).catch(err => {
//     console.log(err)
//     alert('Your request did not work.')
// })

// function loginSubmitHandler(e) {
//     e.preventDefault()

//     let username = document.querySelector('#login-username')
//     let password = document.querySelector('#login-password')

//     let bodyObj = {
//         username: username.value,
//         password: password.value
//     }

//     login(bodyObj)

//     username.value = ''
//     password.value = ''
// }

// function registerSubmitHandler(e) {
//     e.preventDefault()

//     let username = document.querySelector('#register-username')
//     let email = document.querySelector('register-email')
//     let firstName = document.querySelector('#reigster-firstName')
//     let lastName = document.querySelector('#register-lastName')
//     let password = document.querySelector('#register-password')
//     let password2 = document.querySelector('#register-password-2')

//     if(password.value !== password2.value) {
//         alert('Your passwords need to match.')
//         return
//     }

//     let bodyObj = {
//         username: username.value,
//         email: email.value,
//         firstName: firstName.value,
//         lastName: lastName.value,
//         password: password.value
//     }

//     register(bodyObj)

//     username.value= ''
//     email.value = ''
//     firstName = '' 
//     lastName = ''
//     password.value = ''
//     password2.value = ''
// }

// // User is able to register with username
// function createUserCard(data) {
//     userContainer.innerHTML = ''
//     const userCard = document.createElement('div')
//     userCard.classList.add('user-card')

//     userCard.innerHTML = `<p class ="username">Username: ${data.username}</p>
//     <p class= 'email'>Email: ${data.email}</p>
//     <p class= 'first-name'>First Name: ${data.firstName}</p>
//     <p class= 'last-name'> Last Name: ${data.firstName}</p>
//     `

//     userContainer.appendChild(userCard)
// }

// // This isnt defined either
// loginForm.addEventListener('submit',loginSubmitHandler)
// registerForm.addEventListener('submit', registerSubmitHandler)








/////////////////////////////////////////////////////////////////////////////

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});