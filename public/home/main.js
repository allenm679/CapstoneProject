// For food slider on homepage

// let counter = 1
// setInterval(function() {
//     document.getElementById("radio", +counter).checked = true
//     if(counter > 4){
//         counter = 1
//     }
// }, 5000)

const carouselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide img')


//buttons
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')


//counter

let counter = 1
const size = carouselImages[0].clientWidth

carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)'

// button listeners

nextBtn.addEventListener('click',  () => {
    if(counter >= carouselImages.length -1 ) return
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter++ 
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)'
})

prevBtn.addEventListener('click',  () => {
    if(counter <= 0) return
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter-- 
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)'
})

carouselSlide.addEventListener('transitioned', () => {
    if(carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none'
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)'
    }
    if(carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none'
        counter = carouselImages.length -counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)'
    }
})





// const navSlide = () => {
//     const random = document.querySelector('#random')
//     const nav = document.querySelector('#nav-links')
//     const navLinks = document.querySelectorAll('#nav-links li')

//     random.addEventListener('click', () => {

//         nav.classList.toggle('nav-active')
        
//         navLinks.forEach((link , index) => {
//             if(link.style.animation) {
//                 link.style.animation = ''
//             } else {
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`
//             }
//         })

//         random.classList.toggle('toggle')

//     })
// }

// navSlide()



//Axios requests to grab from backend from restaurant





// document.getElementById('restaurantButton').addEventListener('click',() => {
//     axios.get('http://localhost:4000').then(function (response) {
//         const data = response.data
//         alert(data)
//     })
// })