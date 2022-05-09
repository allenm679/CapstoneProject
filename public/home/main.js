const navSlide = () => {
    const random = document.querySelector('#random')
    const nav = document.querySelector('#nav-links')
    const navLinks = document.querySelectorAll('#nav-links li')

    random.addEventListener('click', () => {

        nav.classList.toggle('nav-active')
        
        navLinks.forEach((link , index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`
            }
        })

        random.classList.toggle('toggle')

    })
}

navSlide()

// For food slider on homepage

let counter = 1
setInterval(function() {
    document.getElementById('radio', +counter).checked = true
    if(counter > 4){
        counter = 1
    }
}, 5000)


//Axios requests to grab from backend from restaurant





// document.getElementById('restaurantButton').addEventListener('click',() => {
//     axios.get('http://localhost:4000').then(function (response) {
//         const data = response.data
//         alert(data)
//     })
// })



