import {getAllDogs, getDogNumberTwo, postNewDog} from "./your-code.js";

const cbHandler = async (res) => {
    if(res.redirected) {
       return window.location.href = res.url
    }
    const [_, endpoint] = res.url.split("http://localhost:5001/");
    if(endpoint.startsWith("dogs") && res.status === 200) {
        window.location.href = `/${endpoint}`;
    }
    return res
};

const errorHandler = (e) => {
    console.log("ERROR: ", e)
}

const getAllDogsButton = document.querySelector("#get_dogs")
const getDogTwoButton = document.querySelector("#get_dogs2");
const postDogsButton = document.querySelector("#post_dogs");

getAllDogsButton.addEventListener("click", (e) => {
    getAllDogs()
        .then(cbHandler)
        .catch(errorHandler);
});

getDogTwoButton.addEventListener("click", () => {
    getDogNumberTwo()
        .then(cbHandler)
        .catch(errorHandler)
})

postDogsButton.addEventListener("click", () => {
    postNewDog()
        .then(cbHandler)
        .catch(errorHandler);
})