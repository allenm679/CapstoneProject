require("dotenv").config()

const express = require('express')
const cors = require('cors')

const app = express()

const {SERVER_PORT} = process.env
const {seed} = require('./seed')

app.use(express.json())
app.use(cors())


const {
    login,
    register
} = require('./loginController')

//change filedirectory later on!
 app.post(`/login`, login)
 app.post(`/register`,register)

 app.post('/seed',seed)

const {
    getRestaurant
} = require('./restaurantController')

app.get(`/restaurants`,getRestaurant)


const port = process.env.PORT || SERVER_PORT



app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}!`))