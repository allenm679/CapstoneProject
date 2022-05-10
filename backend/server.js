require("dotenv").config()

const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

const {SERVER_PORT} = process.env
const {seed} = require('./seed')

app.use(express.json())
app.use(cors())
app.use("./styles.css", express.static(path.join(__dirname,"../public/home/styles.css")));
app.use("./main.js", express.static(path.join(__dirname,"../public/home/main.js")));
app.use("../Pictures", express.static(path.join(__dirname, "../public/Pictures")))
app.use("./category.js", express.static(path.join(__dirname, "../public/Category/category.js")))
app.use("./login.js", express.static(path.join(__dirname, "../public/Login/login.js")))
app.use("restaurant.js", express.static(path.join(__dirname, "../public/restaurant/restaurant.js")))

app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, '../public/home/index.html')) })

// app.get('/', (req, res) => {     res.sendFile(path.join(__dirname, '../public/Category/category.html')) })

// app.get('/', (req, res) => {     res.sendFile(path.join(__dirname, '../public/Login/login.html')) })

// app.get('/public/restaurant/restaurant.html', (req, res) => {     res.sendFile(path.join(__dirname, '../public/restaurant/restaurant.html')) })

const {
    login,
    register
} = require('./login')

//change filedirectory later on!
 app.post(`/login`, login)
 app.post(`/register`,register)

 app.post('/seed',seed)

const {
    getRestaurant
} = require('./restaurantController')

app.get(`/getall`,getRestaurant)

const {
    favRestaurant,
    deleteRestaurant,
    getAllFavs
} = require("./profile") 

app.post('/favrest', favRestaurant)
app.delete('/', deleteRestaurant)
app.get('/getallfavs', getAllFavs)


const port = process.env.PORT || 4000



app.listen(port, () => console.log(`Listening on port ${port}!`))