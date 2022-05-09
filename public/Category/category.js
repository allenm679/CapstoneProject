const baseURL = `http://localhost:4000`



const favrest = document.getElementById('#favrest')




const restaurantCallback = ({ data: restaurants}) => displayRestaurants(restaurants)
const errCallback = err => console.log(err.response.data)


const favRestaurant = body => axios.post(baseURL, body ).then(restaurantCallback).catch(errCallback)
const deleteRestaurant = id => axios.delete(`${baseURL}/${id}`, {type}).then(restaurantCallback).catch(errCallback)

document.getElementById('restbtn').onclick = function () {
    let myRest = document.getElementById("favrest").value
    console.log(`So ${myRest} is your favorite restaurant?`)
}