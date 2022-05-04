const userContainer = document.querySelector('#user-info')
const loginForm = document.querySelector('#login-form')
const registerForm = document.querySelector('#register-form')

const baseURL = `http://localhost:4000/api`


const login = body => axios.post(`${baseURL}/login`,body).then(res=> {
    createUserCard(res.data)
}).catch(err => {
    console.log(err)
    alert('Your request did not work.')
})
const register = body => axios.post(`${baseURL}/register`,body).then(res => {
    createUserCard(res.data)
}).catch(err => {
    console.log(err)
    alert('Your request did not work.')
})

function loginSubmitHandler(e) {
    e.preventDefault()

    let username = document.querySelector('#login-username')
    let password = document.querySelector('#login-password')

    let bodyObj = {
        username: username.value,
        password: password.value
    }

    login(bodyObj)

    username.value = ''
    password.value = ''
}

function registerSubmitHandler(e) {
    e.preventDefault()

    let username = document.querySelector('#register-username')
    let email = document.querySelector('register-email')
    let firstName = document.querySelector('#reigster-firstName')
    let lastName = document.querySelector('#register-lastName')
    let password = document.querySelector('#register-password')
    let password2 = document.querySelector('#register-password-2')

    if(password.value !== password2.value) {
        alert('Your passwords need to match.')
        return
    }

    let bodyObj = {
        username: username.value,
        email: email.value,
        firstName: firstName.value,
        lastName: lastName.value,
        password: password.value
    }

    register(bodyObj)

    username.value= ''
    email.value = ''
    firstName = '' 
    lastName = ''
    password.value = ''
    password2.value = ''
}

// User is able to register with username
function createUserCard(data) {
    userContainer.innerHTML = ''
    const userCard = document.createElement('div')
    userCard.classList.add('user-card')

    userCard.innerHTML = `<p class ="username">Username: ${data.username}</p>
    <p class= 'email'>Email: ${data.email}</p>
    <p class= 'first-name'>First Name: ${data.firstName}</p>
    <p class= 'last-name'> Last Name: ${data.firstName}</p>
    `

    userContainer.appendChild(userCard)
}

loginForm.addEventListener('submit',loginSubmitHandler)
registerForm.addEventListener('submit', registerSubmitHandler)

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)
        users.push(req.body)
        res.status(200).send(req.body)
    }
}