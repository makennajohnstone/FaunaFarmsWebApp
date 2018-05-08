import axios from 'axios';

//Contains all of the API calls
class API {
  baseURL = 'http://localhost:3000'
  config = {
    "headers": {
      "Content-Type": "application/json"
    }
  };
<<<<<<< HEAD
=======

  // getMeat = (callback) => {
  //   axios.get(this.baseURL + "/meat")
  //     .then((res) => {
  //     callback(res["data"])
  //   })
  //   .catch((err) => {
  //     console.log("Error fetching meat");
  //   });
  // };
>>>>>>> fcd21f185c8681681eb1b310b2384c80f2fd6cd8
}

export default API;
