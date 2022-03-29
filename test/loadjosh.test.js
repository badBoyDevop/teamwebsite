import assert from 'assert';
import loadjosh from '../utils/loadjosh.mjs';

it("Test Josh URL Endpoint", async()=>{ 
    const urlResponse = await loadjosh();
    console.log("URL Response: ")+urlResponse;
    assert.equal(urlResponse, "Hello Josh");
 } 
 );


