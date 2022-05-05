// For food slider on homepage

let counter = 1
setInterval(function() {
    document.getElementById('radio', +counter).checked = true
    if(counter > 4){
        counter = 1
    }
}, 5000)


//Axios requests to grab from backend 
document.getElementById('')