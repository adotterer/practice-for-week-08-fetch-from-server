import {getAllDogs, postNewDog} from "./your-code.js";

const postDogsButton = document.querySelector("#post_dogs");

postDogsButton.addEventListener("click", () => {
    postNewDog().then(res => {
        if(res.redirected) {
            window.location.href = res.url
        }
    })
    .catch(e => {
        console.log(e)
    })
})