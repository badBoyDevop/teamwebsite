
 import fetch from "node-fetch";

 const loadjosh = async () => {
 
     const options = {
         method: 'GET',
         headers: {'Content-Type':'application/json'}
     };
 
     const apiResponse = await fetch('http://35.193.92.250/josh',options);
     const testResponse = await apiResponse.text();
 
     return testResponse;
 }
 
 export default loadjosh;