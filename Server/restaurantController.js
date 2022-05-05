let restaurants = require('./restaurant.json')

module.exports = {
    getRestaurant: (req,res) => {
        res.status(200).send(restaurants)
    }
}



