const baseURL = `http://localhost:4000`


const favrest = document.getElementById('#favrest')




const restaurantCallback = ({ data: restaurant}) => displayRestaurants(restaurant)
const errCallback = err => console.log(`${JSON.stringify(err.response.data)}`) 


const favRestaurant = body => axios.post(`${baseURL}/favrest`, body ).then(addRestaurants).catch(errCallback)
const getAllFavs = () => axios.get(`${baseURL}/getallfavs`).then(restaurantCallback).catch(errCallback)
const deleteRestaurant = id => axios.delete(`${baseURL}/${id}`, {type}).then(restaurantCallback).catch(errCallback)

document.getElementById('restbtn').onclick = function () {
    let myRest = document.getElementById("favrest").value
    console.log(`So ${myRest} is your favorite restaurant?`)
    const body = {
        restaurant: myRest
    }
    favRestaurant(body)
}


const addRestaurants = (arr) => {
let result = document.createElement('h3')
result.textContent = `${arr.data.restaurant}`
document.body.append(result)
    console.log(arr)
  return document.body.append(result)
}


const displayRestaurants = (arr) => {
    let restaurants = arr.forEach(element => {
        addRestaurants(element)
    });
}

getAllFavs()

