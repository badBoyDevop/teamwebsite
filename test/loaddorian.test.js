import assert from 'assert';
import loaddorian from '../utils/loaderdorian.mjs';

it("Test Dorian URL Endpoint", async()=>{ 

    const urlResponse = await loaddorian();
    console.log("URL Response: ")+urlResponse;
 
    assert.equal(urlResponse, "Hello Dorian!");
 } 
 );


