import fetch from 'node-fetch';

const loadderekurl = async () => {

    const options = {
        method: 'GET',
        headers: {'Content-Type':'application/json'}
    };

    const apiResponse = await fetch('http://34.72.117.179/derek', options);
    const testResponse = await apiResponse.text();
    //console.log("LoginToken: "+loginResponse);
    return testResponse;
};

export default loadderekurl;