const newJokeButton = document.getElementById("newJoke");
const jokeDisplayArea = document.getElementById("joke");

let joke = "";
let setup = "";
let delivery = "";

// newJokeButton.addEventListener("click", function () {
//     const res = new XMLHttpRequest();
//     res.open("GET", "https://v2.jokeapi.dev/joke/Programming,Dark", true)
//     res.onload = function () {
//         if(res.status === 200) {
//             respo = JSON.parse(res.responseText);
//             joke = respo.joke;
//             console.log(respo)
//             jokeDisplayArea.innerHTML = joke;
//         }
//     }
//     res.send();
// })


const makeReq = () => {
    let fetchRes = fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit", {method: "GET"});
    fetchRes.then(res => res.json()).then(res => {
        console.log(res);
        if(res.joke != null) {
            joke = res.joke;
            jokeDisplayArea.innerHTML = joke;
        } 
        else if(res.joke == null) {
            setup = res.setup;
            delivery = res.delivery;
            jokeDisplayArea.innerHTML = `Setup: ${setup}<br>Delivery: ${delivery}`;
        }
    });
    fetchRes.catch(err => console.log("Error: " + err))
}

newJokeButton.addEventListener("click", makeReq)