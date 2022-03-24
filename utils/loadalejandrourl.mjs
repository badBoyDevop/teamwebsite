import fetch from "node-fetch";

const loadalejandrourl = async () => {

    const options = {
        method: 'GET',
        headers: {'Content-Type':'application/json'}
    };

    const apiResponse = await fetch('http://35.184.63.97/alejandro',options);
    const testResponse = await apiResponse.text();

    return testResponse;
}

export default loadalejandrourl;