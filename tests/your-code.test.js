import { describe, expect, test } from "@jest/globals";
import {getAllDogs, getDogNumberTwo, postNewDog, postNewDogV2} from "../assets/js/your-code.js"

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

describe("fetch call helper functions", () => {
    describe("getAllDogs()", () => {
        test("should return a fetch call",(done) => {
            expect(() => returnsPromise(getAllDogs)).not.toThrowError();
            done()
        });
        test("should make a fetch request to the correct endpoint", async () => {
            const res = await getAllDogs()
            expect(res.url).toBe("/dogs")
        });
        test("should not have any options passed to fetch", async () => {
            const res = await getAllDogs()
            expect(res.options).toBe(undefined)
        });
    });

    describe("getDogNumberTwo()", () => {
        test("should return a fetch call", (done) => {
            expect(() => returnsPromise(getDogNumberTwo)).not.toThrowError();
            done();
        });
        test("should make a fetch request to the correct endpoint", async() => {
            const res = await getDogNumberTwo();
            expect(res.url).toBe("/dogs/2");
        })
    });

    describe("postNewDog()", () => {
        test("should return a fetch call", (done) => {
            expect(() => returnsPromise(postNewDog)).not.toThrowError();
            done();
        });
        test("should set the appropriate headers", async () => { 
            expect.assertions(1);
            const res = await postNewDog();
            expect(res.options.headers).toStrictEqual({"Content-Type": "application/x-www-form-urlencoded"})
        });
        test("should send the appropriate body", async () => {
            expect.assertions(3);
            const res = await postNewDog();
            expect(res.options.body instanceof URLSearchParams).toBe(true);
            expect(res.options.body.has("name")).toBe(true)
            expect(res.options.body.has("age")).toBe(true)
        });
    });

    describe("postNewDogV2(name, age)", () => {
        test("should return a fetch call", (done) => {
            expect(() => returnsPromise(postNewDogV2)).not.toThrowError();
            done();
        });
    })
})