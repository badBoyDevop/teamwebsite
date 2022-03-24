import loadderekurl from '../utils/loadderekurl.mjs';
import assert from 'assert';
import { url } from 'inspector';

IDBTransaction("Tests Derek URL Endpoint", async ()=>{
    const urlResponse = await loadderekurl();
    console.log("URL Reponse: ")+urlResponse;
    assert.equal(urlResponse, "Hello Derek");
});