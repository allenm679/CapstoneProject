require("dotenv").config()

const express = require('express')
const cors = require('cors')
// const path = require('path')

const app = express()

const {SERVER_PORT} = process.env
// const {seed} = require('./seed')

app.use(express.json())
app.use(cors())


const {
    login,
    register
} = require('../Login/login')

//change filedirectory later on!
 app.post(`/login`, login)
 app.post(`/register`,register)

//  app.post('/seed',seed)


// app.get(`/`,)


const port = process.env.PORT || 4000



app.listen(port, () => console.log(`Listening on port ${port}!`))