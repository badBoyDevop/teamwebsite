
 import fetch from "node-fetch";

const loaddorian = async () => {

    const options = {
        method: 'GET',
        headers: {'Content-Type':'application/json'}
    };

    const apiResponse = await fetch('http://34.71.252.196/dorian',options);
    const testResponse = await apiResponse.text();

    return testResponse;
}

export default loaddorian;