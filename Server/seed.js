require('dotenv').config()
const Sequelize = require('sequelize')

const {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect:'postgres',
    dialectOptions:{
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req, res) => {
        sequelize.query(`


        create table users (
            user_id serial primary key, 
            username varchar(20),
            first_name varchar(100), 
            last_name varchar(100), 
            email varchar(50), 
            password varchar(30)
        );

        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}