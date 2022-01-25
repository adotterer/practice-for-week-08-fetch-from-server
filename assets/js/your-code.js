export function getAllDogs() {
    //!!START
    return fetch("/dogs")
    //!!END
}

export function getDogNumberTwo() {

}

export function postNewDog() {
    //!!START
    const urlparams = new URLSearchParams({name: "Rosie", age: 5})
    return fetch("/dogs",{method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, body: urlparams})
    //!!END
}
