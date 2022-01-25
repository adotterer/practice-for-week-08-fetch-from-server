export function getAllDogs() {
    //!!START
    return fetch("/dogs")
    //!!END
}

export function getDogNumberTwo() {
    //!!START
    return fetch("/dogs/2")
    //!!END
}

export function postNewDog() {
    //!!START
    const urlparams = new URLSearchParams({name: "Rosie", age: 1})
    return fetch("/dogs",{method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, body: urlparams})
    //!!END
}

export function postNewDogV2(name, age) {
     //!!START
    return fetch("")
     //!!END
}