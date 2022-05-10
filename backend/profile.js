let favRestaurant = require ("./restaurant.json")
let deleteRestaurant = require ("./restaurant.json")

let globalId = 57

module.exports = {

    favRestaurant:(req, res) => {
        const {restaurant} = req.body
        const newRest = {
            id: globalId,
            restaurant
        }
        favRestaurant.push(newRest)
        res.status(200).send(newRest)
        globalId++
    },

    deleteRestaurant: (req, res) => {
        let index = deleteRestaurant.findIndex(elem => elem.id === + req.params.id)
        deleteRestaurant.splice(index , 1)
        res.status(200).send()
    },

    getAllFavs: (req,res) => {
        console.log(favRestaurant)
        let favs = favRestaurant.filter( (object) => {
        if(object.id >= 55) {
            return object[object.id - 1].restaurant
        }
        })
        
        console.log(favs)
        res.status(200).send(favs)
    }
}