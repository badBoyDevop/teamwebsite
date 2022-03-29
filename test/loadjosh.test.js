import assert from 'assert';
import loaddorian from '../utils/loadjosh.mjs';

it("Test Dorian URL Endpoint", async()=>{ 
    const urlResponse = await loaddorian();
    console.log("URL Response: ")+urlResponse;
    assert.equal(urlResponse, "Hello Josh");
 } 
 );


