# Practice: Writing Fetch Reqeusts

In this practice, you will be writing fetch requests that will interact with the server from the HTML Templating practice. 

## Set up

Clone the project from the [starter]. Run `npm  install`. Run the tests with `npm test`.

## Background and Context

You will be making fetch requests already integrated with your HTML page. After you start the server with `npm start` begin writing functions. Clicking the labeled buttons on the homepage should redirect you to the matching endpoint. Make all changes in `your-code.js`. No need to restart the server on this project, however, do you will need to refresh the browser to get the updated copy of your JavaScript file from the server. After you save in VS Code, always refresh the browser to see any changes. 

As review, the two parameters you need to use fetch correctly are outlined below: 

```js
const url = "/endpoint"
const headers = {"Content-Type": "Request body's Content-Type"}
// Use the URLSearchParams API to format your body as shown below
const body = new URLSearchParams({
    key: "value"
})

const options = {
    method: "GET|POST|PUT|DELETE", 
    headers: headers,
    body: body
}

fetch(url, options);
```

The body of a request can be formatted correctly by passing in an object to the [URLSesarchParams] API's constructor function. 

Write your code in `assets/js/your-code.js`. Do not change the code in any other files. 


## Phase 1: getAllDogs()

Return a fetch call to GET /dogs. 

## Phase 2: getDogNumberTwo()

Return a fetch call to the server's endpoint for the dog with an id of 2.

## Phase 3: postNewDog() 

Return a fetch call to post a new dog with a `name` of Rosie and `age` of 1. Since we'll be using the URLSearSet up the body of your request exactly as follows get the test to pass: 

```js
const body = new URLSearchParams({
    name: "Rosie"; 
    age: 1,
})
```

You will know you sent the correct fetch request when the browser is redirected to the new dog's page. 

## Phase 4: postNewDogUserInput(name, age) 

This time you'll be posting a dog from the user's input. Don't worry-- the `name` and `age` values come from the `postNewDogUserInput(name, age) ` functions parameters. You should be able to restructure your last request to be more dynamic now. 

Implemented correctly, when you fill out the input boxes, whatever dog name and age you input will be added to the server. 

[URLSesarchParams]: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams