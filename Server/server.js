// require("dotenv").config()

const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())


const {
    login,
    register
} = require('../Login/login')

app.post(`/api/login`, login)
app.post(`/api/register`,register)


app.get(`/api/restaurant`,)


const port = process.env.PORT || 4000



app.listen(port, () => console.log(`Listening on port ${port}!`))