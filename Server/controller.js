let restaurants = require('../Server/restaurant.json')

module.exports = {
    getRestaurant: (req,res) => {
        res.status(200).send(restaurant)
    }
}



