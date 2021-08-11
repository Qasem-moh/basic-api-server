'use strict';
const server = require('../src/server');
// I do not have to run it
const supertest = require('supertest');
const request = supertest(server.app);

//add the name of the module that I am testing 
describe('my API Server', () => {

    beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation();
    })


    it('get data from /food ', async () => {
        const response = await request.get('/food'); // async
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object'); // superagent is behind this 
    });

    // add scenarios & test cases 
    // it('handles not found request', async () => {
    //     // add test
    //     const response = await request.get('/food'); // async
    //     expect(response.status).toEqual(404);
    // });

    //  1. callbacks ---> Promises (Promise.then() ) ----> Async/Await

    it('crete new food', async () => {
        const response = await request.post('/food'); // async
        expect(response.status).toEqual(200);
    });


    // it('/ route works', async () => {
    //     const response = await request.get('/food'); // async
    //     expect(response.status).toEqual(200);
    //     console.log(response.text);
    //     expect(response.text).toEqual('object');
    // });
});