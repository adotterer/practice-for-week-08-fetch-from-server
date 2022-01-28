export function getAllDogs() {
   // Your code here
}

export function getDogNumberTwo() {
    // Your code here
}

export function postNewDog() {
   // Your code here
}

export function postNewDogV2(name, age) {
     // Your code here
}

export function deleteDog(id) {
<<<<<<< HEAD
    // Your code here
=======
      //!!START
    return fetch(`/dogs/${id}/delete`, {method: "POST", headers: {"AUTH": "ckyut5wau0000jyv5bsrud90y"}})
       //!!END
>>>>>>> master
}