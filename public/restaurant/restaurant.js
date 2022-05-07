
//code for random restaurant
const getRestaurantBtn = document.getElementById('get-restaurant')

const baseURL = `http://localhost:4000`




const restaurantCallback = ({ data: restaurants}) => displayRestaurants(restaurants)
const errCallback = err => console.log(err.response.data)

const getAllRestaurants = () => axios.get(baseURL).then(restaurantCallback).catch(errCallback)




// let area = document.querySelector('#area')
// let zipcode = document.querySelector('#zipcode')
// let cost = document.querySelector('#cost')
// let category = document.querySelector('#category')


// const displayRestaurants = Math.floor(Math.random() * getAllRestaurants.length)

const displayRestaurants = (arr) => {
    let restaurant = document.querySelector('#get-restaurant')
    let arrLength = arr.length
    // console.log(arr[0])
    // console.log(arrLength)
    for(let i = 0; i < arr.length; i++){
        let restaurantLength = arr[i].restaurant.length
        let random = Math.floor(Math.random() * restaurantLength)
        // console.log(random)
        // console.log(arr[i].restaurant)
        console.log(restaurantLength)
        document.getElementById('doThis').innerHTML = arr[random].restaurant
        console.log(arr[random])
        console.log('test')
        return
    } 
}


getRestaurantBtn.addEventListener("click" , getAllRestaurants);
console.log('test')






