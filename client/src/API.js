import axios from 'axios';

//Contains all of the API calls
class API {
  baseURL = 'http://localhost:3000'
  config = {
    "headers": {
      "Content-Type": "application/json"
    }
  };
}

export default API;
