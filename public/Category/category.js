const baseURL = `http://localhost:4000`

document.getElementById('restbtn').onclick = function () {
    let myRest = document.getElementById("favrest").value
    console.log(`So ${myRest} is your favorite restaurant?`)
}