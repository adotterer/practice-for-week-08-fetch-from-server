import { expect } from "@jest/globals";
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
            const res = await getNewDog();
            expect(res.url).toBe("/dogs")
        })
    })
})