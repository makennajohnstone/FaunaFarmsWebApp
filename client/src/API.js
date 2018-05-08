import axios from 'axios';

//Contains all of the API calls
class API {
  baseURL = 'http://localhost:3000'
  config = {
    "headers": {
      "Content-Type": "application/json"
    }
  };

  // getMeat = (callback) => {
  //   axios.get(this.baseURL + "/meat")
  //     .then((res) => {
  //     callback(res["data"])
  //   })
  //   .catch((err) => {
  //     console.log("Error fetching meat");
  //   });
  // };
}

export default API;
