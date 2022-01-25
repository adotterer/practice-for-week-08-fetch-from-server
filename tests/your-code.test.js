import { expect, test } from "@jest/globals";
import {getAllDogs, postNewDog} from "../assets/js/your-code.js"

function isPromise(p) {
    if (typeof p === 'object' && typeof p.then === 'function') {
      return true;
    }  
    return false;
}

function returnsPromise(f) {
    if (
        f.constructor.name === 'AsyncFunction' ||
        (typeof f === 'function' && isPromise(f()))
    ) {
        return true;
    }
    throw new Error(f.name + " does not return fetch")
}

const unmockedFetch = global.fetch;

beforeEach(() => {
   global.fetch = (url, options) => {
       return new Promise((resolve) => resolve({url, options}));
   }
});

afterEach(() => {
    global.fetch = unmockedFetch;
});

describe("fetch call functions", () => {
    describe("getAllDogs", () => {
        test("should return a fetch call and be asynchronous",(done) => {
            expect(() => returnsPromise(getAllDogs)).not.toThrowError();
            done()
        });
        test("should make a fetch call to the correct end point", (done) => {
            getAllDogs.then((res) => res).catch(e => console.log(e))
            done()
        })
    })
})