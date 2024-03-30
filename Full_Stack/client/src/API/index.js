import axios from 'axios';

const API = Object.create(null);

API.fetchMakes = async () => {
    const response = await axios.get("http://localhost:3000/api/v1/model");
    //console.log(response);
    return response.data;
}

export default API;