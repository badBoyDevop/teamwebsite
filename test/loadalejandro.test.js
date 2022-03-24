import assert from 'assert';
import loadalejandrourl from '../utils/loadalejandrourl.mjs';

it("Test Alejandro URL Endpoint", async()=>{ 

    const urlResponse = await loadalejandrourl();
    console.log("URL Response: ")+urlResponse;
 
    assert.equal(urlResponse, "Hello Alejandro!");
 } 
 );