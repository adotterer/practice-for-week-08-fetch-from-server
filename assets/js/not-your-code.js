import {getAllDogs, getDogNumberTwo, postNewDog,  postNewDogV2} from "./your-code.js";

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
const postDogsV2Button = document.querySelector(".userinput_dog_submit");

const dogName = document.querySelector(".dog_name");
const dogAge = document.querySelector(".dog_age")



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

postDogsV2Button.addEventListener("click", () => {
    postNewDogV2(dogName.value, dogAge.value)
        .then(cbHandler)
        .catch(errorHandler)
})