let favRestaurant = require ("./restaurant.json")
let deleteRestaurant = require ("./restaurant.json")

module.exports = {
    favRestaurant: (req, res) => {
        res.status(200).send(favRestaurant)
    },

    deleteRestaurant: (req, res) => {
        let index = deleteRestaurant.findIndex(elem => elem.id === + req.params.id)
        deleteRestaurant.splice(index , 1)
        res.status(200).send(deleteRestaurant)
    }
}