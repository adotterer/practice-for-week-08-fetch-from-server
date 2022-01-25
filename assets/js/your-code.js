export function getAllDogs() {
    //!!START
    // return fetch()
    //!!END
}

export function postNewDog() {
    //!!START
    const urlparams = new URLSearchParams({name: "Rosie", age: 5})
    return fetch("/dogs",{method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, body: urlparams})
    //!!END
}
