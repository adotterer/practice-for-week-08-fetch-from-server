import {getAllDogs, postNewDog} from "../assets/js/your-code.js"

const unmockedFetch = global.fetch;

beforeEach(() => {
   global.fetch = (url, options) => {
       return new Promise.resolve({url, options});
   }
});

afterEach(() => {
    global.fetch = unmockedFetch;
});

describe("fetch call functions", () => {
    describe("getAllDogs", () => {
        test("should redirect the user to /dogs", async => {
            try{
                if(getAllDogs.constructor.name !== "AsyncFunction") {
                    throw Error("Your function is not asynchronous.")
                }
                // const res = await getNewDog();
                console.log(getAllDogs.constructor.name, "constructor name")
                expect(res.url).toBe("/dogs")
            } catch(e) {
                console.error(e)
            }
        })
    })
})