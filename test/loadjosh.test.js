import assert from 'assert';
import loadjosh from '../utils/loadjosh.mjs';

it("Test Dorian URL Endpoint", async()=>{ 
    const urlResponse = await loadjosh();
    console.log("URL Response: ")+urlResponse;
    assert.equal(urlResponse, "Hello Josh");
 } 
 );


