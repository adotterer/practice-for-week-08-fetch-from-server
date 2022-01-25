import {getAllDogs, getDogNumberTwo, postNewDog} from "./your-code.js";

const redirectCb = (res) => {
    if(res.redirected) {
        window.location.href = res.url
    }
};

const getAllDogsButton = document.querySelector("#get_dogs")
const getDogTwoButton = document.querySelector("#get_dogs2");
const postDogsButton = document.querySelector("#post_dogs");

getAllDogsButton.addEventListener("click", () => {
    getAllDogs().then((res) => {
        console.log(res, "res")
        const [_, endpoint] = res.url.split("http://localhost:5001/")
        if(endpoint === "dogs" && res.status === 200) {
            // window.location.href = "/dogs"
            console.log(endpoint)
        }
        })
        .catch(e => {
            console.log("ERROR: ", e);
        })
});

getDogTwoButton.addEventListener("click", () => {
    getDogNumberTwo().then(res => {

    })
})

postDogsButton.addEventListener("click", () => {
    postNewDog()
        .then(redirectCb)
        .catch(e => {
        console.log("ERROR: ", e)
    });
})